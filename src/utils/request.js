import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getSeToken } from '@/utils/auth'
import { SE_ADMIN_LOGOUT, BASE_SEURL } from '@/api/fixed-link'

// 配置服务器Url
// const baseUrl = process.env.NODE_ENV === 'development'
//   ? process.env.VUE_APP_BASE_API : window.location.protocol + '//' + window.location.host + BASE_SEURL // api 的 base_url

  // 配置服务器Url
const baseUrl = 'https://easy-mock.com/mock/5d156c837202e446ab26fb90/api'

// 定义错误代码
const tipCode4 = [40001, 40002, 40003]
const tipCode5 = [403, 500, 50000, 50001]
const tipCode6 = [60001]
const errorCode5 = [5001]

const Tip = msg => {
  Message({ message: msg, type: 'error' })
}
const TipConfirm = msg => {
  MessageBox.confirm(msg, '确定登出',
    {
      confirmButtonText: '重新登录',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    location.href = SE_ADMIN_LOGOUT
    // store.dispatch('FedLogOut').then(() => {
    //   location.reload() // 为了重新实例化vue-router对象 避免bug
    // })
  })
}

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  baseURL: baseUrl,
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 让每个请求携带自定义token 请根据实际情况自行修改
    if (store.getters.seToken) {
      config.headers['token'] = getSeToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // code为非20000是抛错, 可结合自己业务进行修改
    const res = response.data
    // 为了兼容SE系统中的接口
    if (res.code === 'undefined') res.code = 1
    if (res.code === 200) res.code = 1
    if (res.code !== 1) {
      if (tipCode4.includes(res.code)) { Message('请求出错了，请重试') }
      if (tipCode5.includes(res.code)) { Tip('服务器异常') }
      if (tipCode6.includes(res.code)) { Tip('重复的数据,请重试') }

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      // res.code === 50008 || res.code === 50012 || res.code === 50014 ||
      if (errorCode5.includes(res.code)) {
        TipConfirm('用户信息验证失败')
      }
      return Promise.reject('request error')
    } else {
      return response.data
    }
  },
  error => {
    // error 是一个错误实体类
    console.log(error) // for debug
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
