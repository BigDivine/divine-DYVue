import Vue from 'vue';
import Router from 'vue-router';
import IndexView from '@/pages/index';
import PRHomeView from '@/pages/p-r-home';
import PRHomeSettingView from '@/pages/p-r-home-setting';
import PRViewDocView from '@/pages/p-r-view-doc';
import PROneHouseView from '@/pages/oneHouse';
import PRThreeHouseView from '@/pages/threeHouse';

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
    children: [
      {
        path: '/Home',
        name: 'HomeRP',
        component: PRHomeView
      },
      {
        path: '/HomeSetting',
        name: 'HomeSettingRP',
        component: PRHomeSettingView
      },
      {
        path: '/ViewDoc',
        name: 'ViewDocRP',
        component: PRViewDocView
      },
      {
        path: '/OneHouse',
        name: 'OneHouseRP',
        component: PROneHouseView
      },
      {
        path: '/ThreeHouse',
        name: 'ThreeHouseRP',
        component: PRThreeHouseView
      }
    ]
  }
];

export default new Router({
  routes
});
