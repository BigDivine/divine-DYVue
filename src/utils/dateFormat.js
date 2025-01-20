/**
 *
 * @param {Date,String} date 日期：Date对象；日期字符串：20210101、2021-01-01、2021/01/01、2021.01.01、2021年01月01日
 * @param {String} fmt 格式化规则
 * @return {String}
 */
export function dateFormat(date, fmt) {
  let sourceDate = date;
  let dateIsDate = date instanceof Date;
  if (!dateIsDate) {
    sourceDate = transToDate(date);
  }
  let fullYear = sourceDate.getFullYear();
  let month = sourceDate.getMonth() + 1;
  let day = sourceDate.getDate();
  // fmt传hh为12小时制；传HH为24小时制
  let hour12 = sourceDate.getHours() > 12 ? sourceDate.getHours() - 12 : sourceDate.getHours();
  let hour24 = sourceDate.getHours();
  let minute = sourceDate.getMinutes();
  let second = sourceDate.getSeconds();
  let millisecond = sourceDate.getMilliseconds();
  if (fmt) {
    fmt = fmt.replace('yyyy', fullYear);
    fmt = fmt.replace('MM', month < 10 ? '0' + month : month);
    fmt = fmt.replace('dd', day < 10 ? '0' + day : day);
    fmt = fmt.replace('hh', hour12 < 10 ? '0' + hour12 : hour12);
    fmt = fmt.replace('HH', hour24 < 10 ? '0' + hour24 : hour24);
    fmt = fmt.replace('mm', minute < 10 ? '0' + minute : minute);
    fmt = fmt.replace('ss', second < 10 ? '0' + second : second);
    fmt = fmt.replace('SSS', millisecond);
    return fmt;
  }
}
function transToDate(date) {
  // new Date('20210101') Invalid Date
  // new Date('2021-01-01') Fri Jan 01 2021 08:00:00 GMT+0800 (中国标准时间)
  // new Date('2021/01/01') Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  // new Date('2021.01.01') Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  // new Date('2021年01月01日') Invalid Date
  // new Date('2021-01') Fri Jan 01 2021 08:00:00 GMT+0800 (中国标准时间)
  // new Date('2021/01') Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  // new Date('2021.01') Fri Jan 01 2021 00:00:00 GMT+0800 (中国标准时间)
  // new Date('2021年01月') Invalid Date

  if (date instanceof Date) {
    return date;
  } else {
    // if(   /\d{4}年\d{2}月/.test("2021年01月"))
    try {
      return new Date(date);
    } catch (e) {
      let not2Date1 = /\d{6}/.test(date);
      let not2Date2 = /\d{8}/.test(date);
      let not2Date3 = /\d{4}年/.test(date);
      let not2Date4 = /\d{4}年\d{2}月/.test(date);
      let not2Date5 = /\d{4}年\d{2}月\d{2}日/.test(date);
      // let not2Date6 = /\d{4}年\d{2}月/.test(date);
      // let not2Date7 = /\d{4}年\d{2}月/.test(date);
      if (not2Date1) {
        return new Date(date.substring(0, 4) + '-' + date.substring(4, 6));
      } else if (not2Date2) {
        return new Date(
          date.substring(0, 4) + '-' + date.substring(4, 6) + '-' + date.substring(6, 8)
        );
      } else if (not2Date3) {
        return new Date(date.substring(0, 4));
      } else if (not2Date4) {
        return new Date(date.substring(0, 4) + '-' + date.substring(5, 7));
      } else if (not2Date5) {
        return new Date(
          date.substring(0, 4) + '-' + date.substring(5, 7) + '-' + date.substring(8, 10)
        );
      } else {
        return undefined;
      }
    }
  }
}
