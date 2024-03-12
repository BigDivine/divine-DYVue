<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.18
* Filename      : index.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Index" ref="VxeTableContain">
    <div class="VxeTableHeaderContain" ref="VxeTableHeaderContain">
      <vxe-toolbar>
        <template #buttons>
          <div class="vxeToolItem">查询</div>
          <div class="vxeToolItem">导出</div>
          <div class="vxeToolItem">穿透明细</div>
        </template>
      </vxe-toolbar>
      <div class="VxeTableHeader">
        <div class="title">余额表</div>
        <div class="info">
          <div class="unit">单位：</div>
          <div class="year">会计期间：</div>
          <div class="currency">币种：</div>
        </div>
      </div>
    </div>

    <vxe-table border resizable stripe :loading="loading" :height="tableHeight" :data="tableData">
      <vxe-column :width="150" field="year" title="年" fixed="left"></vxe-column>
      <vxe-column :width="150" field="code" title="科目代码" fixed="left"></vxe-column>
      <vxe-column :width="150" field="name" title="科目名称" fixed="left"></vxe-column>
      <vxe-column :width="150" field="code1" title="科目代码1" fixed="left"></vxe-column>
      <vxe-column :width="150" field="name1" title="科目名称1" fixed="left"></vxe-column>
      <vxe-column :width="150" field="unit" title="组织机构" fixed="left"></vxe-column>
      <vxe-colgroup title="年初余额">
        <vxe-column :width="150" field="debitNC" title="借方"></vxe-column>
        <vxe-column :width="150" field="creditNC" title="贷方"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="期初余额">
        <vxe-column :width="150" field="debitQC" title="借方"></vxe-column>
        <vxe-column :width="150" field="creditQC" title="贷方"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="本期余额">
        <vxe-column :width="150" field="debitBQ" title="借方"></vxe-column>
        <vxe-column :width="150" field="creditBQ" title="贷方"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="本年累计">
        <vxe-column :width="150" field="debitLJ" title="借方"></vxe-column>
        <vxe-column :width="150" field="creditLJ" title="贷方"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="期末余额">
        <vxe-column :width="150" field="debitYE" title="借方"></vxe-column>
        <vxe-column :width="150" field="creditYE" title="贷方"></vxe-column>
      </vxe-colgroup>
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" />
          <p>没有更多数据了！</p>
        </span>
      </template>
      <template #loading>
        <img
          src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"
          style="width: 100px;"
        />
      </template>
    </vxe-table>
    <vxe-pager
      ref="VxeTablePager"
      border
      size="medium"
      :loading="loading"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'Sizes', 'Total']"
      @page-change="handlePageChange"
    >
    </vxe-pager>
    <QueryModal :show="false"></QueryModal>
  </div>
</template>

<script>
  import QueryModal from './queryModal';
  export default {
    name: 'Index',
    components: { QueryModal },
    data () {
      return {
        tableHeight: 0,
        loading: true,
        pageNum: 1,
        pageSize: 20,
        total: 166,
        columns: [
          { name: 'year', title: '年', fixed: 'left' },
          { name: 'code', title: '科目代码', fixed: 'left' },
          { name: 'name', title: '科目名称', fixed: 'left' },
          { name: 'unit', title: '组织机构', fixed: 'left' },
          { name: 'startBalance', title: '年初余额' }
          // { name: 'unit', title: '组织机构', fixed: 'left' },
          // { name: 'unit', title: '组织机构', fixed: 'left' },
          // { name: 'unit', title: '组织机构', fixed: 'left' },
          // { name: 'unit', title: '组织机构', fixed: 'left' },
          // { name: 'unit', title: '组织机构', fixed: 'left' },
          // { name: 'unit', title: '组织机构', fixed: 'left' },
        ],
        tableData: [
          // { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        ]
      };
    },
    created () {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      this.$nextTick(() => {
        let toolbarHeight = this.$refs.VxeTableHeaderContain.offsetHeight;
        let tableContainHeight = this.$refs.VxeTableContain.offsetHeight;
        let tablePagerHeight = this.$refs.VxeTablePager.$el.offsetHeight;
        this.tableHeight = tableContainHeight - toolbarHeight - tablePagerHeight;
        console.log(tableContainHeight, toolbarHeight, tablePagerHeight);
      });
    },
    mounted () {},
    methods: {
      handlePageChange ({ currentPage, pageSize }) {
        console.log('handlePageChange', currentPage, pageSize);
        this.pageNum = currentPage;
        this.pageSize = pageSize;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .Index {
    height: 100%;
    width: 100%;
    .VxeTableHeaderContain {
      .vxeToolItem {
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        border: 1px solid $dy-primary-color;
        color: $dy-primary-color;
        border-radius: 5px;
        margin-left: 10px;
        padding: 0 10px;
      }
      .VxeTableHeader {
        padding: 10px;
        .title {
          width: 100%;
          text-align: center;
        }
        .info {
          display: flex;
          .unit {
            flex: 1;
          }
          .year {
            flex: 1;
          }
          .currency {
            flex: 1;
          }
        }
      }
    }

    .vxeToolItem:hover {
      border: 0;
      color: #fff;
      background: $dy-primary-color;
      border: 1px solid $dy-primary-color;
    }
  }
</style>
