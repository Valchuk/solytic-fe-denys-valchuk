import './class-component-hooks';

import Vue from 'vue';
import VueFormulate from '@braid/vue-formulate';
import VModal from 'vue-js-modal';

import App from './App.vue';
import store from './store';
import router from './router';
import apolloProvider from './apollo';
import './style.sass';

Vue.use(VueFormulate);
Vue.use(VModal, { dialog: true });

Vue.config.productionTip = false;

new Vue({
  store,
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount('#app');
