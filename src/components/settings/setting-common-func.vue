<template>
  <div class="settingCommonFunc">
    <div class="tableClass">
      <DaTreeTable
        :mode="2"
        :showTree="false"
        :isTableSelect="false"
        tableTitle="设置首页常用功能（图片，路由，名称，id）"
        :tableRowTool="[
          { name: 'readRow', title: '查看' },
          { name: 'upRow', title: '编辑' },
          { name: 'delRow', title: '删除' },
        ]"
        :tableTools="[{ name: 'addRow', title: '新增' }]"
        :columns="functionsColumns"
        :data="functionsData"
        @table-search="tableSearch"
        @table-tool-click="tableToolClick"
        @table-row-tool-click="tableRowToolClick"
        @table-page-size-change="tablePageSizeChange"
        @table-page-num-change="tablePageNumChange"
      ></DaTreeTable>
    </div>

    <Modal v-model="showModel" class="modalStyle">
      <div slot="header">新增功能</div>
      <div class="modalContain">
        <div class="modalCell">
          <div class="modalCellLabel">功能标识：</div>
          <div class="modalCellInput" v-if="showModelRead">
            {{ functionObjName }}
          </div>
          <input
            v-else
            class="modalCellInput"
            type="text"
            placeholder="请输入功能标识"
            v-model="functionObjName"
          />
        </div>
        <div class="modalCell">
          <div class="modalCellLabel">功能名称：</div>
          <div class="modalCellInput" v-if="showModelRead">
            {{ functionObjName }}
          </div>
          <input
            v-else
            class="modalCellInput"
            type="text"
            placeholder="请输入功能名称"
            v-model="functionObjTitle"
          />
        </div>
        <div class="modalCell">
          <div class="modalCellLabel">上传功能图标：</div>
          <div class="modalCellFile">
            <img
              class="modalAddImg"
              :src="functionObjImg || require('@/assets/icons/ic_add_img.png')"
            />
            <input
              v-if="!showModelRead"
              class="modalAddImg"
              type="file"
              accept="image/*"
              @change="getFile($event)"
            />
          </div>
        </div>
        <div class="modalCell">
          <div class="modalCellLabel">是否显示：</div>
          <div class="modalCellInput" v-if="showModelRead">
            {{ functionObjIsShow === 1 ? '是' : '否' }}
          </div>
          <dy-switch
            v-else
            class="modalCellInput"
            :value="functionObjIsShow === 1"
            @change="switchChanged"
          />
        </div>
      </div>
      <div slot="footer" class="modalFooter">
        <div class="cancelBtn" @click="modalCancel">取消</div>
        <div class="submitBtn" @click="modalOk">确定</div>
      </div>
    </Modal>
  </div>
</template>

