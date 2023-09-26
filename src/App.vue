<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      document
        .getElementById('app')
        .style.setProperty('--theme-color', localStorage.getItem('theme-color'));
      document
        .getElementById('app')
        .style.setProperty('--theme-color-rgba', localStorage.getItem('theme-color-rgba'));
      document
        .getElementById('app')
        .style.setProperty('--theme-font-color', localStorage.getItem('theme-font-color'));
      document
        .getElementById('app')
        .style.setProperty('--theme-border-color', localStorage.getItem('theme-border-color'));
    }
  };
</script>

<style lang="scss" scoped>
  #app {
    height: 100%;
    width: 100%;
    margin: 0;
    background: var(--theme-color-rgba);
  }
</style>
