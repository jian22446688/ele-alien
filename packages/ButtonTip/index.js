import ButtonTip from './src/main'

ButtonTip.install = function(Vue) {
  Vue.component(ButtonTip.name, ButtonTip);
};

export default ButtonTip;
