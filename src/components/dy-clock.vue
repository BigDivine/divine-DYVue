<template>
  <div class="DYClockStyle">
    <div>{{ yymmdd }}</div>
    <div>{{ weekday }}</div>
    <div class="timeContain">
      <div class="dateLabel" :class="minutesLebal === '00' ? 'hourAnim' : ''">
        {{ hoursLebal }}
      </div>
      :
      <div class="dateLabel" :class="secondsLebal === '00' ? 'minutesAnim' : ''">
        {{ minutesLebal }}
      </div>
      :
      <div class="dateLabel secondAnim">{{ secondsLebal }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dy-clock',
    data () {
      return {
        yymmdd: '',
        weekday: '',
        hoursLebal: '',
        minutesLebal: '',
        secondsLebal: ''
      };
    },
    created () {
      this.updateDate();

      setInterval(() => {
        this.updateDate();
      }, 1000);
    },
    methods: {
      updateDate () {
        let currentDate = new Date();
        let fullYear = currentDate.getFullYear();
        let month = currentDate.getMonth();
        month = month + 1;
        if (month < 10) {
          month = '0' + month;
        }
        let date = currentDate.getDate();
        if (date < 10) {
          date = '0' + date;
        }
        this.yymmdd = fullYear + '年' + month + '月' + date + '日';
        this.weekday = currentDate.getDay();
        this.weekday = this.getWeekday(this.weekday);

        let hours = currentDate.getHours();
        if (hours < 10) {
          hours = '0' + hours;
        }
        this.hoursLebal = hours;
        let minutes = currentDate.getMinutes();
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        this.minutesLebal = minutes;
        let seconds = currentDate.getSeconds() + 1;
        if (seconds < 10) {
          seconds = '0' + seconds;
        } else if (seconds === 60) {
          seconds = '00';
        }
        this.secondsLebal = seconds;
      },
      getWeekday (day) {
        switch (day) {
          case 1:
            return '星期一';
          case 2:
            return '星期二';
          case 3:
            return '星期三';
          case 4:
            return '星期四';
          case 5:
            return '星期五';
          case 6:
            return '星期六';
          case 7:
            return '星期日';
          default:
            return '不知是周几';
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .DYClockStyle {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-size: 20px;

    .timeContain {
      display: flex;
      height: 60px;
      font-size: 30px;
      color: #ffffff;
      .dateLabel {
        width: 40px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border-radius: 5px;
        background-color: aquamarine;
        background-image: url('../assets/icons/ic_date_bg.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
      .hourAnim {
        animation-name: timeLabel;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-timing-function: linear;
        animation-direction: alternate;
        animation-play-state: running;
      }
      .minutesAnim {
        animation-name: timeLabel;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-timing-function: linear;
        animation-direction: alternate;
        animation-play-state: running;
      }
      .secondAnim {
        animation-name: timeLabel;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
      }
    }
    @keyframes timeLabel {
      0% {
        transform: rotateX(0deg);
      }
      50% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0deg);
      }
    }
  }
</style>
