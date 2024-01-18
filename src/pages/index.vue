<template>
  <div class="indexContainer">
    <div class="indexHeader">
      <div class="indexHeaderContainer">
        <div class="indexHeaderLogo">
          <img src="@/assets/logo-dy.png" />
          <div>DY项目后台管理系统</div>
        </div>
      </div>
      <div class="indexHeaderThird">
        <div class="indexLinkStyle" v-for="(item, index) in thirdLinkData" :key="index">
          <div class="iconStyle">
            <img :src="require('@/assets/icons/ic_third_' + item.icon + '.png')" />
          </div>
          <a :href="item.url" target="_blank">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
    <DYMenu>
      <DYMenuItem
        v-for="(item, index) in NavigationsData"
        :key="index"
        :icon="require('@/assets/' + item.icon + '.png')"
        :title="item.title"
        :children="item.children"
        @item-click="menuItemClick(item)"
        @sub-item-click="menuItemClick"
      ></DYMenuItem>
    </DYMenu>
    <div class="indexContent">
      <div class="indexMain">
        <router-view />
      </div>
      <div class="indexFooter">
        © 版权所有1997-9999 DivineYang 京公网安备 XXXXXXXXXXXXXXXX号 京ICP备XXXXXXXX号
      </div>
    </div>
  </div>
</template>

<script>
  import thirdLinkData from './ThirdLinks.json';
  import NavigationsData from './Navigations.json';

  import DYMenu from '@/components/dy-menu';
  import DYMenuItem from '@/components/dy-menu-item';
  export default {
    name: 'index',
    components: { DYMenu, DYMenuItem },
    data () {
      return { thirdLinkData, NavigationsData };
    },
    created () {
      this.menuItemClick(NavigationsData[0]);
    },
    methods: {
      uploadFile (e) {
        let files = e.target.files;
        let file = files[0];
        let param = new FormData(); // 创建form对象
        param.append('file', file); // 通过append向form对象添加数据
        this.$http
          .post('/upload/img', param, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .then(function (response) {
            console.log(response);
            e.target.value = '';
          })
          .catch(function (error) {
            console.log(error);
            e.target.value = '';
          });
      },
      menuItemClick (item) {
        this.$router.push({ path: `/${item.view}`, name: `${item.view}` });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .indexContainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .indexHeader {
      height: 80px;
      width: 100%;
      display: flex;
      background: linear-gradient(to right, $dy-primary-color, $dy-bg-color);
      .indexHeaderContainer {
        flex: 1;
        .indexHeaderLogo {
          height: 80px;
          display: flex;
          align-items: center;
          padding: 0 20px;
          color: $dy-font-color;
          font-weight: 600;
          font-style: bold;
          font-size: 16px;
          img {
            height: 60px;
            width: 60px;
          }
        }
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
          .iconStyle {
            height: 18px;
            width: 18px;
            overflow: hidden;
            img {
              height: 18px;
              width: 18px;
              filter: drop-shadow($dy-primary-color 18px 0);
              transform: translateX(-18px);
            }
          }
          a {
            height: 20px;
            line-height: 20px;
            flex: 1;
            margin-left: 5px;
            color: $dy-font-color;
            font-style: bold;
            font-size: 12px;
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
