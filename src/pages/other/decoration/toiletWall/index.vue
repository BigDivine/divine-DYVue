<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.10.15
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="index">
    <div class="walll">
      <div style="top:300px;" class="small">
        <!-- <img src="@/assets/2.png" /> -->
      </div>
      <div class="big" style="top:0px;">
        <!-- <img src="@/assets/1.png" /> -->
      </div>
      <div class="big" style="top:150px;">
        <!-- <img src="@/assets/1.png" /> -->
      </div>
      <div class="small" style="top:380px;">
        <!-- <img src="@/assets/2.png" /> -->
      </div>
    </div>
    <div class="walll" style="margin-left:10px;">
      <div style="top:0px;" class="small">
        <!-- <img src="@/assets/2.png" /> -->
      </div>
      <div class="big" style="top:80px;">
        <!-- <img src="@/assets/1.png" /> -->
      </div>
      <div class="big" style="top:230px;">
        <!-- <img src="@/assets/1.png" /> -->
      </div>
      <div class="small" style="top:380px;">
        <!-- <img src="@/assets/2.png" /> -->
      </div>
    </div>
    <div class="walll" style="margin-left:10px;">
      <div class="big1" style="bottom:80px;left:0;"></div>
      <div class="big1" style="bottom:80px;right:0;"></div>
      <div class="big" style="bottom:380px;"></div>
      <div class="small" style="bottom:0px;"></div>
    </div>
    <div class="walll" style="margin-left:10px;">
      <div class="big1" style="bottom:0px;left:0;"></div>
      <div class="big1" style="bottom:0px;right:0;"></div>
      <div class="big" style="bottom:300px;"></div>
      <div class="small" style="bottom:450px;"></div>
    </div>
    <div class="walll" style="margin-left:10px;">
      <div class="big" style="bottom:0px; "></div>
      <div class="big" style="bottom:150px; "></div>
      <div class="big" style="bottom:300px;"></div>
      <div class="small" style="bottom:450px;"></div>
    </div>
    <div class="walll" style="margin-left:10px;">
      <div class="big" style="bottom:80px; "></div>
      <div class="big" style="bottom:230px; "></div>
      <div class="big" style="bottom:380px;"></div>
      <div class="small" style="bottom:0px;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
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
  .index {
    width: 100%;
    height: 100%;
    padding: 50px 0 0 0;
    display: flex;
    justify-content: center;
    .walll {
      position: relative;
      height: 500px;
      width: 300px;
      background: #fff;
      .big {
        position: absolute;
        bottom: 230px;
        left: 0;
        right: 0;
        height: 150px;
        background-image: url('../../../../assets/1.png');
        background-repeat: repeat;
        background-size: 100% 100%;
      }
      .big1 {
        position: absolute;
        bottom: 230px;
        width: 150px;
        height: 300px;
        background-image: url('../../../../assets/1-1.png');
        background-repeat: repeat;
        background-size: 100% 100%;
      }
      .small {
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 80px;
        width: 160x;
        background-image: url('../../../../assets/2.png');
        // background-repeat: repeat-x;
        background-size: cover;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
