import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '@/pages/index';
import HomeView from '@/pages/home';
import HomeSettingView from '@/pages/home-setting';
import ViewDocView from '@/pages/view-doc';

import OneHouseView from '@/pages/decoration/oneHouse';
import ThreeHouseView from '@/pages/decoration/threeHouse';
import ToiletWallView from '@/pages/decoration/toiletWall';
import KitchenView from '@/pages/decoration/kitchen/index';

import DownloadView from '@/pages/downloadPage';
import IframeView from '@/pages/iframe/iframe';

import VxeTableView from '@/pages/vxeTable/index';

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
      }
    ]
  }
];

export default new Router({
  routes
});
