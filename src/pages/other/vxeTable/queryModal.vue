<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2024.01.19
* Filename      : queryModal.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <Modal class-name="QueryModal" v-model="show" title="余额表查询">
    <Form
      ref="queryCondition"
      :rules="ruleValidate"
      :model="queryCondition"
      :label-width="70"
      style="height: 500px"
    >
      <Row type="flex">
        <Col :span="19">
          <FormItem label="单位" prop="unitCodes">
            <Input v-model="modalData.selectUnit"></Input>
            <!-- <unit-select
              v-model="modalData.selectUnit"
              @change="unitChange($event)"
              :transfer="true"
              :params="{ authType: 'ACCESS', orgType: 'MD_ORG' }"
              :dataSet="unitDataSet"
              style="width: 100%"
            >
            </unit-select> -->
          </FormItem>
        </Col>
        <Col :span="5">
          <Checkbox v-model="modalData.reportFlag" style="margin: 5px 0 0 10px">
            报表单位
          </Checkbox>
        </Col>
      </Row>
      <Row type="flex">
        <Col :span="12">
          <FormItem label="年度" prop="year">
            <Select v-model="modalData.acctYear" style="width: 95%">
              <Option v-for="item in yearList" :value="item.value" :key="item.value">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="期间" prop="period">
            <Select v-model="modalData.startPeriod" style="width: 42%">
              <Option v-for="item in periodList" :value="item.value" :key="item.value">{{
                item.label
              }}</Option>
            </Select>
            至
            <Select v-model="modalData.endPeriod" style="width: 43%">
              <Option v-for="item in periodList" :value="item.value" :key="item.value">{{
                item.label
              }}</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row type="flex">
        <Col :span="12">
          <FormItem label="币种" prop="currencyCode">
            <Select v-model="modalData.currencyCode" style="width: 95%" clearable filterable>
              <Option v-for="item in currencyList" :value="item.code" :key="item.code">{{
                item.title
              }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col :span="12">
          <FormItem label="折算币种" prop="currencyCode" v-if="conversionEnable">
            <Select v-model="modalData.repCurrCode" style="width: 95%" clearable filterable>
              <Option v-for="item in repCurrencyList" :value="item.code" :key="item.code">{{
                item.name
              }}</Option>
            </Select>
          </FormItem>
          <FormItem label="本位币" prop="currencyCode" v-else>
            <Input v-model="currencyMap[modalData.finCurr]" style="width: 95%" disabled />
          </FormItem>
        </Col>
      </Row>
      <Row type="flex">
        <Col :span="10" v-if="!modalData.multiSubjFlag">
          <FormItem label="科目起" prop="startSubject">
            <Input v-model="modalData.selectStartSub" />
            <!-- <basedata-select
              :transfer="true"
              style="width: 95%"
              v-model="modalData.selectStartSub"
              @change="subStartChange($event)"
              :showTextFormat="true"
              :title="'起始科目'"
              :params="{ tableName: 'MD_ACCTSUBJECT' }"
            >
            </basedata-select>  -->
          </FormItem>
        </Col>
        <Col :span="9" v-if="!modalData.multiSubjFlag">
          <FormItem label="科目止" prop="endSubject">
            <Input v-model="modalData.selectStartSub" />
             <basedata-select
              :transfer="true"
              style="width: 100%"
              v-model="modalData.selectEndSub"
              @change="subEndChange($event)"
              :showTextFormat="true"
              :title="'截止科目'"
              :params="{ tableName: 'MD_ACCTSUBJECT' }"
            >
            </basedata-select> 
          </FormItem>
        </Col>
        <!--  <Col :span="19" v-else>
          <FormItem label="科目" prop="subject">
            <Input v-model="queryCondition.multiSubj" style="width: 100%"></Input> 
          </FormItem>
        </Col>-->
        <Col :span="5">
          <FormItem label="科目多值" :label-width="10">
            <!-- <Checkbox v-model="queryCondition.multiSubjFlag" @on-change="changeMultiFlag">
              科目多值
            </Checkbox> -->
          </FormItem>
        </Col>
      </Row>
      <Row type="flex">
        <Col :span="19">
          <FormItem label="排除科目" prop="year">
            <!-- <Input v-model="queryCondition.excludeSubj"></Input> -->
          </FormItem>
        </Col>
        <Col :span="5">
          <!-- <Checkbox v-model="queryCondition.containAdjustVchr" style="margin: 5px 0 0 10px">
            包含调整凭证
          </Checkbox> -->
        </Col>
      </Row>
      <Row type="flex">
        <Col style="width: 100%">
          <FormItem label="维度">
            <Row class="editselecttable">
              <Col>
                <!-- <el-table
                  ref="multipleTable"
                  :data="dimTableData"
                  border
                  stripe
                  style="height: 250px;overflow-y: auto"
                  class="editTable"
                  @cell-click="cellChange"
                  @selection-change="handleSelectionChange"
                  :span-method="arraySpanMethod"
                >
                  <el-table-column type="selection" align="center" width="55"> </el-table-column>
                  <el-table-column prop="name" label="维度">
                    <template slot-scope="scope">
                      <span
                        ><p class="spanShowClass">{{ scope.row.name }}</p></span
                      >
                    </template>
                  </el-table-column>
                  <el-table-column prop="start" label="起始">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.editFlag">
                        <p class="spanShowClass" v-if="scope.row.referField">
                          {{
                            scope.row.startCode.code
                              ? scope.row.startCode.code + ' ' + scope.row.startCode.title
                              : ''
                          }}
                        </p>
                        <p class="spanShowClass" v-else>
                          {{ scope.row.startCode }}
                        </p>
                      </span>
                      <basedata-select
                        v-else-if="scope.row.referField"
                        :transfer="true"
                        v-model="scope.row.startCode"
                        @change="dimStartChange(scope.row, $event)"
                        :mode="mode"
                        :params="{ tableName: scope.row.referField }"
                      >
                      </basedata-select>
                      <Input
                        v-else
                        style="width: 100%"
                        v-model="scope.row.startCode"
                        @on-change="dimStartStrChange(scope.row)"
                      ></Input>
                    </template>
                  </el-table-column>
                  <el-table-column prop="end" label="截止">
                    <template slot-scope="scope">
                      <span v-if="!scope.row.editFlag">
                        <p class="spanShowClass">
                          {{
                            scope.row.endCode.code
                              ? scope.row.endCode.code + ' ' + scope.row.endCode.title
                              : ''
                          }}
                        </p>
                      </span>
                      <basedata-select
                        v-else-if="scope.row.referField"
                        :transfer="true"
                        v-model="scope.row.endCode"
                        @change="dimEndChange(scope.row, $event)"
                        :mode="mode"
                        :params="{ tableName: scope.row.referField }"
                      >
                      </basedata-select>
                    </template>
                  </el-table-column>
                </el-table> -->
              </Col>
            </Row>
          </FormItem>
        </Col>
      </Row>
    </Form>
    <div slot="footer">
      <Button type="text" @click="resetCondition">重置</Button>
      <Button type="text" @click="cancelModal">取消</Button>
      <Button type="primary" @click="confirmCondition('queryCondition')" :loading="loading"
        >确定</Button
      >
    </div>
  </Modal>
</template>

<script>
  export default {
    name: 'QueryModal',
    components: {},
    props: {
      show: { type: Boolean, default: true },
      modalData: {
        type: Object,
        default: () => {
          return {
            // 单位
            selectUnit: {},
            // 报表单位
            reportFlag: false,
            // 年度
            acctYear: new Date().getFullYear(),
            // 期间
            startPeriod: new Date().getMonth() + 1,
            endPeriod: new Date().getMonth() + 1,
            // 折算币种
            repCurrCode: '',
            // 本位币
            finCurr: '',
// 科目起
            selectStartSub: {},
            selectEndSub: {},
            unitCodes: [],
            currencyCode: '',

            startSubjectCode: '',
            endSubjectCode: '',
            queryDimList: [],

            containAdjustVchr: false,
            excludeSubj: '',
            multiSubjFlag: false,
            multiSubj: '',
            page: 1,
            pageSize: 50
          };
        }
      }
    },
    data () {
      return {
        // 年度
        yearList: [],
        // 时期
        periodList: [
          { value: 1, label: '1月' },
          { value: 2, label: '2月' },
          { value: 3, label: '3月' },
          { value: 4, label: '4月' },
          { value: 5, label: '5月' },
          { value: 6, label: '6月' },
          { value: 7, label: '7月' },
          { value: 8, label: '8月' },
          { value: 9, label: '9月' },
          { value: 10, label: '10月' },
          { value: 11, label: '11月' },
          { value: 12, label: '12月' }
        ],
        // 币种
        currencyList: [],
        // 本位币
        currencyMap: {}
      };
    },
    created () {},
    mounted () {},
    methods: {}
  };
</script>
<style lang="scss" scoped>
  .QueryModal {
  }
</style>
