import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from './auth'

const messageList = [400, 403, 404, 406, 410, 422] // 客户端失败状态码
const reLogin = 401
const isDev = process.env.NODE_ENV === 'development'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()
    token && (config.headers['Token'] = token)
    // config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // 默认情况下直接成功
    // console.log(response)
    return response?.data
  },
  async error => {
    const errCode = error?.response?.status
    if (isDev && messageList.includes(errCode)) {
      Message({
        message: error.response.data?.message,
        type: 'error',
        duration: 3 * 1000
      })
    } else if (errCode === reLogin) {
      try {
        await MessageBox.alert('请重新登录登录过期', '登录过期')
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      } catch (err) {
        console.log(err)
      }
    } else {
      Message({
        message: '出错啦, 请重试~',
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
