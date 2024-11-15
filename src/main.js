import 'babel-polyfill'; // 注意:这条引入要在 import Vue from ‘vue’ 之前
// import Es6Promise from 'es6-promise';

import Vue from 'vue';
import ViewUI from 'view-design';
import VXETable from 'vxe-table';

import '@/assets/theme/view-design-theme.less';
import '@/assets/theme/vxe-table-theme.scss';

import router from './router';
import store from './store';
import { request } from './api/axiosPlugin';

import App from './App';
import CommonComponents from '@/components/common/index.js';
// 高级的ES6语法兼容处理
// Es6Promise.polyfill();

Vue.use(VXETable);
Vue.use(ViewUI);

const componentKeys = Object.keys(CommonComponents);
componentKeys.forEach((key) => {
  Vue.component(key, CommonComponents[key]);
});

// Vue.config.productionTip = false;

Vue.prototype.$http = request;
// 高德地图web服务key：账号（rjdnyzl@163.com）
Vue.prototype.AMapKey = '8a181b3e412a152de0b51e9be8886c37';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
