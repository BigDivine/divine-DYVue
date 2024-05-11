import Vue from 'vue';
import Router from 'vue-router';

import LoginView from '@/views/login.vue';
import IndexView from '@/views/dy.vue';

import HomeView from '@/views/dy/home.vue';
import HomeSettingView from '@/views/dy/home-setting';
import ViewDocView from '@/views/dy/view-doc';

import OneHouseView from '@/views/other/decoration/oneHouse';
import ThreeHouseView from '@/views/other/decoration/threeHouse';
import ToiletWallView from '@/views/other/decoration/toiletWall';
import KitchenView from '@/views/other/decoration/kitchen/index';
import BoxView from '@/views/other/decoration/box/index';

import CFActivityView from '@/views/other/cf-activity';

// import DownloadView from '@/views/other/downloadPage';
// import IframeView from '@/views/other/iframe/iframe';

// import VxeTableView from '@/views/other/vxeTable/index';

Vue.use(Router);
const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/dy',
    component: IndexView,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'setting',
        name: 'HomeSetting',
        component: HomeSettingView
      },
      {
        path: '/view/doc',
        name: 'ViewDoc',
        component: ViewDocView
      },
      {
        path: '/OneHouse',
        name: 'OneHouse',
        component: OneHouseView
      },
      {
        path: '/ThreeHouse',
        name: 'ThreeHouse',
        component: ThreeHouseView
      },
      {
        path: '/ToiletWall',
        name: 'ToiletWall',
        component: ToiletWallView
      },
      {
        path: '/Kitchen',
        name: 'Kitchen',
        component: KitchenView
      },
      {
        path: '/Box',
        name: 'Box',
        component: BoxView
      },
      // {
      //   path: '/Download',
      //   name: 'Download',
      //   component: DownloadView
      // },
      // {
      //   path: '/IframePage',
      //   name: 'IframePage',
      //   component: IframeView
      // },

      // {
      //   path: '/VxeTable',
      //   name: 'VxeTable',
      //   component: VxeTableView
      // },
      {
        path: '/CFActivity',
        name: 'CFActivity',
        component: CFActivityView
      }
    ]
  },
  {
    path: '*',
    redirect: '/login'
  }
];

export default new Router({
  routes
});
