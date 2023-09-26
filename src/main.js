import Vue from 'vue';
import axios from './api/axiosPlugin';

import App from './App';
import router from './router';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import '@/assets/scss/common.scss';

Vue.use(axios);
Vue.use(ViewUI);

Vue.config.productionTip = false;

localStorage.setItem('theme-color', '#41b883'); // 主题色
localStorage.setItem('theme-font-color', '#258a5d'); // 主题色
localStorage.setItem('theme-border-color', '#eaeaea'); // 主题色
localStorage.setItem('theme-color-rgba', 'rgba(65,184,131,0.05)'); // 主题色

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
