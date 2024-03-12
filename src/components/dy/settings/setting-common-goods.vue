<template>
  <div>
    <div
    style="height:100px;50px;background:#ccc;cursor:pointer;"
      @touchstart="startLongPress"
      @touchend="endLongPress"
      @touchcancel="endLongPress"
    >
      复制2
    </div>
    <div @click="toClipboard('设置首页推荐商品（图片，路由，名称，id）')">复制1</div>
  </div>
</template>

<script>
export default {
  name: 'setting-common-goods',
  data() {
    return { longPressTimer: null };
  },
  methods: {
    startLongPress(event) {
      // 长按事件开始
      console.log('长按事件开始');
      this.longPressTimer = setTimeout(() => {
        // 执行长按后的操作，例如复制内容
        console.log('复制内容');
        this.toClipboard(('设置首页推荐商品（图片，路由，名称，id）1111'));
      }, 1000); // 设置长按的阈值为1000毫秒
    },
    endLongPress() {
      // 长按事件结束
      console.log('长按事件结束');
      clearTimeout(this.longPressTimer);
    },
    toClipboard(message) {
      let inputDom = document.createElement('textarea'); // js创建一个文本框
      document.body.appendChild(inputDom); //将文本框暂时创建到实例里面
      inputDom.value = message; //将需要复制的内容赋值到创建的文本框中
      inputDom.select(); //选中文本框中的内容
      inputDom.focus();
      document.execCommand('copy'); //执行复制操作
      document.body.removeChild(inputDom); //最后移出
      console.log('复制成功');
    }
  }
};
</script>

<style lang="scss" scoped></style>