<script>
  import DySwitch from '../dy-switch.vue';

  import { randomID } from '@/utils/system';

  export default {
    name: 'setting-common-func',
    data() {
      return {
        functionsColumns: [
          { title: '序号', type: 'index', width: 60, align: 'center' },
          { title: '功能名称', minWidth: 60, key: 'title', tooltip: true },
          { title: '缩略图', minWidth: 60, key: 'thumb', tooltip: true },
          { title: '是否显示', minWidth: 60, key: 'isShow', tooltip: true },
          { title: '操作', slot: 'action', minWidth: 150, align: 'center' },
        ],
        queryParams: {
          searchKey: '',
          paging: true,
          pageNum: 1,
          pageSize: 10,
        },
        functionsData: [],
        functionsTotal: 0,

        showModel: false,
        functionAdd: false,
        showModelRead: false,
        uploadImgId: '',

        functionObjId: '',
        functionObjName: '',
        functionObjTitle: '',
        functionObjImg: '',
        functionObjIsShow: 0,
      };
    },
    created() {
      this.getFunctionData();
    },
    methods: {
      tableSearch(searchKey) {
        this.searchKey = searchKey;
        this.getFunctionData();
      },
      tableToolClick(item, index) {
        if (item.name === 'addRow') {
        }
      },
      tableRowToolClick(item, toolI, row, index) {
        if (item.name === 'readRow') {
        } else if (item.name === 'upRow') {
        } else if (item.name === 'delRow') {
        }
      },
      tablePageSizeChange(pageSize) {
        this.getFunctionData();
      },
      tablePageNumChange(pageNum) {
        this.getFunctionData();
      },
      previewRow(row) {
        let rowObj = JSON.parse(JSON.stringify(row));
        this.functionObjId = rowObj.functionId;
        this.functionObjName = rowObj.functionName;
        this.functionObjTitle = rowObj.functionTitle;
        this.functionObjImg = rowObj.functionImg;
        this.functionObjIsShow = rowObj.functionShow;
        this.showModelRead = true;
        this.showModel = true;
      },
      updateRow(row) {
        let rowObj = JSON.parse(JSON.stringify(row));
        this.functionObjId = rowObj.functionId;
        this.functionObjName = rowObj.functionName;
        this.functionObjTitle = rowObj.functionTitle;
        this.functionObjImg = rowObj.functionImg;
        this.functionObjIsShow = rowObj.functionShow;
        this.showModelRead = false;
        this.showModel = true;
        console.log('updateRow', row);
      },
      async deleteRow(row) {
        let params = {
          functionId: this.functionObjId,
          functionName: this.functionObjName,
          functionTitle: this.functionObjTitle,
          functionImg: this.functionObjImg,
          functionShow: this.functionObjIsShow,
        };
        await this.$http('post', '/shop/home/function/delete', params).then(
          (res) => {
            this.getFunctionData();
          },
          (e) => {
            console.log(e);
          }
        );
      },
      showModalMethod() {
        this.functionAdd = true;
        this.showModel = true;

        this.functionObjId = randomID();
        this.functionObjName = '';
        this.functionObjTitle = '';
        this.functionObjImg = '';
        this.functionObjIsShow = 1;
      },
      async getFile(e) {
        let _this = this;
        let files = e.target.files;
        let file = files[0];
        // name: "vivo图标.png";
        // size: 43431;
        // type: "image/png";
        // let fileName = file.name;
        // let fileSize = file.size;
        let fileType = file.type;
        if (fileType.indexOf('image') === -1) {
          console.log('只允许选择图片文件！');
          return;
        }

        let params = new FormData(); // 创建form对象
        params.append('file', file); // 通过append向form对象添加数据
        await this.$http('post', '/upload/img', params, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
          .then(function(response) {
            console.log(response);
            const { data } = response;
            if (data.code === 0) {
              const fileData = data.data;
              _this.uploadImgId = fileData.fileId;
              _this.functionObjImg = fileData.fileUrl;
            } else {
              console.log(data.code + ':' + data.msg);
            }
            e.target.value = '';
          })
          .catch(function(error) {
            console.log(error);
            e.target.value = '';
          });
      },
      async modalOk() {
        let params = {
          functionId: this.functionObjId,
          functionName: this.functionObjName,
          functionTitle: this.functionObjTitle,
          functionImg: this.functionObjImg,
          functionShow: this.functionObjIsShow,
        };
        if (this.functionAdd) {
          await this.$http('post', '/shop/home/function/insert', params).then(
            (res) => {
              this.showModel = false;
              this.functionAdd = false;
              this.getFunctionData();
            },
            (e) => {
              console.log(e);
            }
          );
        } else if (!this.showModelRead) {
          await this.$http('post', '/shop/home/function/update', params).then(
            (res) => {
              this.getFunctionData();
              this.showModel = false;
            },
            (e) => {
              console.log(e);
            }
          );
        } else {
          this.showModel = false;
        }
      },
      modalCancel() {
        if (this.uploadImgId) {
          let params = { fileId: this.uploadImgId };
          this.$http('post', '/file/delete', params).then(
            (res) => {
              this.showModel = false;
            },
            (e) => {
              console.log(e);
            }
          );
        } else {
          this.showModel = false;
        }
      },
      async getFunctionData() {
        const ret = await this.$http(
          'post',
          '/shop/home/function/query',
          JSON.stringify(this.queryParams)
        );
        // const ret = await this.$http(
        //   'post',
        //   '/user/login',
        //   JSON.stringify({ userName: 'admin', userPass: '123456' })
        // );
        console.log(ret);
        const {
          code,
          msg,
          data: { rows, total },
        } = ret.data;
        if (code === 0) {
          this.functionsData = rows;
          this.functionsTotal = total;
        } else {
          this.$message.error(msg);
        }
        // this.showModel = false;
      },
      switchChanged(val) {
        if (val) {
          this.functionObjIsShow = 1;
        } else {
          this.functionObjIsShow = 0;
        }
      },
    },
    components: {
      DySwitch,
    },
  };
</script>

<style lang="scss" scoped>
  .settingCommonFunc {
    height: 100%;
    width: 100%;

    .tableClass {
      height: 100%;
      width: 100%;
    }
  }
</style>
