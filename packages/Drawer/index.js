import Drawer from './src/main.vue'

Drawer.install = (Vue, opt = {}) => {
  Vue.component(Drawer.name, Drawer)
}
export default Drawer
