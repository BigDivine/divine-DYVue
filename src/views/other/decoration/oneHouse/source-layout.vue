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
    <div style="background:#f0f;width:960px;height:600px;position:relative;">
      <div
        style="position:absolute;top:0;left:0;width:240px;height:106px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        衣柜
      </div>
      <div
        style="position:absolute;bottom:0;left:0px;width:300px;height:400px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        床
      </div>
      <div
        style="position:absolute;bottom:0;left:300px;width:400px;height:190px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        沙发
      </div>
      <!-- <div
        style="position:absolute;bottom:0;left:430px;width:80px;height:180px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        90*40桌子
      </div> -->
      <div
        style="position:absolute;bottom:0;left:700px;width:200px;height:120px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        100*60桌子
      </div>
      <div
        style="position:absolute;top:0;right:80px;width:180px;height:100px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        90*50桌子
      </div>
      <div
        style="position:absolute;top:0;right:0;width:80px;height:80px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        40*40床头柜
      </div>
      <div
        style="position:absolute;top:0;right:260px;width:240px;height:90px;background:$dy-border-color;color:#000000;text-align:center;"
      >
        120*45电视柜
      </div>
      <!-- 入户门 -->
      <div
        style="position:absolute;top:0;left:240px;width:170px;height:20px;background: #000;color:#fff;text-align:center;"
      ></div>
      <!--窗帘暖气 -->
      <div
        style="position:absolute;top:0;right:0;width:40px;height:100%;background: #000;color:#fff;text-align:center;"
      ></div>
      <!--阳台门 -->
      <div
        style="position:absolute;top:120px;right:0;width:20px;height:120px;background: #f00; "
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'source-layout'
  };
</script>
<style lang="scss" scoped>
  .source-layout {
  }
</style>
