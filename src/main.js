import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// import CAlien from './index'

import './index.js'

import { CButtonTip } from './index'

console.log(CButtonTip)

Vue.use(CButtonTip)

new Vue({
  render: h => h(App),
}).$mount('#app')
