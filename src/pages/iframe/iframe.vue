<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.11.02
* Filename      : iframe.vue
* Description   : 
* Arguments     : 
********************************************************************-->
<template>
  <div class="iframe">
    <iframe
      id="dy-iframe"
      src="http://10.97.10.41:8668/#/"
      style="height:100%;width:100%;"
    ></iframe>
  </div>
</template>

<script>
  export default {
    name: 'iframe',
    components: {},
    data () {
      return {};
    },

    created () {
      this.$nextTick(() => {
        let DyIframe = document.getElementById('dy-iframe');
        if (!DyIframe.addEventListener) {
          DyIframe.attachEvent('onload', this.iframeLoad);
        }
        // 当加载完成后，触发iframeLoad方法
        DyIframe.addEventListener('load', this.iframeLoad, true);
      });
    },
    mounted () {},
    methods: {
      iframeLoad () {
        // 此时iframe作为一个子组件，该方法用于通知父组件做一些事情，例如停止加载loading
        let DyIframe = document.getElementById('dy-iframe');
        console.log('DyIframe', DyIframe);
        let DyIframeDoc = DyIframe.contentDocument || DyIframe.contentWindow.document;
        console.log('DyIframeDoc', DyIframeDoc);
        let viewPortTags = DyIframeDoc.getElementsByTagName('meta');
        console.log('viewPortTags', viewPortTags);

        for (let i = 0; i < viewPortTags.length; i++) {
          if (viewPortTags[i].name === 'viewport') {
            viewPortTags[i].content =
              'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes';
          }
        }
        // let viewPortTag = DyIframeDoc.createElement('meta');
        // viewPortTag.id = 'viewport';
        // viewPortTag.name = 'viewport';
        // viewPortTag.content =
        //   'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes';
        // console.log('DyIframeDoc', DyIframeDoc.head);
        // let headCollection = DyIframeDoc.getElementsByTagName('head');
        // console.log('headCollection-1', headCollection[0]);
        // let headList = Array.from(headCollection);
        // console.log('DyIframeDoc-1', headList);
        // DyIframeDoc.head.appendChild(viewPortTag);
      }
    }
  };
</script>
<style lang="less" scoped>
  .iframe {
    height: 100%;
    width: 100%;
  }
</style>
