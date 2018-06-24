import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import router from "./router.js";
import { Pagination } from 'element-ui';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Pagination);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
