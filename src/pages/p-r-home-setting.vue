<template>
  <div class="PRHomeSettingStyle">
    <!-- <div class="PRHomeToolbar">工具栏，放按钮</div> -->
    <div class="PRHomeContain">
      <div class="PRHomeFunction">
        <div
          v-for="(func, index) in functions"
          :key="index"
          :class="
            checked && checked.name === func.name ? 'PRHomeFuncItemChecked' : 'PRHomeFuncItem'
          "
          @click="functionClick(func)"
        >
          {{ func.title }}
        </div>
      </div>
      <div class="PRHomeFuncMain">
        <component v-if="checked" :is="checked.componentType"></component>
      </div>
    </div>
  </div>
</template>

<script>
  import { settingComponents } from '@/components/settings';
  export default {
    name: 'p-r-home-setting',
    components: settingComponents,
    data () {
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
      functionClick (func) {
        this.checked = func;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .PRHomeSettingStyle {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-top: 1px solid var(--theme-border-color);
    border-bottom: 1px solid var(--theme-border-color);
    // .PRHomeToolbar {
    //   background: var(--theme-border-color);
    // }
    .PRHomeContain {
      display: flex;
      border-top: 1px solid var(--theme-border-color);
      flex: 1;
      .PRHomeFunction {
        width: 200px;
        height: 100%;
        border-right: 1px solid var(--theme-border-color);
        color: var(--theme-font-color);
        .PRHomeFuncItem {
          cursor: pointer;
          background: var(--theme-color-argb);
          border: 1px solid #ffffff;
          height: 50px;
          line-height: 45px;
          font-size: 16px;
          text-align: center;
        }
        .PRHomeFuncItem:hover {
          background: #ffffff;
          border: 1px solid var(--theme-border-color);
        }
        .PRHomeFuncItemChecked {
          @extend .PRHomeFuncItem;
          background: #ffffff;
          border: 1px solid var(--theme-border-color);
        }
      }
      .PRHomeFuncMain {
        flex: 1;
        height: 100%;
      }
    }
  }
</style>
