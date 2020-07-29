<template>
  <div class="login"><button @click="login">登录</button></div>
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
    computed: {
      redirect() {
        return this.$route.query.redirect || '/'
      }
    },
    async mounted() {
      console.log(this.redirect)
    },
    methods: {
      async login() {
        try {
          const { token } = await login(this.userinfo)
          localStorage.setItem('token', token)
          const userinfo = await getUserInfo()
          this.$store.commit('SET_USER_INFO', userinfo)
          this.$router.push(this.redirect)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>
