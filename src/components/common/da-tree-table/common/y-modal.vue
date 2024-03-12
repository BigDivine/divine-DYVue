<!--********************************************************************
* Author        : yangzelong
* Email         :
* Create Date   : 2020/12/12
* Filename      :
* Description   : 通用modal组件,模态框
* Arguments     : show:模态框是否显示
                  modalType:根据不同的modalType弹出对应的模态框内容
                  data:模态框内的对象，即模态框需要配置的信息
                  @modal-ok(data):点击模态框确定按钮监听
                  @modal-cancel:点击模态框取消按钮监听
********************************************************************-->
<template>
  <Modal
    class="YModal"
    v-model="showModal"
    :fullscreen="fullScreen"
    :footer-hide="!withFooter"
    :mask-closable="false"
    :closable="false"
  >
    <div slot="header" class="modalHeader">
      <div class="title">
        {{ title }}
      </div>
      <div @click="modalClose()"><Icon type="md-close" :size="20" /></div>
    </div>
    <component v-if="showModal" :is="modalType" :data="data"> </component>
    <div slot="footer" class="modalFooter">
      <Button class="cancelBtn" @click="modalCancel">取消</Button>
      <Button class="submitBtn" @click="modalOk">确定</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'YModal',
  props: {
    show: { type: Boolean, default: false },
    fullScreen: { type: Boolean, default: false },
    withFooter: { type: Boolean, default: false },
    customClose: { type: Boolean, default: false },
    title: { type: String, default: '' },
    modalType: { type: String, default: 'common' },
    data: [Array, Object, String]
  },
  computed: {
    showModal: {
      get () {
        return this.show
      },
      set (val) {}
    }
  },

  methods: {
    modalOk () {
      this.$emit('modal-ok', this.data)
    },
    modalCancel () {
      this.$emit('modal-cancel')
    },
    modalClose () {
      if (this.customClose) {
        this.$emit('modal-close')
      } else {
        this.$emit('modal-cancel')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .YModal {
    .modalHeader {
      display: flex;
      align-items: center;
      .title {
        flex: 1;
        font-size: 16px;
        padding: 5px 0;
        color: #0f0f0f;
        font-weight: 500;
      }
    }
    .modalFooter {
      display: flex;
      justify-content: flex-end;
      font-size: 14px;
      .cancelBtn {
        height: 32px;
        line-height: 32px;
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        padding: 0 15px;
        color: var(--primary-color);
      }
      .submitBtn {
        height: 32px;
        line-height: 32px;
        border: 1px solid var(--primary-color);
        border-radius: 5px;
        padding: 0 15px;
        color: #ffffff;
        background: var(--primary-color);
      }
    }
  }
</style>
