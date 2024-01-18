<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.18
* Filename      : home.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Home">
    <div class="HomeGroup">
      <div class="HomeCell"><dy-hi></dy-hi></div>
      <div class="HomeCell"></div>
    </div>
    <div class="HomeGroup">
      <div class="HomeCell">
        <dy-clock></dy-clock>
      </div>
      <div class="HomeCell"></div>
    </div>
    <div class="HomeGroup">
      <div class="HomeCell"></div>
      <div class="HomeCell"></div>
    </div>
  </div>
</template>

<script>
  import DyClock from '@/components/dy-clock';
  import DyHi from '@/components/dy-hi';

  export default {
    name: 'Home',
    components: { DyClock, DyHi },
    data () {
      return {};
    },
    created () {},
    mounted () {},
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .Home {
    height: 100%;
    width: 100%;
    display: flex;
    border-top: 1px solid $dy-border-color;
    border-bottom: 1px solid $dy-border-color;
    .HomeGroup {
      display: flex;
      flex: 1;
      flex-direction: column;
      .HomeCell {
        flex: 1;
        .HomeCellContain {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
