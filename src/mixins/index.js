export default {
  install(Vue, options) {
    Vue.mixin({
      methods: {
        goBack() {
          this.$router.go(-1)
        },
        routerPush(path) {
          this.$router.push(path)
        }
      }
    })
  }
}
