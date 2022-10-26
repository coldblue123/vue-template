import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission' // 路由拦截器

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
