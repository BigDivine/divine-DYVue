<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2025.01.21
* Filename      : meta-data-search.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="Demo">
    <Modal
      v-model="show"
      transfer
      title="同步记录"
      width="80"
      class="ModalSyncRecord">
      <DaTreeTable
        :mode="1"
        :showPageHeader="false"
        :showTree="false"
        :showTableTitle="false"
        :showTableTool="true"
        :showTableSearch="true"
        :isTableSelect="false"
        :columns="tableColumn"
        :tableRowTools="tableRowTools"
        :tableData="tableData">
      </DaTreeTable>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      show: true,
      formInline: {
        inboundRuleType: '',
        isDelExData: false,
        autoPublish: false,
        describe: ''
      },
      rules: [],
      readonly: false,
      inboundRuleList: [
        {
          name: 'half',
          title: '条件同步'
        }
      ],
      searchValue: '',
      showMetaDataTable: false,
      pageTools: [
        {
          name: 'addDataSource',
          title: '新增同步任务',
          color: '#7f6af3'
        }
      ],
      tableColumn: [
        {
          title: '序号',
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '任务时间',
          key: 'ds_name',
          tooltip: true
        },

        {
          title: '数据源库',
          key: 'ds_type',
          tooltip: true
        },
        {
          title: '数据源表',
          key: 'ds_desc',
          tooltip: true
        },
        {
          title: '推送方式',
          key: 'ds_connect_info',
          tooltip: true
        },
        {
          title: '成功数/总数',
          key: 'ds_status',
          tooltip: true
        },
        {
          title: '调度周期',
          key: 'ds_creater',
          tooltip: true
        },
        {
          title: '同步状态',
          key: 'ds_creater',
          tooltip: true
        },
        {
          title: '操作',
          slot: 'action',
          minWidth: 150,
          align: 'center'
        }
      ],
      tableData: [
        {
          ds_name: '数据源示例',
          ds_type: '半结构化',
          ds_desc: '数据源数据示例：半结构化数据源',
          ds_connect_info: 'url:http://127.0.0.1:8080,用户名：admin',
          ds_status: '正常',
          ds_creater: true
        },
        {
          ds_name: '数据源示例2',
          ds_type: '半结构化',
          ds_desc: '数据源数据示例：半结构化数据源2',
          ds_connect_info: 'url:http://127.0.0.1:8080,用户名：admin',
          ds_status: '正常',
          ds_creater: false
        }
      ],
      tableRowTools: [
        {
          name: 'ds_del',
          title: '详情',
          color: 'var(--primary-color)'
        }
      ],
      treeData: [
        {
          title: '全部',
          expand: true,
          children: [
            { name: 'GXX', title: '关系型' },
            { name: 'BJGH', title: '半结构化' },
            { name: 'DSJCC', title: '大数据存储' },
            { name: 'FXX', title: '分析性' },
            { name: 'MPP', title: 'MPP' },
            { name: 'NS', title: 'NoSQL' },
            { name: 'SS', title: '实时' },
            { name: 'JK', title: '接口' }
          ]
        }
      ],
      showDataSourceInfoModal: false,
      addSourceSteps: [
        {
          icon: '',
          title: '选择数据源',
          content: ''
        },
        {
          icon: '',
          title: '配置信息',
          content: ''
        },
        {
          icon: '',
          title: '保存数据源',
          content: ''
        }
      ],
      currentAddSourceStep: 1,
      showTestConnectLoading: false,
      testConnectSuccess: false, // 测试连接成功
      showSaveDataSourceLoading: false,
      // 第一步
      dataSourceTypeList: [{ title: 'MySql', icon: '', name: 'msyql', type: 'GXX' }],
      //第二步
      dataSourceInfo: {
        ds_type: 'hive 3.x(CDP)',
        ds_title: '',
        ds_desc: '',
        ds_url: '',
        ds_user: '',
        ds_pwd: '',
        ds_is_approval: false
      },
      dataSourceInfoRule: {
        ds_type: [{ required: true, message: '请选择 数据源类型', trigger: 'blur' }],
        ds_title: [{ required: true, message: '请选择数据源类型', trigger: 'blur' }],
        ds_url: [{ required: true, message: '请选择数据源类型', trigger: 'blur' }]
      }
      // DataSourceInfoModalLoading: true,
    };
  },
  created() {},
  mounted() {},
  methods: {
    pageToolClick(item, index) {
      console.log('pageToolClick', item, index);
      if (item.name === 'addDataSource') {
        this.showDataSourceInfoModal = true;
      }
    },
    selectDSType(item) {
      this.dataSourceInfo.ds_type = item.title;
    },
    testConnect() {
      console.log('testConnect');
      this.testConnectSuccess = true;
    },
    lastStep() {
      console.log('lastStep');
      this.currentAddSourceStep--;
    },
    saveDataSource() {
      console.log('saveDataSource');
    },
    nextStep() {
      console.log('nextStep');
      this.currentAddSourceStep++;
    },
    tableRowToolClick(item, toolI, row, index) {
      console.log('tableRowToolClick', item, toolI, row, index);
    },
    searchMetaData() {
      console.log('searchMetaData');
      if (this.searchValue) {
        this.showMetaDataTable = true;
      } else {
        this.showMetaDataTable = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.Demo {
  height: 100%;
  width: 100%;
  .modalFooter {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    .cancelBtn {
      height: 32px;
      line-height: 32px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 0 15px;
      color: #cccccc;
    }
    .submitBtn {
      height: 32px;
      line-height: 32px;
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 0 15px;
      color: #ffffff;
      background: #cccccc;
    }
  }
}
</style>
