<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.01
* Filename      : source-layout.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="source-layout">
    <div class="container">
      <div class="yigui">120*53衣柜</div>
      <div class="chuang">200*150床</div>
      <div class="shafa">200*95沙发</div>
      <div class="zhuozi9040">90*40桌子</div>
      <div class="zhuozi10060">100*60桌子</div>
      <div class="zhuozi9050">90*50桌子</div>
      <div class="zhuozi4040">40*40柜</div>
      <div class="dianshigui">120*45电柜</div>
      <!-- 入户门 -->
      <div
        style="position:absolute;top:0;left:120px;width:85px;height:10px;background: #000;color:#fff;text-align:center;"
      ></div>
      <!--窗帘暖气 -->
      <div
        style="position:absolute;top:120px;bottom:0px;right:0;width:20px;background: #000;color:#fff;text-align:center;"
      ></div>
      <!--阳台门 -->
      <div
        style="position:absolute;top:60px;right:0;width:10px;height:60px;background: #f00; "
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scheme-two-layout'
  };
</script>
<style lang="scss" scoped>
  .source-layout {
    .container {
      background: #fff;
      width: 480px;
      height: 300px;
      margin-left: 40px;
      margin-top: 20px;
      position: relative;
      .common {
        position: absolute;
        background: $dy-border-color;
        color: #000000;
        text-align: center;
      }
      .yigui {
        @extend .common;
        top: 0;
        left: 0px;
        height: 53px;
        width: 120px;
      }
      .chuang {
        @extend .common;
        bottom: 0;
        right: 20px;
        width: 150px;
        height: 200px;
      }
      .shafa {
        @extend .common;
        left: 120px;
        bottom: 0px;
        width: 95px;
        height: 200px;
      }
      .zhuozi9040 {
        @extend .common;
        bottom: 60px;
        left: 0px;
        height: 90px;
        width: 40px;
      }
      .zhuozi10060 {
        @extend .common;
        bottom: 0px;
        left: 0px;
        width: 100px;
        height: 60px;
      }
      .zhuozi9050 {
        @extend .common;
        bottom: 0;
        right: 170px;
        width: 90px;
        height: 50px;
      }
      .zhuozi4040 {
        @extend .common;
        top: 0px;
        right: 120px;
        width: 40px;
        height: 40px;
      }
      .dianshigui {
        @extend .common;
        top: 0px;
        right: 0px;
        height: 45px;
        width: 120px;
        background: #f0f;
      }
    }
  }
</style>
