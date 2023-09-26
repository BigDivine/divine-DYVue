<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : master-toilet.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="master-toilet"></div>
</template>

<script>
  export default {
    name: 'master-toilet',
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
  .master-toilet {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #efefef 1px, transparent 1px),
      linear-gradient(to bottom, #efefef 1px, transparent 1px);
    background-repeat: repeat; /* 默认为 repeat */
    background-size: 80px 80px;
  }
</style>
