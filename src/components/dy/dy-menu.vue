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
    <DYMenuItem
      v-for="(item, index) in navList"
      :key="index"
      :icon="require('@/assets/' + item.icon + '.png')"
      :menu="item"
      :expand="index === expandIndex"
      @item-click="menuItemClick"
      @nav-click="navClick(item, index)"
    ></DYMenuItem>
    <slot v-if="!navList || !navList.length"></slot>
  </div>
</template>

<script>
import DYMenuItem from './dy-menu-item';
export default {
  name: 'DyMenu',
  components: { DYMenuItem },
  props: {
    navList: {
      type: Array,
      default: () => []
    },

    mulExpand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expandIndex: 0
    };
  },

  methods: {
    navClick(item, index) {
      if (this.expandIndex === index) {
        this.expandIndex = -1;
        return;
      }
      this.expandIndex = index;
    },
    menuItemClick(menu) {
      this.$emit('item-click', menu);
      this.expandIndex = -1;
    }
  }
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
