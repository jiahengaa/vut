import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  data: {
    eventHub: new Vue()
  },
  router
}).$mount('#app')
