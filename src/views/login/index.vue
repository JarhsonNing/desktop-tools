<template>
  <div class="login">123</div>
</template>

<script>
  import { login } from '@/api/login'
  import { getUserInfo } from '@/api/user'
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
    async mounted() {
      try {
        const { token } = await login(this.userinfo)
        localStorage.setItem('token', token)
        const userinfo = await getUserInfo()
        this.$store.commit('SET_USER_INFO', userinfo)
      } catch (error) {
        console.log(error)
      }
    },
    methods: {}
  }
</script>
