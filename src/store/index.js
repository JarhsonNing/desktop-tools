import Vue from 'vue'
import Vuex from 'vuex'
import player from './player'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    player,
    user
  }
})
