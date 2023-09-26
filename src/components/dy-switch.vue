<template>
  <div>
    <span class="dy-switch" :class="{ 'dy-switch-on': isChecked }" :value="value" @click="toggle">
    </span>
  </div>
</template>

<script>
  export default {
    name: 'dy-switch',
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isChecked: this.value
      };
    },

    watch: {
      value (val) {
        this.isChecked = val;
      },
      isChecked (val) {
        this.$emit('change', val);
      }
    },
    methods: {
      toggle () {
        this.isChecked = !this.isChecked;
      }
    }
  };
</script>
<style lang="scss" scoped>
  .dy-switch {
    display: block;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    // background-color: #dfdfdf;
    position: relative;
  }
  .dy-switch:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #fdfdfd;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .dy-switch:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  .dy-switch-on {
    background-color: var(--theme-color);
  }
  .dy-switch-on:before {
    background-color: var(--theme-color);
  }
  .dy-switch-on:after {
    transform: translateX(20px);
  }
</style>
