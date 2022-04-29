import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/index'
import PRHomeView from '@/pages/p-r-home'
import PRHomeSettingView from '@/pages/p-r-home-setting'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
    children: [{
      path: 'Home',
      name: 'HomeRP',
      component: PRHomeView
    }, {
      path: 'HomeSetting',
      name: 'HomeSettingRP',
      component: PRHomeSettingView
    }]
  }
]

export default new Router({
  routes
})
