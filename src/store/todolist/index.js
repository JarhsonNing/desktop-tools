import * as func from './function.js';
import actions from './actions.js'
import mutations from './mutations.js' 
import getters from './getters.js' 

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
  export default {
    state,
    mutations,
    actions,
    getters
  }
  