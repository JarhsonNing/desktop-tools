const MODE = {
  '1': 'circle',
  '2': 'random',
  '3': 'retweet'
}
const state = {
  playList: [
    {
      src: 'https://rl01-sycdn.kuwo.cn/cbb7db6086ae6461272b3c6e4245981d/5f02f4ef/resource/n1/89/4/4251029656.mp3'
    },
    {
      src: 'https://en-sycdn.kuwo.cn/c4c332f79d6c84ce7704db042e30ddfa/5f070246/resource/n3/19/86/1110361533.mp3'
    }
  ],
  currentIndex: 1,
  audioBuffered: 0,
  mode: localStorage.getItem('playmode') || 'retweet',
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
  },
  SET_MODE(state, val) {
    if (Object.values(MODE).includes(val)) {
      state.mode = val
      localStorage.setItem('playmode', val)
    }
  }
}
const actions = {}
export default {
  state,
  mutations,
  actions
}
