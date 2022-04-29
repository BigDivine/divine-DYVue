<template>
  <div class="indexContainer">
    <div class="indexHeader">
      <div class="indexHeaderContainer">
        <div class="indexHeaderLogo">
          <img src="@/assets/logo.png" />
          <div>DY项目后台管理系统</div>
        </div>
      </div>
      <div class="indexHeaderThird">
        <div
          class="indexLinkStyle"
          v-for="(item, index) in thirdLinkData"
          :key="index"
        >
          <img :src="item.img" />
          <a :href="item.url" target="_blank">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
    <DYMenu>
      <DYMenuItem
        v-for="(item, index) in naviData"
        :key="index"
        :icon="item.icon"
        :title="item.title"
        @item-click="menuItemClick(item)"
      ></DYMenuItem>
    </DYMenu>
    <div class="indexContent">
      <div class="indexMain">
        <router-view />
      </div>
      <div class="indexFooter">
        © 版权所有1997-9999 DivineYang 京公网安备 XXXXXXXXXXXXXXXX号
        京ICP备XXXXXXXX号
      </div>
    </div>
  </div>
</template>

<script>
import DYMenu from "@/components/dy-menu";
import DYMenuItem from "@/components/dy-menu-item";
export default {
  name: "index",
  components: { DYMenu, DYMenuItem },
  data() {
    return {
      naviData: [
        {
          icon: require("@/assets/logo.png"),
          title: "首页",
          router: { path: "Home", name: "HomeRP" },
        },
        {
          icon: require("@/assets/logo.png"),
          title: "首页配置",
          router: { path: "HomeSetting", name: "HomeSettingRP" },
        },
      ],
      thirdLinkData: [
        {
          title: "github",
          url: "https://github.com/BigDivine?tab=repositories",
          img: require("@/assets/icons/ic_third_github.png"),
        },
        {
          title: "gitee码云",
          url: "https://gitee.com/divine_yang",
          img: require("@/assets/icons/ic_third_gitee.png"),
        },
        {
          title: "CSDN",
          url: "https://blog.csdn.net/weixin_42405014",
          img: require("@/assets/icons/ic_third_csdn.png"),
        },
        {
          title: "简书",
          url: "https://www.jianshu.com/u/1c2df708e348",
          img: require("@/assets/icons/ic_third_jianshu.png"),
        },
      ],
    };
  },
  methods: {
    uploadFile(e) {
      let files = e.target.files;
      let file = files[0];
      console.log(e, file);
      let param = new FormData(); // 创建form对象
      param.append("file", file); // 通过append向form对象添加数据
      this.$http
        .post("/upload/img", param, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
          console.log(response);
          e.target.value = "";
        })
        .catch(function (error) {
          console.log(error);
          e.target.value = "";
        });
    },
    menuItemClick(item) {
      console.log("menuItemClick", item);
      this.$router.push(item.router);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/global";

.indexContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .indexHeader {
    height: 80px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #cccccc;
    background: $themeColor;
    .indexHeaderContainer {
      flex: 1;
      .indexHeaderLogo {
        height: 80px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        color: #ffffff;
        img {
          height: 60px;
          width: 60px;
        }
      }
      // .indexHeaderNavi {
      //   display: flex;
      //   align-items: flex-end;
      //   overflow: auto;
      //   .indexHeaderNaviItem {
      //     cursor: pointer;
      //     text-align: center;
      //     white-space: nowrap;
      //     padding: 20px;
      //     font-size: 16px;
      //   }
      // }
    }

    .indexHeaderThird {
      width: 100px;
      height: 80px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .indexLinkStyle {
        height: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        img {
          height: 18px;
          width: 18px;
        }
        a {
          color: #ffffff;
          height: 20px;
          flex: 1;
          font-style: bold;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .indexContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    .indexMain {
      flex: 1;
      width: 100%;
    }
    .indexFooter {
      height: 50px;
      width: 100%;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
