import { getUserInfo } from '@/api/user'
const state = {
  userinfo: {}
}

const mutations = {
  SET_USER_INFO(state, userinfo) {
    state.userinfo = userinfo
  }
}
const actions = {
  async fetchUserInfo({ commit }) {
    try {
      const userinfo = await getUserInfo()
      commit('SET_USER_INFO', userinfo)
      return
    } catch (error) {
      Promise.reject(error)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
