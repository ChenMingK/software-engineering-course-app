import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    privilege: localStorage.getItem('privilege'), // 用户权限 0 / 1 / 2 管理员，学生，老师
    // 与身份相关信息，登录后返回，用于后续操作
    topicId: 0,
    teamId: 0,
    id: 0,
    projectId: 0,
    number: '' // 用户号
  },
  mutations: {
    'SET_PRIVILEGE': (state, newPrivilege) => {
      state.privilege = newPrivilege
      localStorage.setItem('privilege', newPrivilege) // 存储到本地
    },
    'SET_TOPICID': (state, newTopicId) => {
      state.topicId = newTopicId
      localStorage.setItem('topicId', newTopicId)
    },
    'SET_TEAMID': (state, newTeamId) => {
      state.teamId = newTeamId
      localStorage.setItem('teamId', newTeamId)
    },
    'SET_ID': (state, newId) => {
      state.id = newId
      localStorage.setItem('id', newId)
    },
    'SET_PROJECTID': (state, newProjectId) => {
      state.projectId = newProjectId
      localStorage.setItem('projectId', newProjectId)
    },
    'SET_NUMBER': (state, newNumber) => {
      state.number = newNumber
      localStorage.setItem('number', newNumber)
    }
  },
  actions: {
    setPrivilege({ commit }, newPrivilege) {
      return commit('SET_PRIVILEGE', newPrivilege)
    },
    setTopicId({ commit }, newTopicId) {
      return commit('SET_TOPICID', newTopicId)
    },
    setTeamId({ commit }, newTeamId) {
      return commit('SET_TEAMID', newTeamId)
    },
    setId({ commit }, newId) {
      return commit('SET_ID', newId)
    },
    setProjectId({ commit }, newProjectId) {
      return commit('SET_PROJECTID', newProjectId)
    },
    setNumber({ commit }, newNumber) {
      return commit('SET_NUMBER', newNumber)
    }
  },
  modules: {
  }
})
