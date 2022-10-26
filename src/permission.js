import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { simplePath } from '@/utils/index'
import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['Login'] // 白名单

router.beforeEach(async(to, from, next) => {
  // /url/ => /url
  const path = simplePath(to.path)
  // 确定用户是否已登录
  const token = getToken()
  console.log(to)
  if (token) {
    if (path === '/login') {
      // 如果已登录，则重定向到主页
      next({ path: '/' })
    } else {
      // 判断用户信息是否完整
      const { id } = store.getters.userInfo
      if (id) {
        next()
      } else {
        try {
          // 重新获取用户信息
          await store.dispatch('user/getInfo')
          next({ ...to, replace: true })
        } catch (error) {
          // 重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${path}`)
        }
      }
    }
  } else {
    // 白名单内直接进入
    if (whiteList.includes(to.name)) {
      console.log(1)
      next()
    } else {
      // 没有访问权限重定向到登录页
      next(`/login?redirect=${path}`)
    }
  }
})
