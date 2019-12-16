import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/reset.scss'
import './assets/style/transition.scss'
import 'default-passive-events' // fix: warning Added non-passive event listener to a scroll-blocking 'mousewheel' event
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'large' })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
