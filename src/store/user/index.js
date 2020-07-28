import { getUserInfo } from '@/api/user'
const state = {
  userinfo: {}
}

const mutations = {
  SET_USER_INFO(state, userinfo) {
    state.userinfo = userinfo
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions
}
