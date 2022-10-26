/**
 * 用户登录,退出,身份相关store
* */
import { toLogin, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  userInfo: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_INFO: (state, token) => {
    state.userInfo = token
  }
}

const actions = {
  // user login
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      toLogin(params).then(data => {
        if (data.code === 200) {
          commit('SET_TOKEN', data.data)
          setToken(data.data)
        }
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(data => {
        if (!data) {
          reject('用户信息获取失败,请重新登录')
        }
        commit('SET_USER_INFO', data.data)
        resolve(data.data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // toLogout(state.token).then(() => {
      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', {})
      removeToken()
      resetRouter()
      resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

