import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import myDirective from './plugins/directive'
import mixins from './mixins'
import '@/assets/css/all.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
Vue.use(myDirective)
Vue.use(mixins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
