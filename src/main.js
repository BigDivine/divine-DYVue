import Vue from 'vue'
import axios from './api/axiosPlugin';

import App from './App'
import router from './router'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import '@/assets/scss/common.scss';

Vue.use(axios);
Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
