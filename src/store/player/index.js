const state = {
  playList: [],
  currentIndex: 0,
  playProgress: 10
}

const mutations = {
  ADD_PLAY_LIST({}, {}) {},
  SET_PLAY_PROGESS(state, progress) {
    state.playProgress = progress
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions
}
