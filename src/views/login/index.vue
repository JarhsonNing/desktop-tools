<template>
  <div class="login">
    <h2>{{isloginPage?'登陆':'注册'}}</h2>
    <div class="signup-info-wrapper">
      <md-field md-clearable :class="usernameMsg">
        <label>用户名</label>
        <md-input v-model="userinfo.username" required></md-input>
        <span class="md-error">请输入用户名</span>
      </md-field>
      <md-field :class="pwdMsg">
        <label>密码</label>
        <md-input v-model="userinfo.password" type="password" required></md-input>
        <span class="md-error">{{pwdtxt}}</span>
      </md-field>
      <md-field :md-toggle-password="true" :class="pwdCMsg" v-show="!isloginPage">
        <label>确认密码</label>
        <md-input v-model="userinfo.passwordC" type="password" required></md-input>
        <span class="md-error">{{pwdCtxt}}</span>
      </md-field>
    </div>
    <div class="btn-wrapper">
        <md-button class="md-raised md-primary" @click="login" :class="['login-btn',{'active':isloginPage}]">登陆</md-button>
        <md-button class="md-raised" @click="signup" :class="['signup-btn',{'active':!isloginPage}]">注册</md-button>        
    </div>
    <md-dialog-alert
      :md-active.sync="showDialog"
      :md-content="dialogTxt"
      @md-confirm ="closeDialog"
      md-confirm-text="COOL!"  />
  </div>
</template>

<script>
  import { login, signup } from '@/api/login'
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
        isloginPage: true,
        usernameInvalid: false,
        pwdInvalid:false,
        pwdCInvalid:false,
        pwdtxt:'请输入密码',
        pwdCtxt:'请再次确认密码',
        showDialog:false,
        dialogTxt:'',
        dialogTimer:''
      }
    },
<<<<<<< HEAD
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
=======
    computed:{
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
    },
    methods: {
      async signup(){
        this.resetFormValidate();
        if(this.isloginPage){
          this.isloginPage = false;
          return;
        }
        let isValid = this.formValidate();
        if(!isValid)return;
        //注册：
        try {
          const { userid } = await signup(this.userinfo);
          if(userid){
            console.log('注册成功');
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
>>>>>>> dev/YiField
        try {
          const { token } = await login(this.userinfo)
          localStorage.setItem('token', token)
          const userinfo = await getUserInfo()
<<<<<<< HEAD
          this.$store.commit('SET_USER_INFO', userinfo)
          this.$router.push(this.redirect)
        } catch (error) {
          console.log(error)
        }
      }
    }
=======
          this.$store.commit('SET_USER_INFO', userinfo);
          this.showDialog = true;
          this.dialogTxt ='登陆成功';
          this.dialogTimer = setTimeout(()=>{
            this.showDialog = false;
            this.$router.push('/')      
          },1000)
        } catch (error) {
          console.log(error)
          this.showDialog = true;
          this.dialogTxt = error.message;
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
        this.$router.push('/')      
      }
  },


>>>>>>> dev/YiField
  }
</script>
<style lang="scss" scoped>
.login {
  margin-top: 50px;
  .login-info-wrapper ,.signup-info-wrapper{
    width: 500px;
    margin:50px auto;
  }
  .btn-wrapper {
    margin-top: 20px;
    position: relative;
    .login-btn {
      &.active {
        // position: absolute;
      }
    }
    .signup-btn {
      &.active {
        // position: absolute;
      }
    }
  }
}

</style>
