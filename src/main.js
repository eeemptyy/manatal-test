
import Vue from 'vue'; import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';
import store from './store';
import './filters/index';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>',
});
