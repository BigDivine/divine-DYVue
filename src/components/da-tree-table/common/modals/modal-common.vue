<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2022.**.**
* Filename      :
* Description   :
* Arguments     :
********************************************************************-->
<template>
  <div ref="modalCommonContent">{{ data.content }}</div>
</template>

<script>
export default {
  name: 'common',
  props: {
    data: [String, Object]
  },
  watch: {
    'data.content' (newVal) {
      let view = this.$refs.modalCommonContent
      view.innerHTML = newVal
    }
  },
  created () {
    this.$nextTick(() => {
      let view = this.$refs.modalCommonContent
      view.innerHTML = this.data.content
    })
  }
}
</script>
