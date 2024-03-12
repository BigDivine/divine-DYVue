<template>
  <div class="indexContainer">
    <div class="indexHeader">
      <div class="indexHeaderContainer">
        <div class="indexHeaderLogo">
          <img src="/static/logo.png" />
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
    <DYMenu :navList="NavigationsData" @item-click="menuItemClick"> </DYMenu>
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
import thirdLinkData from '@/jsons/ThirdLinks.json';
import NavigationsData from '@/jsons/Navigations.json';

import DYMenu from '@/components/dy/dy-menu.vue';
export default {
  name: 'index',
  components: { DYMenu },
  data() {
    return { thirdLinkData, NavigationsData };
  },
  created() {
    this.menuItemClick({
      view: 'Home'
    });
  },
  methods: {
    menuItemClick(item) {
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
    overflow: hidden;
    .indexMain {
      flex: 1;
      width: 100%;
      overflow: hidden;
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
