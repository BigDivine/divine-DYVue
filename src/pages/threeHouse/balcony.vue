<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : balcony.vue
* Description   : 阳台
* Arguments     : 
********************************************************************-->
<template>
  <div class="balcony"></div>
</template>

<script>
  export default {
    name: 'balcony',
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
  .balcony {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #efefef 1px, transparent 1px),
      linear-gradient(to bottom, #efefef 1px, transparent 1px);
    background-repeat: repeat; /* 默认为 repeat */
    background-size: 80px 80px;
  }
</style>
