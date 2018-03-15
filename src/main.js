// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueAnalytics from 'vue-analytics';
import Meta from 'vue-meta';

import App from './App';
import router from './router';
import { getStore } from './store';

Vue.use(Vuex);
Vue.use(Meta);
Vue.use(VueAnalytics, {
  id: 'UA-111575152-2',
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: getStore(),
  components: { App },
  template: '<App/>',
});
