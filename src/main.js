import 'babel-polyfill'; // 注意:这条引入要在 import Vue from ‘vue’ 之前
// import Es6Promise from 'es6-promise';

import Vue from 'vue';
import ViewUI from 'view-design';
import VXETable from 'vxe-table';

// import '@/assets/theme/dy.less';
import '@/assets/theme/view-design-theme.less';
import '@/assets/theme/vxe-table-theme.scss';

// import Carousel3d from 'vue-carousel-3d';

import router from './router';
import { request } from './api/axiosPlugin';

import App from './App';
import CommonComponents from '@/components/common/index.js';
// 高级的ES6语法兼容处理
// Es6Promise.polyfill();

Vue.use(VXETable);
Vue.use(ViewUI);
// Vue.use(Carousel3d);

const componentKeys = Object.keys(CommonComponents);
componentKeys.forEach((key) => {
  Vue.component(key, CommonComponents[key]);
});

Vue.config.productionTip = false;

Vue.prototype.$http = request;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
