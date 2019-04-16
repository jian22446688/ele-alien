import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// import CAlien from './index'

import './index.js'

import { CButtonTip, CConfirmBox } from './index'

console.log(CButtonTip)

Vue.use(CButtonTip)
Vue.use(CConfirmBox)

new Vue({
  render: h => h(App),
}).$mount('#app')
