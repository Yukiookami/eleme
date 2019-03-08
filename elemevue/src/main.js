import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import startPage from './page/startScreen'
import homePage from './page/elemeHome'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: startPage, name: 'startPage'},
    {path: '/elemeHome', component: homePage, name: 'homePage'}
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
