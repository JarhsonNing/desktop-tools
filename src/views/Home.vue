<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="postMsg($event)">123</button>
    <router-link to="/player/neteasy">player</router-link>｜
    <router-link to="/todolist/home">todolist</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        app: {
          coupon_item: {
            coupon_id: 1,
            coupon_value: 10
          }
        }
      }
    },
    methods: {
      postMsg(e) {
        console.log(e)
        // window.parent.fefzfdsa()
        // window.parent.postMessage(JSON.stringify(this.app), '*')
      }
    }
  }
</script>
