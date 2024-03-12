<!--********************************************************************
* Author        : yangzelong
* Email         :
* Create Date   : 2020/12/12
* Filename      :
* Description   : 通用组件-树形-基于iView Tree开发
* Arguments     :
                  @tree-action-edit(data):树形编辑按钮点击
                  @tree-action-delete(data)：树形删除按钮点击
                  @tree-select(selectNodes, curNode)：树形节点选中事件
********************************************************************-->

<template>
  <div class="YSearchTree">
    <div v-if="mode !== 1 && !readOnly && showTool" class="YTreeTool">
      <div
        :class="
          toolStyle === 2 ? 'BigYTreeToolItem' : toolStyle === 1 ? 'YTreeToolItem' : 'YTreeToolItem'
        "
        v-for="(item, index) in tools"
        :key="index"
      >
        <Button
          class="YTreeToolItemBtn"
          size="small"
          type="primary"
          ghost
          @click="toolClick(item, index)"
        >
          {{ item.title }}
        </Button>
      </div>
    </div>
    <Input
      v-if="showSearch"
      size="small"
      suffix="ios-search"
      placeholder="输入关键字查询（按名称）"
      style="margin-bottom: 10px"
      v-model="searchKey"
    />
    <div class="YTreeContain">
      <div class="YTree">
        <Tree
          :data="data"
          :load-data="loadData"
          :render="isCustomRender ? treeRender : renderContent"
          class="treeStyle"
          @on-select-change="selectChange"
        ></Tree>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YSearchTree',
  props: {
    // 固定样式：0-自定义样式。1-外部工具栏样式。2-内部工具栏样式
    mode: { type: Number, default: 0 },
    showSearch: { type: Boolean, default: false },
    showTool: { type: Boolean, default: false },
    tools: { type: Array, default: () => [] },
    toolStyle: { type: Number, default: 2 },
    isCustomRender: { type: Boolean, default: false },
    treeRender: { type: Function, default: (h, { root, node, data }) => h() },
    // loadData: { type: Function, default: (item, callback) => f() },
    data: { type: Array, default: () => [] },
    readOnly: { type: Boolean, default: false }
  },
  data() {
    return { searchKey: '' };
  },
  watch: {
    searchKey(val) {
      this.$emit('search', val);
    }
  },
  methods: {
    renderContent(h, { root, node, data }) {
      return h(
        'div',
        {
          class: {
            nodeContain: true
          },
          on: {
            mouseenter: () => {
              if (this.mode !== 1 && !this.readOnly) this.mouseIn(data);
            },
            mouseleave: () => {
              if (this.mode !== 1 && !this.readOnly) this.mouseOut(data);
            }
          }
        },
        [
          h('Icon', {
            style: {
              marginRight: '5px'
            },
            props: {
              type: 'ios-folder-outline',
              size: 14
            }
          }),
          h(
            'div',
            {
              style: {
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              },
              props: {}
            },
            [
              h(
                'div',
                {
                  class: {
                    treeNodeTitle: true
                  }
                },
                data.title || data.name
              ),
              h(
                'div',
                {
                  class: {
                    treeNodeAction: true
                  },
                  style: { display: 'none' },
                  attrs: {
                    id: `operation${data.id || data.code || data.name}`
                  }
                },
                [
                  h('Icon', {
                    class: {
                      action: true
                    },
                    props: {
                      class: 'action',
                      type: 'ios-create',
                      size: 14
                    },
                    nativeOn: {
                      click: () => {
                        this.editClick(data);
                      }
                    }
                  }),
                  h('Icon', {
                    class: {
                      action: true
                    },
                    props: {
                      class: 'action',
                      type: 'ios-trash',
                      size: 14
                    },
                    nativeOn: {
                      click: () => {
                        this.deleteClick(data);
                      }
                    }
                  })
                ]
              )
            ]
          )
        ]
      );
    },

    mouseIn(data) {
      let id = data.id || data.code || data.name;
      let elId = 'operation' + id;
      let el = document.getElementById(elId);
      el.style.display = 'block';
    },
    mouseOut(data) {
      let id = data.id || data.code || data.name;
      let elId = 'operation' + id;
      let el = document.getElementById(elId);
      el.style.display = 'none';
    },

    toolClick(item, index) {
      this.$emit('tool-click', item, index);
    },
    selectChange(selectNodes, curNode) {
      this.$emit('tree-select', selectNodes, curNode);
    },
    editClick(data) {
      this.$emit('node-edit', data);
    },
    deleteClick(data) {
      this.$emit('node-delete', data);
    }
  }
};
</script>

<style lang="scss" scope>
.YSearchTree {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .YTreeTool {
    margin-bottom: 15px;
    .YTreeToolItem {
      padding: 3px 5px;
      display: inline-block;
    }
    .BigYTreeToolItem {
      width: 100%;
      padding: 3px 5px;
      display: inline-block;
    }
    .YTreeToolItemBtn {
      width: 100%;
    }
  }
  .YTreeContain {
    flex: 1;
    width: 100%;
    overflow: auto;
    .YTree {
      height: 90%;
      width: 100%;
      .treeStyle {
        .ivu-tree-title {
          //将节点title横向铺满并且防止出现多余横向滚动条
          width: calc(100% - 20px);
        }
        li {
          margin: 3px 0 0 0;
        }
      }
      //树形节点的title部分内容
      .nodeContain {
        display: flex;
        align-items: center;
        width: 100%;
        .treeNodeTitle {
          flex: 1;
          font-size: 14px;
          color: #080808;
        }
        .treeNodeAction {
          position: absolute;
          right: 0px;
          display: none;
          background: transparent;
          .action {
            font-size: 14px;
            float: left;
            margin-left: 5px;
          }
          .action:last-child {
            font-size: 14px;
            float: left;
            margin-right: 5px;
            margin-left: 5px;
          }
          .action:hover {
            color: var(--primary-color);
          }
        }
      }
    }
  }
}
</style>
