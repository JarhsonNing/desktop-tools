<template>
  <div class="login">
    <h2>{{isloginPage?'登陆':'注册'}}</h2>
    <div class="login-info-wrapper" v-show="isloginPage">
      <md-field>
        <label>用户名</label>
        <md-input v-model="userinfo.username"></md-input>
      </md-field>
      <md-field>
        <label>密码</label>
        <md-input v-model="userinfo.password"></md-input>
      </md-field>
    </div>
    <div class="signup-info-wrapper" v-show="!isloginPage">
      <md-field md-clearable>
        <label>用户名</label>
        <md-input v-model="userinfo.username"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>密码</label>
        <md-input v-model="userinfo.password" type="password"></md-input>
      </md-field>
      <md-field :md-toggle-password="true">
      <label>Password field without toggle</label>
      <md-input v-model="userinfo.passwordC" type="password"></md-input>
    </md-field>
    </div>
    <div class="btn-wrapper">
        <md-button class="md-raised md-primary" style="margin-top:20px" @click="login">登陆</md-button>
        <md-button class="md-raised" style="margin-top:20px;margin-left:20px" @click="tosignup">去注册</md-button>        
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
          password: '',
          passwordC: ''
        },
        isloginPage:false
      }
    },
    mounted() {

    },
    methods: {
      tosignup(){
        this.isloginPage = false;
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
  .login-info-wrapper ,.signup-info-wrapper{
    width: 500px;
    margin:50px auto;
  }
}

</style>
