import Vue from 'vue';
import axios from './api/axiosPlugin';

import App from './App';
import router from './router';

import ViewUI from 'view-design';
import VXETable from 'vxe-table';

import '@/assets/theme/view-design-theme.less';
import '@/assets/theme/vxe-table-theme.scss';

Vue.use(VXETable);
Vue.use(axios);
Vue.use(ViewUI);

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
