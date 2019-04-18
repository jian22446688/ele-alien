import Drawer from './src/main.vue'

Drawer.install = (Vue, opt = {}) => {
  require('./src/style.scss')
  Vue.component(Drawer.name, Drawer)
}
export default Drawer
