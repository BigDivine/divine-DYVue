<!--********************************************************************
* Author        : yangzelong
* Email         :
* Create Date   :
* Filename      : 首页，右侧内容展示，包括单据设计器和单据定义列表
* Description   :
* Arguments     :
********************************************************************-->
<template>
  <div class="YSearchTable" ref="right">
    <div v-if="mode !== 1 && showTitle && title" class="YSearchTableHeader">
      <div class="YSearchTableHeaderBlock"></div>
      <div class="YSearchTableHeaderTitle">{{ title }}</div>
    </div>
    <div v-if="showTool" class="YSearchTableTool">
      <div v-if="mode !== 1 && !readOnly && showTool" class="YSearchTableToolContain">
        <div class="YSearchTableToolItem" v-for="(item, index) in tools" :key="index">
          <Button size="small" type="primary" @click="toolClick(item, index)">
            {{ item.title }}
          </Button>
        </div>
      </div>
      <Input
        v-if="showSearch"
        size="small"
        suffix="ios-search"
        placeholder="输入关键字查询（按名称）"
        class="YSearchTableSearch"
        v-model="searchKey"
      />
    </div>

    <div ref="DaTreeTableTableDom" class="YSearchTableTable">
      <Table
        border
        size="small"
        :loading="loading"
        :height="tableHeight"
        :row-class-name="rowClassName"
        :columns="getTableColumns()"
        :data="data || []"
        @on-select="onSelect"
        @on-select-all="onSelectAll"
        @on-selection-change="onSelectionChange"
        @on-select-cancel="onSelectCancel"
        @on-select-all-cancel="onSelectAllCancel"
      >
        <template slot-scope="{ row, index }" slot="checkbox">
          <Checkbox
            :value="row.selected"
            :disabled="row._disabled"
            @on-change="onSelectChange(arguments, row, index)"
          ></Checkbox>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <div class="tableRowAction">
            <YToolItem
              v-for="(item, toolI) in rowTools"
              :key="toolI"
              :color="
                row.hasOwnProperty('enableActions')
                  ? row.enableActions.indexOf(item.name) === -1
                    ? '#cccccc'
                    : item.color
                  : item.color
              "
              :title="item.title"
              :divider="toolI !== rowTools.length - 1"
              @on-click="rowToolClick(item, toolI, row, index)"
            >
            </YToolItem>
          </div>
        </template>
      </Table>
    </div>
    <div v-if="showPager" class="YSearchTablePage">
      <Page
        class="pageStyle"
        show-total
        show-sizer
        show-elevator
        :current="pageNum"
        :total="total"
        :page-size="pageSize"
        :page-size-opts="[20, 50, 100]"
        @on-change="pageNumChange"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<script>
import YToolItem from './y-tool-item';

export default {
  name: 'YSearchTable',
  components: { YToolItem },
  props: {
    readOnly: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    // 固定样式：0-自定义样式。1-外部工具栏样式。2-内部工具栏样式
    mode: { type: Number, default: 0 },
    showTitle: { type: Boolean, default: false },
    title: { type: String, default: '' },
    showSearch: { type: Boolean, default: false },
    showTool: { type: Boolean, default: false },
    showPager: { type: Boolean, default: true },
    tools: { type: Array, default: () => [] },
    rowTools: { type: Array, default: () => [] },
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    pageNum: { type: Number, default: 1 },
    pageSize: { type: Number, default: 20 },
    multiple: { type: Boolean, default: false },
    isSelect: { type: Boolean, default: false }
  },
  data() {
    return {
      searchKey: '',
      tableHeight: 0
    };
  },
  watch: {
    searchKey(val) {
      this.$emit('search', val);
    },
    data(val) {
      this.resetTableHeight();
    }
  },
  mounted() {
    window.addEventListener('resize', this.resetTableHeight);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resetTableHeight);
  },
  methods: {
    getTableColumns() {
      if (this.isSelect) {
        return [
          this.multiple
            ? { type: 'selection', width: 60, align: 'center' }
            : { width: 60, align: 'center', slot: 'checkbox' },
          ...this.columns
        ];
      } else {
        return [...this.columns];
      }
    },
    resetTableHeight() {
      this.$nextTick(() => {
        let tableDom = this.$refs.DaTreeTableTableDom;
        if (tableDom) {
          this.tableHeight = tableDom.offsetHeight;
        }
      });
    },
    toolClick(item, index) {
      this.$emit('tool-click', item, index);
    },
    rowToolClick(item, toolI, row, index) {
      if (row.hasOwnProperty('enableActions') && row.enableActions.indexOf(item.name) === -1) {
        return;
      }
      this.$emit('row-tool-click', item, toolI, row, index);
    },
    onSelectChange(args, currentRow, rowIndex) {
      let checked = args[0];
      this.$emit('on-select-change', checked, currentRow, rowIndex);
    },
    //  当前已选中数据，选中的数据
    onSelect(selection, row) {
      this.$emit('on-select', selection, row);
    },
    //  当前已选中数据，选中的数据
    onSelectCancel(selection, row) {
      //   console.log('onSelectCancel', selection, row)
      this.$emit('on-select-cancel', selection, row);
    },
    //  当前已选中数据
    onSelectAll(selection) {
      this.$emit('on-select-all', selection);
    },
    //  当前已选中数据
    onSelectAllCancel(selection) {
      //   console.log('onSelectAllCancel', selection)
      this.$emit('on-select-all-cancel', selection);
    },
    //  当前已选中数据
    onSelectionChange(selection) {
      this.$emit('on-selection-change', selection);
    },
    pageSizeChange(pageSize) {
      this.$emit('page-size-change', pageSize);
    },
    pageNumChange(pageNum) {
      this.$emit('page-num-change', pageNum);
    },
    rowClassName(row, index) {
      return 'tableRowClass';
    }
  }
};
</script>

<style lang="less" scope>
.YSearchTable {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .YSearchTableHeader {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-bottom: 1px solid #eaeaea;
    .YSearchTableHeaderTitle {
      font-size: 16px;
      color: #080808;
    }
    .YSearchTableHeaderBlock {
      height: 15px;
      width: 3px;
      background: var(--primary-color);
      margin-right: 8px;
    }
  }
  .YSearchTableTool {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 4px 10px 10px;
    .YSearchTableToolContain {
      flex: 1;
      .YSearchTableToolItem {
        padding: 3px 5px;
        display: inline-block;
      }
    }
    .YSearchTableSearch {
      width: 200px;
    }
  }
  .YSearchTableTable {
    flex: 1;
    margin: 0 4px 0 10px;
    overflow: hidden;
    .tableRowClass {
      td {
        height: 30px;
      }
      .ivu-table-cell-tooltip-content {
        color: #080808;
        font-size: 14px;
      }
      .ivu-table-cell {
        margin: 0;
        padding: 0 10px;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .tableRowAction {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    //表头样式
    .ivu-table-header {
      height: 30px;
      th {
        height: 30px;
        padding: 0 10px;
        color: #080808;
        .ivu-table-cell {
          padding: 0;
          font-size: 14px;
          background: #f2f2f2;
        }
      }
    }
    .ivu-table-wrapper {
      height: 100%;
    }
  }
  .YSearchTablePage {
    text-align: right;
    .pageStyle {
      align-self: end;
      margin: 10px 4px 10px 10px;
    }
  }
}
</style>
