import App from './App.vue';
import Vue from 'vue'
import router from './router';

import './custom.scss'


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});