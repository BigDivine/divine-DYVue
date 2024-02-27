import Vue from 'vue';
import Router from 'vue-router';

import IndexView from '@/pages/common/index';

import HomeView from '@/pages/dy/home';
import HomeSettingView from '@/pages/dy/home-setting';
import ViewDocView from '@/pages/dy/view-doc';

import OneHouseView from '@/pages/other/decoration/oneHouse';
import ThreeHouseView from '@/pages/other/decoration/threeHouse';
import ToiletWallView from '@/pages/other/decoration/toiletWall';
import KitchenView from '@/pages/other/decoration/kitchen/index';

import DownloadView from '@/pages/other/downloadPage';
import IframeView from '@/pages/other/iframe/iframe';

import VxeTableView from '@/pages/other/vxeTable/index';
import CFActivityView from '@/pages/other/cf-activity';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/HomeSetting',
        name: 'HomeSetting',
        component: HomeSettingView
      },
      {
        path: '/ViewDoc',
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
        path: '/Download',
        name: 'Download',
        component: DownloadView
      },
      {
        path: '/IframePage',
        name: 'IframePage',
        component: IframeView
      },
      {
        path: '/Kitchen',
        name: 'Kitchen',
        component: KitchenView
      },
      {
        path: '/VxeTable',
        name: 'VxeTable',
        component: VxeTableView
      },
      {
        path: '/CFActivity',
        name: 'CFActivity',
        component: CFActivityView
      }
    ]
  }
];

export default new Router({
  routes
});
