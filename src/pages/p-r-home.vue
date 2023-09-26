<template>
  <div class="PRHomeStyle">
    <div class="PRHomeGroup">
      <div class="PRHomeCell"><dy-hi></dy-hi></div>
      <div class="PRHomeCell"></div>
    </div>
    <div class="PRHomeGroup">
      <div class="PRHomeCell">
        <dy-clock></dy-clock>
      </div>
      <div class="PRHomeCell"></div>
    </div>
    <div class="PRHomeGroup">
      <div class="PRHomeCell"></div>
      <div class="PRHomeCell"></div>
    </div>
  </div>
</template>

<script>
  import DyClock from '@/components/dy-clock';
  import DyHi from '@/components/dy-hi';
  export default {
    name: 'p-r-home',
    components: {
      DyClock,
      DyHi
    },
    data () {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  .PRHomeStyle {
    height: 100%;
    width: 100%;
    display: flex;
    border-top: 1px solid var(--theme-border-color);
    border-bottom: 1px solid var(--theme-border-color);
    .PRHomeGroup {
      display: flex;
      flex: 1;
      flex-direction: column;
      .PRHomeCell {
        flex: 1;
        .PRHomeCellContain {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
