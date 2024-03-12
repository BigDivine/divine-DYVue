<!--********************************************************************
* Author        : yangzelong
* Email         :
* Create Date   : 2020/12/12
* Filename      :
* Description   : 单据管理首页-工具栏-工具栏按钮-通用组件
* Arguments     : data:按钮信息
                  @click():按钮点击事件监听
********************************************************************-->
<template>
  <div class="YToolItem">
    <Button
      size="small"
      class="toolItem"
      :style="color ? { color: color } : {}"
      @click="toolItemClick()"
      >{{ actionTitle }}
    </Button>
    <div v-if="divider" class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'y-tool-item',
  props: {
    action: { type: Object, default: () => {} },
    title: { type: String, default: '' },
    divider: { type: Boolean, default: true },
    color: { type: String, default: '' }
  },
  computed: {
    actionTitle () {
      return this.title || (this.action && this.action.title)
    },
    actionEnabled () {
      return this.action ? this.action.enabled : true
    }
  },
  methods: {
    toolItemClick () {
      if (this.actionEnabled) {
        this.$emit('on-click')
      }
    }
  }
}
</script>

<style lang="scss" scope>
  .YToolItem {
    display: flex;
    justify-content: center;
    align-items: center;

    .toolItem {
      min-width: 10px;
      height: 20px;
      font-size: 14px;
      text-align: center;
      border: 1px solid transparent !important;
      box-shadow: none;
      background: rgba(255, 255, 255, 0) !important;
    }
    .divider {
      height: 15px;
      width: 1px;
      background: #e8e8e8;
    }
  }
</style>
