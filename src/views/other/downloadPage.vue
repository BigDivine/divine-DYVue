<!--********************************************************************
* Author        : yangzelong
* Email         : yangzelong@jiuqi.com.cn
* Create Date   : 2023.10.17
* Filename      : app-download.vue
* Description   : 下载地址:  http://10.97.10.34:9668/anon/gmt/appCenter/appDownload/android/2cfcbe8c-18a1-4274-a44b-1d01fe86b124
                  获取下载id接口（POST）：http://10.97.10.34:9668/anon/gmt/appCenter/list/1    1-android  2-ios
                  安装包文件信息展示页面：http://10.97.10.34:9668/anon/gmt/appCenter/index
* Arguments     :
********************************************************************-->
<template>
  <div class="app-download">
    <div style="width:20%;background:$dy-primary-color"></div>
    <div style="flex:1;height:100%;display:flex;flex-direction:column;justify-content:center; ">
      <div
        style="width:50%;align-self:center;display:flex;flex-direction:column;align-items:center;"
      >
        <div style="width:100%;text-align:center;">
          <!-- <img style="height:100px;height:100px;" src="@/assets/logo_jj.png" alt="" /> -->
          <img style="height:200px;height:200px;" src="@/assets/ercode_download.png" alt="" />
        </div>
        <div style="color:#000;font-size:25px;font-weight:600;">金建可视化app</div>
        <div style="color:#aaa;font-size:14px;">扫描二维码下载</div>
        <div style="color:#aaa;font-size:14px;">或用手机浏览器输入这个网址：</div>
        <div style="color:000">http://10.97.10.34:9668/anon/gmt/appCenter/index</div>
        <div style="margin:30px 0;border:#aaa solid 1px;width:100%;"></div>
        <div style="text-align:center;color:#aaa;font-size:14px;">版本：v1.1.0 - 20.00MB</div>
        <div style="text-align:center;color:#aaa;font-size:14px;">更新于：2023-10-16 15:19</div>
        <div
          style=" height:45px;width:180px;background:$dy-primary-color;border-radius:12px;text-align:center;line-height:45px;color:#fff;font-size:16px;font-weight:600;"
        >
          直接下载
        </div>
      </div>
    </div>
    <div style="width:20%;background:$dy-primary-color">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-download',
    components: {},
    data () {
      return {};
    },
    created () {},
    mounted () {},
    methods: {}
  };
</script>
<style lang="less" scoped>
  .app-download {
    background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>
