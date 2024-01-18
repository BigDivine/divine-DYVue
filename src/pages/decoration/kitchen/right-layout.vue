<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.12.11
* Filename      : right-layout.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="right-layout">
    <div class="rightWall">
      <div class="digaotai">
        <div class="taimian"></div>
        <div class="digaogui"></div>
      </div>
      <div class="diguitai">
        <div class="taimian"></div>
        <div class="digui">
          <div style="height:100%;width:32px;border-right:1px solid #ccc"></div>
          <div style="height:100%;width:45px;border-right:1px solid #ccc"></div>
          <div style="height:100%;width:45px;border-right:1px solid #ccc"></div>
          <div style="height:100%;width:4.5px;background:#ccc;"></div>
        </div>
      </div>
      <div class="yandao"></div>
      <div class="diaogui">
        <div style="height:75px;width:45px;background:#eaeaea;border-right:1px solid #ccc"></div>
        <div style="height:75px;width:45px;background:#eaeaea;border-right:1px solid #ccc"></div>
        <div style="height:75px;width:45px;background:#eaeaea;border-right:1px solid #ccc"></div>
        <div style="height:75px;width:4.5px;background:#ccc;"></div>
      </div>
      <div class="yanji"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'right-layout',
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
  .right-layout {
    height: 100%;
    width: 100%;
    .rightWall {
      height: 240px;
      width: 183.5px;
      background: #fff;
      margin: 40px 0 0 40px;
      border-top: 5px solid #cccccc;
      border-bottom: 10px solid #cccccc;
      position: relative;
      .digaotai {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 57px;
        height: 80.5px;
        .taimian {
          width: 57px;
          height: 4px;
          background: #000;
        }
        .digaogui {
          width: 57px;
          height: 76.5px;
          background: #eaeaea;
          border-right: 1px solid #ccc;
        }
      }
      .diguitai {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 126.5px;
        height: 70px;
        .taimian {
          width: 126.5px;
          height: 4px;
          background: #000;
        }
        .digui {
          width: 126.5px;
          height: 66px;
          background: #eaeaea;
          display: flex;
        }
      }
      .yandao {
        position: absolute;
        left: 0;
        top: 0;
        width: 44px;
        height: 144.5px;
        background: #000;
      }
      .diaogui {
        position: absolute;
        right: 0;
        top: 0;
        width: 139.5px;
        display: flex;
      }
      .yanji {
        position: absolute;
        right: 4.5px;
        top: 75px;
        width: 90px;
        height: 10px;
        background: #000;
      }
    }
  }
</style>
