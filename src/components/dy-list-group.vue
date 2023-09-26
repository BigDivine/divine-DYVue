<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.09.26
* Filename      : dy-list-group.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="DyListGroup">
    <Split v-model="splitVal">
      <div slot="left" class="DyListGroupList">
        <div
          v-for="(item, index) in groups"
          :key="index"
          :class="
            checked && checked.name === item.name ? 'DyListGroupItemChecked' : 'DyListGroupItem'
          "
          @click="itemClick(item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div slot="right" class="DyListGroupContent">
        <slot></slot>
      </div>
    </Split>
  </div>
</template>

<script>
  export default {
    name: 'DyListGroup',
    props: {
      groups: { type: Array, default: () => [] },
      checked: { type: Object, default: () => {} }
    },
    components: {},
    data () {
      return { splitVal: 0.2 };
    },
    created () {},
    mounted () {},
    methods: {
      itemClick (item) {
        this.$emit('item-click', item);
      }
    }
  };
</script>
<style lang="scss" scoped>
  .DyListGroup {
    height: 100%;
    width: 100%;
    border-top: 1px solid var(--theme-border-color);
    border-bottom: 1px solid var(--theme-border-color);
    .DyListGroupList {
      height: 100%;
      width: 100%;
      color: var(--theme-font-color);
      .DyListGroupItem {
        cursor: pointer;
        background: var(--theme-color-argb);
        border: 1px solid #ffffff;
        height: 50px;
        line-height: 45px;
        font-size: 16px;
        text-align: center;
      }
      .DyListGroupItem:hover {
        background: #ffffff;
        border: 1px solid var(--theme-border-color);
      }
      .DyListGroupItemChecked {
        @extend .DyListGroupItem;
        background: #ffffff;
        border: 1px solid var(--theme-border-color);
      }
    }
    .DyListGroupContent {
      height: 100%;
      width: 100%;
    }
  }
</style>
