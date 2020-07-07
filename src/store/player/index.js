const state = {
  playList: [
    {
      src:
        'https://rl01-sycdn.kuwo.cn/cbb7db6086ae6461272b3c6e4245981d/5f02f4ef/resource/n1/89/4/4251029656.mp3'
    },
    {
      src:
        'https://webfs.yun.kugou.com/202007071446/02a433e1c818d71e8871581852c13eca/part/0/960083/G185/M0B/0C/13/-Q0DAF5Nfl-AGwcXADaWAFwMkd8892.mp3'
    }
  ],
  currentIndex: 1,
  audioBuffered: 0,
  mode: 'random',
  playProgress: 0,
  customPlayTime: 0
}

const mutations = {
  ADD_PLAY_LIST({}, {}) {},
  SET_PLAY_PROGESS(state, progress) {
    state.playProgress = progress
  },
  SET_PLAY_LIAT(state, list) {
    state.playList = list
  },
  SET_CUSTOM_PLAY_TIME(state, percent) {
    state.customPlayTime = percent
  },
  SET_CURRENT_INDEX(state, index) {
    state.currentIndex = index
  },
  ADD_CURRENT_INDEX(state) {
    let index = state.currentIndex + 1
    if (index === state.playList.length) {
      state.currentIndex = 0
    } else {
      state.currentIndex = index
    }
  },
  SET_AUDIO_BUFFERED(state, val) {
    state.audioBuffered = val
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions
}
