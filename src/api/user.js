import request from '@/utils/request'

/**
 * 用户相关api操作
 * 传参数post用data   get 用 params
 */
export function toLogin(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/auth/userInfo',
    method: 'post',
    data
  })
}

export function toLogout() {
  return request({
    url: '/auth/login',
    method: 'delete'
  })
}
