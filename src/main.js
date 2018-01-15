import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import './fonts/iconfont.css';
import axios from './http/axios.js';
import './assets/css/swiper.min.css';
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
Vue.use(Mint);
import message from './plugins/message';
Vue.use(message)
import loading from './plugins/loading';
Vue.use(loading);

import store from './store/store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
