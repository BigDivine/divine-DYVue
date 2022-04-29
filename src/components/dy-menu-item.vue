<template>
  <div class="DYMenuItem" @click="menuItemClick">
    <div
      class="DYMenuItemContainer"
      @mouseover="naviItemMouseOver($event)"
      @mouseleave="naviItemMouseLeave($event)"
    >
      <div class="DYMenuItemCell">
        <img :src="icon" />
        <div>{{ title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dy-menu-item",
  props: { icon: String, title: String },
  data() {
    return {};
  },
  methods: {
    menuItemClick() {
      this.$emit("item-click");
    },
    naviItemMouseOver($event) {
      // console.log($event);
    },
    naviItemMouseLeave($event) {
      // console.log($event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/global";

.DYMenuItem {
  width: 130px;
  text-align: center;
  .DYMenuItemCellChildContainer :hover {
    color: #fff;
    background: #ff0000;
  }
  .DYMenuItemCellChildContainer {
    position: fixed;
    z-index: 10;
    width: 130px;
    height: auto;
    border: 1px solid #000;
    background: #00ff00;
    .DYMenuItemCellChild {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
      div {
        height: 20px;
        white-space: nowrap;
        font-size: 16px;
      }
    }
  }

  .DYMenuItemContainer :hover {
    color: #fff;
    background: $themeColor;
  }
  .DYMenuItemContainer {
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
}
</style>
