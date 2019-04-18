import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import { CButtonTip, CConfirmBox, CDrawer} from './index'

Vue.use(CButtonTip)
Vue.use(CConfirmBox)
Vue.use(CDrawer)

new Vue({
  render: h => h(App),
}).$mount('#app')
