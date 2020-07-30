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
      usernameMsg(){
        return {
          'md-invalid': this.usernameInvalid
        }
      },
      pwdMsg(){
        return {
          'md-invalid': this.pwdInvalid
        }
      },
      pwdCMsg(){
        return {
          'md-invalid': this.pwdCInvalid
        }
      },
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
          const { userid } = await signup(this.userinfo);
          if(userid){
            this.isloginPage = true;
          }
        }catch (err) {
          console.log(err);
          this.showDialog = true;
          this.dialogTxt = err.message;
        }
      },
      async login(){
        this.resetFormValidate();
        if(!this.isloginPage){
          this.isloginPage = true;
          return;
        }
        let isValid = this.formValidate();
        if(!isValid)return;
        try {
          const { token } = await login(this.userinfo)
          localStorage.setItem('token', token)
          const userinfo = await getUserInfo()
          this.$store.commit('SET_USER_INFO', userinfo);
          this.showDialog = true;
          this.dialogTxt ='登陆成功';
          this.dialogTimer = setTimeout(this.closeDialog,1000)
        } catch (error) {
          console.log(error)
        }
      },
      resetFormValidate(){
        this.usernameInvalid = this.pwdInvalid = this.pwdCInvalid = false;
        this.pwdtxt = '请输入密码';
        this.pwdCtxt = '请再次确认密码';
      },
      formValidate(){
        let isValid = true;
        if(!this.userinfo.username.length || this.userinfo.username.length == 0){
          this.usernameInvalid = true;
          isValid = false;
        }
        if(!this.userinfo.password.length || this.userinfo.password.length == 0){
          this.pwdInvalid = true;
          this.pwdtxt = '请输入密码';
          isValid = false;
        }
        if(this.isloginPage){
          if(isValid)return true;
          return false;
        }else {
          if(!this.userinfo.passwordC.length || this.userinfo.passwordC.length == 0){
            this.pwdCInvalid = true;
            this.pwdCtxt = '请再次确认密码';
            this.isValid = false;
          }
          if(this.userinfo.password!=this.userinfo.passwordC){
            this.pwdInvalid = true;
            this.pwdCInvalid = true;
            this.pwdtxt = this.pwdCtxt = '两次密码输入不一致';
            this.isValid = false;
          }
          if(isValid)return true;
          return false;
        }
      },
      closeDialog(){
        if(this.dialogTimer){
          clearTimeout(this.dialogTimer);
        }
        this.showDialog = false;
        this.redirect();
      }
    }
  }
</script>
