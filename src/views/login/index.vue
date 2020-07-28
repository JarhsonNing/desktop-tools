<template>
  <div class="login"></div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        userinfo: {
          username: 'ningwenjun',
          password: 'ningwenjun'
        }
      }
    },
    mounted() {
      // console.log(login)
      this.login().then(({ token }) => {
        localStorage.setItem('token', token)
        this.getUserInfo()
          .then(userinfo => {
            console.log(userinfo)
          })
          .catch(e => {
            console.log(e.message)
          })
      })
    },
    methods: {
      login() {
        return this.$axios.post('/login', this.userinfo)
      },
      getUserInfo() {
        return this.$axios.get('user/info')
      }
    }
  }
</script>
