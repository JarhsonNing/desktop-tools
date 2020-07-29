<template>
  <div class="login">
    <h2>Login</h2>
    <div class="info-wrapper">
      <md-field>
        <label>用户名</label>
        <md-input v-model="userinfo.username"></md-input>
      </md-field>
      <md-field>
        <label>密码</label>
        <md-input v-model="userinfo.password"></md-input>
      </md-field>
      <div class="btn-wrapper">
        <md-button class="md-raised md-primary" style="margin-top:20px" @click="tosignup">登陆</md-button>
        <md-button class="md-raised" style="margin-top:20px;margin-left:20px" @click="tosignup">去注册</md-button>        
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from '@/api/login'
  import { getUserInfo } from '@/api/user'
  export default {
    name: 'login',
    data() {
      return {
        userinfo: {
          username: '',
          password: ''
        }
      }
    },
    mounted() {

    },
    methods: {
    tosignup(){

    },
     async login(){
        try {
          const { token } = await login(this.userinfo)
          localStorage.setItem('token', token)
          const userinfo = await getUserInfo()
          this.$store.commit('SET_USER_INFO', userinfo)
        } catch (error) {
          console.log(error)
        }
      }
    },


  }
</script>
<style lang="scss" scoped>
.login {
  margin-top: 50px;
  .info-wrapper {
    width: 500px;
    margin:50px auto;
  }
}

</style>
