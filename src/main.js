import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'


Vue.config.productionTip = false

//注册全局组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router, //注册路由器 ==> 所有组件都可以直接访问两个对象:$router,$route
  store, //注册vuex ==> 所有组件都可以直接访问$store对象
}).$mount('#app')
