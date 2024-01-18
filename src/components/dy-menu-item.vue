<template>
  <div
    class="DYMenuItem"
    @click="menuItemClick"
    @mouseover="mouseInMenu"
    @mouseleave="mouseOutMenu"
  >
    <div class="ItemContainer">
      <div class="DYMenuItemCell">
        <img :src="icon" />
        <div>{{ title }}</div>
      </div>
    </div>
    <div
      class="DYMenuSubContain"
      v-if="showSub"
      @mouseover="mouseInSubMenu"
      @mouseleave="mouseOutSubMenu"
    >
      <template v-for="(child, index) in children">
        <div class="DYMenuSubItem" :key="index" @click="subItemClick(child)">
          <img :src="require('@/assets/' + child.icon + '.png')" />
          <div>{{ child.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dy-menu-item',
    props: { icon: String, title: String, children: { type: Array, default: () => [] } },

    computed: {
      showSub () {
        return (
          this.children && this.children.length && (this.isMouseInMenu || this.isMouseInSubMenu)
        );
      }
    },
    data () {
      return { isMouseInMenu: false, isMouseInSubMenu: false };
    },
    methods: {
      mouseInMenu (e) {
        this.isMouseInMenu = true;
      },
      mouseOutMenu (e) {
        this.isMouseInMenu = false;
      },
      mouseInSubMenu (e) {
        this.isMouseInSubMenu = true;
      },
      mouseOutSubMenu (e) {
        this.isMouseInSubMenu = false;
      },
      menuItemClick () {
        if (this.children && this.children.length) {
          this.showSub = !this.showSub;
        } else {
          this.$emit('item-click');
        }
      },
      subItemClick (child) {
        this.$emit('sub-item-click', child);
      }
    }
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
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background: $dy-bg-color;
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
  }
</style>
