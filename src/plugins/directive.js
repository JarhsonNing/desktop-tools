import store from '../store'

export default {
  install(Vue, options) {
    Vue.directive('clickChangeProgress', {
      bind(el, binding, vnode, oldVnode) {
        el.onclick = function(e) {
          store.commit('SET_PLAY_PROGESS', (e.offsetX / el.offsetWidth) * 100)
        }
      }
    })
  }
}
