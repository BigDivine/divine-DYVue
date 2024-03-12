<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.18
* Filename      : home-setting.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="HomeSetting">
    <!-- <div class="HomeToolbar">工具栏，放按钮</div> -->
    <div class="HomeContain">
      <div class="HomeFunction">
        <div
          v-for="(func, index) in functions"
          :key="index"
          :class="checked && checked.name === func.name ? 'HomeFuncItemChecked' : 'HomeFuncItem'"
          @click="functionClick(func)"
        >
          {{ func.title }}
        </div>
      </div>
      <div class="HomeFuncMain">
        <component v-if="checked" :is="checked.componentType"></component>
      </div>
    </div>
  </div>
</template>

<script>
import settingComponents from '@/components/dy/settings/index.js';
export default {
  name: 'HomeSetting',
  components: settingComponents,
  data() {
    return {
      functions: [
        {
          name: 'commonFunc',
          title: '常用功能',
          componentType: 'setting-common-func'
        },
        {
          name: 'commonGoods',
          title: '常见商品',
          componentType: 'setting-common-goods'
        }
      ],

      checked: null
    };
  },
  methods: {
    functionClick(func) {
      this.checked = func;
    }
  }
};
</script>
<style lang="scss" scoped>
.HomeSetting {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-top: 1px solid $dy-border-color;
  border-bottom: 1px solid $dy-border-color;
  // .HomeToolbar {
  //   background: $dy-border-color;
  // }
  .HomeContain {
    display: flex;
    border-top: 1px solid $dy-border-color;
    flex: 1;
    .HomeFunction {
      width: 200px;
      height: 100%;
      border-right: 1px solid $dy-border-color;
      color: $dy-font-color;
      .HomeFuncItem {
        cursor: pointer;
        background: $dy-bg-color;
        border: 1px solid #ffffff;
        height: 50px;
        line-height: 45px;
        font-size: 16px;
        text-align: center;
      }
      .HomeFuncItem:hover {
        background: #ffffff;
        border: 1px solid $dy-border-color;
      }
      .HomeFuncItemChecked {
        @extend .HomeFuncItem;
        background: #ffffff;
        border: 1px solid $dy-border-color;
      }
    }
    .HomeFuncMain {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
