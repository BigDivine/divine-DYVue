<template>
  <div ref="DYMenuItem" class="DYMenuItem">
    <div class="ItemContainer" @click="menuItemClick(1)">
      <div class="DYMenuItemCell">
        <img :src="require('@/assets/' + menu.icon + '.png')" />
        <div>{{ menu.title || '导航' }}</div>
      </div>
    </div>
    <div
      class="DYMenuSubContain"
      :style="{
        width: menuWidth + 'px',
        borderBottomRightRadius: showSubChild ? '0' : '8px',
      }"
      v-if="showSub"
    >
      <template v-for="(child, index) in menu.children">
        <div class="DYMenuSubItem" :key="index" @click="menuItemClick(2, child, index)">
          <img :src="require('@/assets/' + child.icon + '.png')" />
          <div>{{ child.title }}</div>
        </div>
      </template>
    </div>
    <div
      class="DYMenuSubChildContain"
      :style="{
        top: (curSubMenuIndex > -1 ? (curSubMenuIndex + 1) * 40 : 0) + 'px',
        left: menuWidth + 'px',
        width: menuWidth + 'px',
      }"
      v-if="showSubChild"
    >
      <template v-for="(subChild, index) in curSubMenu.children">
        <div class="DYMenuSubChildItem" :key="index" @click="menuItemClick(3, subChild)">
          <img :src="require('@/assets/' + subChild.icon + '.png')" />
          <div>{{ subChild.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dy-menu-item',
    props: {
      menu: { type: Object, default: () => {} },
      expand: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        menuWidth: 100,

        showSub: false,
        curSubMenu: null,
        curSubMenuIndex: -1,
        showSubChild: false,
      };
    },
    watch: {
      expand(val) {
        this.showSub = val && this.menu.children && this.menu.children.length;
        if (!this.showSub) {
          this.showSub = false;
          this.showSubChild = false;
          this.curSubMenu = null;
          this.curSubMenuIndex = -1;
        }
      },
    },
    mounted() {
      let menuItemDom = this.$refs.DYMenuItem;
      this.menuWidth = menuItemDom.offsetWidth;
    },
    methods: {
      menuItemClick(level, item, index) {
        console.log(level, item, index);
        if (level === 1) {
          this.$emit('nav-click');
          if (this.menu.children && this.menu.children.length) {
          } else {
            this.$emit('item-click', this.menu);
          }
          return;
        }
        if (level === 2) {
          if (item.children && item.children.length) {
            this.curSubMenu = item;
            this.curSubMenuIndex = index;
            this.showSubChild = !this.showSubChild;
          } else {
            this.$emit('item-click', item);
          }
          return;
        }
        if (level === 3) {
          this.$emit('item-click', item);
          return;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .DYMenuItem {
    display: block;
    float: left;
    min-width: 100px;
    height: 100%;
    text-align: center;
    position: relative;
    .ItemContainer {
      height: 40px;
      cursor: pointer;
      .DYMenuItemCell {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        img {
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
        div {
          white-space: nowrap;
          font-size: 16px;
        }
      }
    }
    .ItemContainer :hover {
      color: #fff;
      background: $dy-primary-color;
    }
    .DYMenuSubContain {
      position: absolute;
      top: 40px;
      left: 0;
      z-index: 500;
      background: $dy-bg-color;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-left: 1px solid $dy-border-color;
      border-right: 1px solid $dy-border-color;
      border-bottom: 1px solid $dy-border-color;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
      .DYMenuSubItem {
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-bottom: 1px solid $dy-border-color;
        padding: 10px;
        img {
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
        div {
          white-space: nowrap;
          font-size: 16px;
        }
      }
      .DYMenuSubItem:last-child {
        border-bottom: 0;
      }
      .DYMenuSubItem:hover {
        background: $dy-primary-color;
      }
    }
    .DYMenuSubChildContain {
      position: absolute;
      top: 40px;
      left: 100px;
      z-index: 500;
      background: $dy-bg-color;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border-left: 1px solid $dy-border-color;
      border-right: 1px solid $dy-border-color;
      border-bottom: 1px solid $dy-border-color;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
      .DYMenuSubChildItem {
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-bottom: 1px solid $dy-border-color;
        padding: 10px;
        img {
          height: 20px;
          width: 20px;
          margin-right: 5px;
        }
        div {
          white-space: nowrap;
          font-size: 16px;
        }
      }
      .DYMenuSubChildItem:last-child {
        border-bottom: 0;
      }
      .DYMenuSubChildItem:hover {
        background: $dy-primary-color;
      }
    }
  }
</style>
