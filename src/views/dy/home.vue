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
      <div class="HomeCell">
        <dy-hi></dy-hi>
      </div>
      <div class="HomeCell">
        <!-- <dy-lottery></dy-lottery> -->
        <div
          class="splitCardItem"
          v-for="(target, index) in [
            {
              targetName: '指标1',
              targetValue: '1234590.1267'
            }
          ]"
          :key="'1' + index">
          <div
            class="splitCardCell"
            v-for="(targetCell, j) in target.targetValue || 0"
            :key="j">
            {{ targetCell }}
          </div>
        </div>

        <div
          class="splitCardItem"
          v-for="(target, index) in [
            {
              targetName: '指标1',
              targetValue: '14567890.127'
            }
          ]"
          :key="'2' + index">
          <span
            class="splitCardCell"
            :style="{ fontSize: '16px' }"
            v-for="(targetCell, j) in target.targetValue"
            :key="j">
            {{ targetCell }}
          </span>
        </div>
      </div>
    </div>
    <div class="HomeGroup">
      <div class="HomeCell">
        <dy-clock></dy-clock>
      </div>
      <div class="HomeCell">
        <!-- <dy-circle-swiper></dy-circle-swiper> -->
      </div>
    </div>
    <div class="HomeGroup">
      <div class="HomeCell">
        <!-- <dy-star-bling></dy-star-bling> -->
        <dy-weather></dy-weather>
      </div>
      <div class="HomeCell"></div>
    </div>
  </div>
</template>

<script>
import HomeComponents from '@/components/dy/home/index.js';

export default {
  name: 'Home',
  components: HomeComponents,
  data() {
    return {};
  },
  created() {},
  mounted() {},
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
      overflow: hidden;
      .splitCardItem {
        font-family: 'PingFang SC', 'Microsoft YaHei', '微软雅黑', 'Helvetica Neue', Helvetica,
          'Hiragino Sans GB', sans-serif, Arial !important;
        display: flex;
        .splitCardCell {
          margin: 1px;
          padding: 2px 7px 2px 2px;
          background: #f00;
          font-size: 40px;
          width: 40px;
          text-align: center;
          font-weight: bold;
          font-style: oblique;
          line-height: 1;
          color: #ccc;
        }
      }
      // .HomeCellContain {
      //   height: 100%;
      //   width: 100%;
      // }
    }
  }
}
</style>
