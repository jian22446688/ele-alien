/* 
 * @Author: Cary 
 * @Date: 2019-04-15 17:46:17 
 * @Last Modified by: Cary
 * @Last Modified time: 2019-04-16 09:41:28
 */

import ConfirmBox from './src/main'

ConfirmBox.install = (Vue, opt={}) => {
  console.log('a', Vue)
  Vue.prototype.$cConfrimBox = ConfirmBox.confirmBox
}

export default ConfirmBox