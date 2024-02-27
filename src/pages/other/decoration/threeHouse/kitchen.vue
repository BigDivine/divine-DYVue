<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : kitchen.vue
* Description   : 厨房
* Arguments     : 
********************************************************************-->
<template>
  <div class="kitchen">
    <div class="wall1">
      <div class="downBox90">90高地柜</div>
      <div class="upBox">80高柜</div>
      <div class="elBox1">电器柜1</div>
      <div class="elBox2">电器柜2</div>
      <div class="piping">水道</div>
      <div class="socket1"></div>
      <div class="socket2"></div>
      <div class="socket3"></div>
      <div class="socket4"></div>
      <div class="socket5"></div>
    </div>
    <div class="wall2">
      <div class="window">窗户(140*175)</div>
      <div class="downBox90">90高地柜</div>
      <div class="upBox">80高柜</div>
      <div class="piping">水道</div>
      <div class="flue">烟道</div>
      <div class="socket1"></div>
      <div class="socket2"></div>
    </div>
    <div class="wall3">
      <div class="extractor">抽油烟机</div>
      <div class="downBox85">85高地柜</div>
      <div class="upBox">80高柜</div>
      <div class="flue">烟道</div>
      <div class="socket1"></div>
      <div class="socket2"></div>
      <div class="socket3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'kitchen',
    components: {},
    data () {
      return {};
    },
    created () {},
    mounted () {},
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .kitchen {
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #efefef 1px, transparent 1px),
      linear-gradient(to bottom, #efefef 1px, transparent 1px);
    background-repeat: repeat; /* 默认为 repeat */
    background-size: 80px 80px;
    .wall1 {
      position: relative;
      width: 188px;
      height: 240px;
      border: 1px solid #000;
      margin-top: 80px;
      margin-left: 40px;
      .piping {
        position: absolute;
        top: 80px;
        bottom: 90px;
        right: 0;
        color: #fff;
        width: 30px;
        background: #000;
      }
      .elBox1 {
        // 电器柜
        position: absolute;
        left: 0px;
        top: 80px;
        width: 60px;
        height: 50px;
        background: #eaeaea;
      }
      .elBox2 {
        // 电器柜
        position: absolute;
        left: 0px;
        top: 130px;
        width: 60px;
        height: 50px;
        background: #cccccc;
      }
      .socket1 {
        // 预留插座
        position: absolute;
        left: 30px;
        bottom: 80px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket2 {
        // 预留插座
        position: absolute;
        left: 30px;
        bottom: 130px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket3 {
        // 预留插座
        position: absolute;
        right: 50px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket4 {
        // 预留插座
        position: absolute;
        right: 60px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #0f0;
      }
      .socket5 {
        // 预留插座
        position: absolute;
        right: 70px;
        bottom: 110px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
    }
    .wall2 {
      position: relative;
      width: 360px;
      height: 240px;
      border: 1px solid #000;
      margin-top: 80px;
      margin-left: 52px;
      .window {
        position: absolute;
        top: 0;
        right: 75px;
        width: 175px;
        height: 140px;
        background: #eaeaea;
        text-align: center;
        z-index: 1;
      }
      .piping {
        position: absolute;
        top: 80px;
        bottom: 90px;
        left: 0;
        color: #fff;
        width: 30px;
        background: #000;
      }
      .flue {
        position: absolute;
        top: 80px;
        bottom: 90px;
        right: 0px;
        width: 50px;
        background: #000;
        color: #fff;
        text-align: center;
      }
      .socket1 {
        // 洗碗机插座
        position: absolute;
        left: 150px;
        bottom: 50px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket2 {
        // 净水机插座
        position: absolute;
        left: 90px;
        bottom: 50px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
    }
    .wall3 {
      position: relative;
      width: 188px;
      height: 240px;
      border: 1px solid #000;
      margin-left: 80px;
      margin-top: 80px;
      .extractor {
        position: absolute;
        bottom: 115px;
        left: 40px;
        width: 90px;
        height: 45px;
        background: #aafdaa;
        text-align: center;
      }
      .flue {
        position: absolute;
        top: 80px;
        bottom: 85px;
        left: 0px;
        width: 35px;
        background: #000;
        text-align: center;
        color: #fff;
      }
      .socket1 {
        // 烟机插座
        position: absolute;
        left: 70px;
        bottom: 180px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket2 {
        // 预留插座
        position: absolute;
        left: 80px;
        bottom: 50px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
      .socket3 {
        // 预留插座
        position: absolute;
        right: 20px;
        bottom: 100px;
        height: 10px;
        width: 10px;
        background: #00f;
      }
    }

    .downBox90 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 90px;
      background: #efefef;
      text-align: center;
    }
    .downBox85 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 85px;
      background: #efefef;
      text-align: center;
    }
    .upBox {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: #efefef;
      text-align: center;
    }
  }
</style>
