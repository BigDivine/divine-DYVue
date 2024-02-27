import 'babel-polyfill'; // 注意:这条引入要在 import Vue from ‘vue’ 之前

import Vue from 'vue';
import ViewUI from 'view-design';
import VXETable from 'vxe-table';

import '@/assets/theme/view-design-theme.less';
import '@/assets/theme/vxe-table-theme.scss';

import router from './router';
import {request} from './api/axiosPlugin';

import App from './App';
import DaTreeTable from '@/components/da-tree-table'

Vue.use(VXETable);
Vue.use(ViewUI);
Vue.component("DaTreeTable", DaTreeTable)
Vue.config.productionTip = false;

Vue.prototype.$http=request

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
