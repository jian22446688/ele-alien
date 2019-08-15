/*
 * @Author: Cary
 * @Date: 2019-04-12 08:49:15
 * @Last Modified by: Cary
 * @Last Modified time: 2019-04-14 09:56:24
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(http?:|https?:|mailto:|tel:)/.test(path)
}
