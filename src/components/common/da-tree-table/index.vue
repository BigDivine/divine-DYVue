<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.07.20
* Filename      :
* Description   : 通用组件基于iView的树形+表格组件，可以定制树形的工具栏，表格的工具栏，表格部分支持显示一个标题
* Arguments     :
        // 树形搜索方法：searchKey-输入框内容
        @tree-search="treeSearch(searchKey)"
        // 树形的工具栏按钮点击事件：item-按钮的配置内容；index-按钮下标
        @tree-tool-click="treeToolClick(item, index)"
        // 树形选中事件：selectNodes-已选择的节点[]，curNode-当前节点{}
        @tree-select="treeSelect(selectNodes, curNode)"
        // 树形编辑按钮点击事件：curNode-需要编辑的节点{}
        @tree-node-edit="treeNodeEdit (curNode)"
        // 树形删除按钮点击事件：curNode-需要编辑的节点{}
        @tree-node-del="treeNodeDel(curNode) "
        // 表格的搜索事件：searchKey-输入框内容
        @table-search="tableSearch(searchKey)"
        // 表格的工具栏按钮点击事件：item-按钮的配置内容；index-按钮下标
        @table-tool-click="tableToolClick(item, index)"
        // 表格行操作按钮点击事件：item-按钮的配置内容；toolI-按钮下标；row-行数据；index-行下标
        @table-row-tool-click="tableRowToolClick(item, toolI, row, index)"
        // 表格的每页展示的数量修改：pageSize-修改后每页显示的数量
        @table-page-size-change="tablePageSizeChange(pageSize)"
        // 表格页码变更：pageNum-变更后的页码
        @table-page-num-change="tablePageNumChange(pageNum)"
        // 弹窗的确定事件：data-修改后的事件
        @modal-ok="modalOk(data)"
        // 弹窗的取消事件
        @modal-cancel="modalCancel()"
        // 弹窗关闭按钮事件，当modalCustomClose为true时触发
        @modal-close="modalClose()"
********************************************************************-->
<template>
  <div class="DaTreeTable">
    <div v-if="mode !== 2 && showPageHeader" class="pageHeader">
      <div v-if="mode !== 2 && showPageTitle" class="pageHeaderTitleContain">
        <div class="pageHeaderTitle">{{ pageTitle }}</div>
      </div>
      <div v-if="mode !== 2 && showPageTool && !readOnly && !isCustomTool" class="pageHeaderTools">
        <YToolItem
          v-for="(item, index) in pageTools"
          :key="index"
          :color="item.color"
          :title="item.title"
          :divider="index !== pageTools.length - 1"
          @on-click="pageToolClick(item, index)"
        >
        </YToolItem>
      </div>
      <slot v-if="mode !== 2 && showPageTool && !readOnly && isCustomTool" name="tool"></slot>
    </div>
    <Split
      v-if="showTree"
      v-model="split"
      class="splitStyle"
      :style="{ height: !(mode !== 2 && showPageHeader) ? '100%' : '' }"
    >
      <div slot="left" class="splitLeft">
        <YSearchTree
          :mode="mode"
          :showSearch="showTreeSearch"
          :showTool="showTreeTool"
          :tools="treeTools"
          :toolStyle="treeToolStyle"
          :data="treeData"
          :loadData="treeLoadData"
          :readOnly="readOnly"
          :isCustomRender="treeIsCustomRender"
          :treeRender="treeRenderContent"
          :pageNum="tablePagerNum"
          @tool-click="treeToolClick"
          @search="treeSearch"
          @tree-select="treeSelect"
          @node-edit="treeNodeEdit"
          @node-delete="treeNodeDel"
        ></YSearchTree>
      </div>
      <div slot="right" class="splitRight">
        <YSearchTable
          :mode="mode"
          :readOnly="readOnly"
          :loading="tableLoading"
          :isSelect="isTableSelect"
          :multiple="tableMultiple"
          :showTitle="showTableTitle"
          :showSearch="showTableSearch"
          :showTool="showTableTool"
          :showPager="showTablePager"
          :title="tableTitle"
          :tools="tableTools"
          :rowTools="tableRowTools"
          :data="tableData"
          :columns="columns"
          :total="tableTotal"
          :pageNum="tablePagerNum"
          @on-select-change="tableSelectChange"
          @on-select="tableSelect"
          @on-select-cancel="tableSelectCancel"
          @on-select-all="tableSelectAll"
          @on-select-all-cancel="tableSelectAllCancel"
          @on-selection-change="tableSelectionChange"
          @tool-click="tableToolClick"
          @row-tool-click="tableRowToolClick"
          @search="tableSearch"
          @page-size-change="pageSizeChange"
          @page-num-change="pageNumChange"
        ></YSearchTable>
      </div>
    </Split>
    <div
      v-else
      class="splitStyle"
      :style="{ height: !(mode !== 2 && showPageHeader) ? '100%' : '' }"
    >
      <div class="splitRight">
        <YSearchTable
          :mode="mode"
          :readOnly="readOnly"
          :loading="tableLoading"
          :isSelect="isTableSelect"
          :multiple="tableMultiple"
          :showTitle="showTableTitle"
          :showSearch="showTableSearch"
          :showTool="showTableTool"
          :showPager="showTablePager"
          :title="tableTitle"
          :tools="tableTools"
          :rowTools="tableRowTools"
          :data="tableData"
          :columns="columns"
          :total="tableTotal"
          :pageNum="tablePagerNum"
          @on-select-change="tableSelectChange"
          @on-select="tableSelect"
          @on-select-cancel="tableSelectCancel"
          @on-select-all="tableSelectAll"
          @on-select-all-cancel="tableSelectAllCancel"
          @on-selection-change="tableSelectionChange"
          @tool-click="tableToolClick"
          @row-tool-click="tableRowToolClick"
          @search="tableSearch"
          @page-size-change="pageSizeChange"
          @page-num-change="pageNumChange"
        ></YSearchTable>
      </div>
    </div>
    <YModal
      ref="homeModal"
      :show="showModal"
      :data="modalData"
      :title="modalTitle"
      :fullScreen="modalFullScreen"
      :withFooter="modalWithFooter"
      :modalType="modalType"
      :customClose="modalCustomClose"
      @modal-ok="modalOk"
      @modal-cancel="modalCancel"
      @modal-close="modalClose"
    >
    </YModal>
  </div>
