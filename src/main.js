import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import router from './router'
// import store from './store

import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
