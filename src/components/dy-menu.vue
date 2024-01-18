<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.18
* Filename      : dy-menu.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyMenu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'DyMenu'
  };
</script>
<style lang="scss" scoped>
  .DyMenu {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(to right, $dy-primary-color, $dy-bg-color);
  }
</style>
