<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.12.11
* Filename      : left-layout.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="left-layout">
    <div class="leftWall">
      <div class="gaogui">
        <div style="background:#eaeaea;height:75px;width:100%;"></div>
        <div style="background:#efefef;height:40px;width:100%;border-top:1px solid #cccccc;"></div>
        <div style="background:#efefef;height:40px;width:100%;border-top:1px solid #cccccc;"></div>
        <div style="background:#efefef;height:70px;width:100%;border-top:1px solid #cccccc;"></div>
      </div>
      <div class="diaogui">
        <div style="background:#eaeaea;height:75px;width:45px;border-left:1px solid #cccccc;"></div>
        <div style="background:#efefef;height:75px;width:45px;border-left:1px solid #cccccc;"></div>
        <div style="background:#efefef;height:75px;width:45px;border-left:1px solid #cccccc;"></div>
      </div>
      <div class="baoguan"></div>
      <div class="digui">
        <div style="height:4px;background:#080808"></div>
        <div style="height:76.5px;display: flex;">
          <div style="background:#eaeaea;height:76.5px; border-left:1px solid #cccccc;">
            <div style="background:#eaeaea;height:38px;width:80px;"></div>
            <div
              style="background:#efefef;height:38.5px;width:80px;border-top:1px solid #cccccc;"
            ></div>
          </div>
          <div
            style="background:#efefef;height:76.5px;width:57px;border-left:1px solid #cccccc;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'left-layout',
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
  .left-layout {
    height: 100%;
    width: 100%;
    .leftWall {
      margin: 4px 0 0 4px;
      height: 240px;
      width: 185px;
      background: #fff;
      border-top: 5px solid #cccccc;
      border-bottom: 10px solid #cccccc;
      position: relative;
      .gaogui {
        position: absolute;
        bottom: 0;
        left: 0;
        top: 0;
        width: 50px;
      }
      .diaogui {
        position: absolute;
        right: 0;
        top: 0;
        width: 135px;
        display: flex;
      }
      .baoguan {
        background: #000;
        position: absolute;
        top: 75px;
        right: 0;
        height: 69.5px;
        width: 26px;
      }
      .digui {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 135px;
        height: 80.5px;
      }
    }
  }
</style>
