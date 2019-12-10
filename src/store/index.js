import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    identify: 'teacher', // 用户身份
    privilege: 0 // 用户权限 0 学生 1 教师 2 游客
  },
  mutations: {
    'SET_IDENTIFY': (state, newIdentify) => {
      state.identify = newIdentify
    }
  },
  actions: {
    setIdentify({ commit }, newIdentify) {
      return commit('SET_IDENTIFY', newIdentify)
    }
  },
  modules: {
  }
})
