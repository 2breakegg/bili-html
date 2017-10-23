import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!111'
  },
  render: h => h(App)
})