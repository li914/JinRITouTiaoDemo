// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.css';
import './assets/css/news-content.css';

import $ from 'jquery';

import _global from './tools/GlobalEvn';

import store from './store/store'

Vue.config.productionTip = false;
// Vue.use(store);
Vue.prototype.global=_global;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
