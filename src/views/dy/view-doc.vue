<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.18
* Filename      : view-doc.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="ViewDoc">
    <DaTreeTable
      :mode="2"
      :isCustomTool="true"
      :showTree="true"
      :readOnly="false"
      :showPageHeader="true"
      :showPageTitle="true"
      :showPageTool="true"
      pageTitle="示例表格标题"
      :pageTools="[{ name: 'pageTool1', title: 'page按钮1', color: '#f55858' }]"
      :split="0.3"
      :tableLoading="false"
      :isTableSelect="true"
      :tableMultiple="false"
      :showTableTitle="true"
      :showTableSearch="true"
      :showTableTool="true"
      :showTablePager="true"
      tableTitle="表格上方标题"
      :tableTools="[{ name: 'tableTool1', title: 'table按钮1', color: '#f55858' }]"
      :columns="[
        {
          title: '序号',
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '标识',
          minWidth: 60,
          key: 'code',
          tooltip: true
        },
        {
          title: '操作',
          slot: 'action',
          minWidth: 150,
          align: 'center'
        }
      ]"
      :tableData="[{ code: 'a34234' }]"
      :tableTotal="299"
      :tablePagerNum="1"
      :treeIsCustomRender="false"
      :showTreeSearch="true"
      :showTreeTool="true"
      :treeTools="[{ name: 'treeTool1', title: 'tree按钮1', color: '#f55858' }]"
      :treeToolStyle="1"
      :treeData="[{ title: 'aaa', children: [{ title: 'aaa' }] }]"
    ></DaTreeTable>
  </div>
</template>

<script>
export default {
  name: 'ViewDoc',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.ViewDoc {
  height: 100%;
  width: 100%;
}
</style>
