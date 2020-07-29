import Vue from 'vue'
import Vuex from 'vuex'
import player from './player'
import todolist from './todolist'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    player,
    todolist,
    user
  }
})
