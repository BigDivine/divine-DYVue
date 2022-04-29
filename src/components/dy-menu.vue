<template>
  <div class="DYMenu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "dy-menu",

  props: {
    template: { type: Object, default: () => {} },
    model: { type: Object, default: () => {} },
  },
  // props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.DYMenu {
  height: 40px;
  display: flex;
  overflow: auto;
}
</style>
