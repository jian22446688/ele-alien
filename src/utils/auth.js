import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const SE_TOKEN_KEY = 'se_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 * 获取Se_巡查系统 token
 */
export function getSeToken() {
  return Cookies.get(SE_TOKEN_KEY)
}

export function setStToken(token) {
  Cookies.set(SE_TOKEN_KEY, token)
}

export function removeSeToken() {
  Cookies.remove(SE_TOKEN_KEY)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
