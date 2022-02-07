import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "@/assets/css/reset.css"

import installComponent from "@/plugins/installComponent.js"
Vue.use(installComponent);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import api from '@/api/index'
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
