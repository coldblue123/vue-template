import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home/index.vue'
Vue.use(VueRouter)

// webpackChunkName 备注打包能保留原文件名打包 + hash 打包
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '后台首页' },
    component: home
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "login" */'@/views/login/index.vue')
  },
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    meta: { title: '重定向页' },
    component: () => import('@/views/redirect/index.vue')
  },
  { path: '*',
    component: () => import(/* webpackChunkName: "404" */'@/views/404.vue')
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

// 重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
