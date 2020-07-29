import store from '../store'

export default {
  install(Vue, options) {
    Vue.directive('clickChangeProgress', {
      bind(el, binding, vnode, oldVnode) {
        el.onclick = function(e) {
          if (store.state.player.audioBuffered) {
            let percent = (e.offsetX / el.offsetWidth) * 100
            store.commit('SET_CUSTOM_PLAY_TIME', percent)
          } else {
            return
          }
        }
      }
    })
  }
}