</template>

<script>
  import YSearchTree from './common/y-search-tree.vue';
  import YSearchTable from './common/y-search-table.vue';
  import YModal from './common/y-modal.vue';
  import YToolItem from './common/y-tool-item.vue';
  export default {
    name: 'DaTreeTable',
    components: { YSearchTree, YSearchTable, YModal, YToolItem },
    props: {
      // 固定样式：0-自定义样式。1-外部工具栏样式。2-内部工具栏样式
      mode: { type: Number, default: 0 },
      // 自定义工具栏
      isCustomTool: { type: Boolean, default: false },
      // 是否显示树形
      showTree: { type: Boolean, default: true },
      //  页面配置项------------------------mode=1---配置-----------------------
      // 是否为只读
      readOnly: { type: Boolean, default: false },
      // 是否显示最外部的头部--Boolean
      showPageHeader: { type: Boolean, default: true },
      // 是否显示最外部的名称--Boolean
      showPageTitle: { type: Boolean, default: true },
      // 是否显示最外部的工具栏--Boolean
      showPageTool: { type: Boolean, default: true },
      // 最外部的名称--String
      pageTitle: { type: String, default: '' },
      // 最外部的工具栏--Array
      pageTools: { type: Array, default: () => [] },
      // 默认的主要内容的分栏比例--Number
      split: { type: Number, default: 0.2 },
      // ---------------------------------分割线------------------------------
      //  表格的配置项
      // 表格是否显示loading
      tableLoading: { type: Boolean, default: false },
      // 表格是否支持选择
      isTableSelect: { type: Boolean, default: true },
      // 表格是否支持多选
      tableMultiple: { type: Boolean, default: false },
      // 是否显示表格上方的标题--Boolean
      showTableTitle: { type: Boolean, default: true },
      // 是否显示表格上方的搜索框--Boolean
      showTableSearch: { type: Boolean, default: true },
      // 是否显示表格上方的工具栏--Boolean
      showTableTool: { type: Boolean, default: true },
      // 是否显示表格底部分页器--Boolean
      showTablePager: { type: Boolean, default: true },
      // 表格上方标题名称--String
      tableTitle: { type: String, default: '' },
      // 表格上方的工具栏按钮--Array
      tableTools: { type: Array, default: () => [] },
      // 表格行操作按钮，columns中配置的action列会显示--Array
      tableRowTools: { type: Array, default: () => [] },
      // 表格列配置--Array
      columns: { type: Array, default: () => [] },
      // 表格数据
      tableData: { type: Array, default: () => [] },
      // 表格行总数--Number
      tableTotal: { type: Number, default: 0 },
      // 当前页码
      tablePagerNum: { type: Number, default: 1 },
      //  树形的配置项-------------------------------------------
      // 是否自定义树形的结构--Boolean
      treeIsCustomRender: { type: Boolean, default: false },
      // 是否显示树形上方的搜索框--Boolean
      showTreeSearch: { type: Boolean, default: true },
      // 是否显示树形上方的按钮栏--Boolean
      showTreeTool: { type: Boolean, default: true },
      // 树形上方的按钮栏显示的按钮--Array
      treeTools: { type: Array, default: () => [] },
      // 属性上方的按钮栏显示样式--Number  1-小按钮 2-大按钮
      treeToolStyle: { type: Number, default: 2 },
      // 自定义的树形结构，当treeIsCustomRender为true时生效--Function
      treeRenderContent: { type: Function, default: (h, { root, node, data }) => h() },
      // 是否支持异步加载树形数据
      // treeLoadData: { type: Function, default: (item, callback) => f() },
      // 树形数据
      treeData: { type: Array, default: () => [] },
      //  弹窗配置项
      // 弹窗组件的名称用于components标签--String
      modalType: { type: String, default: '' },
      // 弹窗组件标题名称--Boolean
      modalTitle: { type: String, default: '' },
      // 弹窗是否全屏--Boolean
      modalFullScreen: { type: Boolean, default: false },
      // 弹窗是否显示底部按钮--Boolean
      modalWithFooter: { type: Boolean, default: true },
      // 是否自定义关闭按钮动作事件--Boolean
      modalCustomClose: { type: Boolean, default: false },
      // 是否显示弹窗
      showModal: { type: Boolean, default: false },
      // 弹窗组件内的数据
      modalData: [Array, Object, String]
    },
    data() {
      return { curSelectNode: null, curSelectNodes: [] };
    },
    created() {},
    mounted() {},
    methods: {
      treeSearch(searchKey) {
        this.$emit('tree-search', searchKey);
      },
      treeToolClick(item, index) {
        this.$emit('tree-tool-click', item, index);
      },
      treeSelect(selectNodes, curNode) {
        this.$emit('tree-select', selectNodes, curNode);
      },
      treeNodeEdit(curNode) {
        this.$emit('tree-node-edit', curNode);
      },
      treeNodeDel(curNode) {
        this.$emit('tree-node-del', curNode);
      },
      tableSearch(searchKey) {
        this.$emit('table-search', searchKey);
      },
      // 单选方法
      //  当前行的数据和上一次选择的数据
      tableSelectChange(checked, currentRow, rowIndex) {
        this.$emit('table-select-change', checked, currentRow, rowIndex);
      },

      // 多选的方法
      //  当前已选中数据，选中的数据
      tableSelect(selection, row) {
        this.$emit('table-select', selection, row);
      },
      //  当前已选中数据，选中的数据
      tableSelectCancel(selection, row) {
        //   console.log('tableSelectCancel', selection, row)
        this.$emit('table-select-cancel', selection, row);
      },
      //  当前已选中数据
      tableSelectAll(selection) {
        this.$emit('table-select-all', selection);
      },
      //  当前已选中数据
      tableSelectAllCancel(selection) {
        //   console.log('tableSelectAllCancel', selection)
        this.$emit('table-select-all-cancel', selection);
      },
      //  当前已选中数据
      tableSelectionChange(selection) {
        this.$emit('table-selection-change', selection);
      },
      pageToolClick(item, index) {
        this.$emit('page-tool-click', item, index);
      },
      tableToolClick(item, index) {
        this.$emit('table-tool-click', item, index);
      },
      tableRowToolClick(item, toolI, row, index) {
        this.$emit('table-row-tool-click', item, toolI, row, index);
      },
      pageSizeChange(pageSize) {
        this.$emit('table-page-size-change', pageSize);
      },
      pageNumChange(pageNum) {
        this.$emit('table-page-num-change', pageNum);
      },
      modalOk(data) {
        this.$emit('modal-ok', data);
      },
      modalCancel() {
        this.$emit('modal-cancel');
      },
      modalClose() {
        this.$emit('modal-close');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .DaTreeTable {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .pageHeader {
      height: 80px;
      width: 100%;
      .pageHeaderTitleContain {
        height: 40px;
        width: 100%;
        border-bottom: 1px solid #eaeaea;
        line-height: 40px;
        padding: 0 27px;
        font-size: 14px;
        .pageHeaderTitle {
          height: 40px;
          display: inline-block;
          white-space: nowrap;
          border-bottom: 3px solid var(--primary-color);
          color: var(--primary-color);
        }
      }
      .pageHeaderTools {
        height: 40px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        align-items: center;
        padding: 0 20px;
      }
    }
    .splitStyle {
      border: 1px solid #eaeaea;
      height: calc(100% - 60px);

      .splitLeft {
        background: #ffffff;
        height: 100%;
        padding: 20px;
      }

      .splitRight {
        background: transparent;
        height: 100%;
        padding: 0 !important;
      }
    }
  }
</style>
