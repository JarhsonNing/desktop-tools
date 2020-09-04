<template>
  <div class="neteasylogin md-accent">
    <!-- <md-card>
      <md-field>
        <label>手机号</label>
        <md-input v-model="loginInfo.phone"></md-input>
      </md-field>
      <md-field>
        <label>登录密码</label>
        <md-input type="password" v-model="loginInfo.password"></md-input>
      </md-field>
    </md-card> -->
    <div class="operation">
      <md-button class="md-raised btn btn-red">手机密码登陆</md-button>
      <md-button class="md-raised btn btn-red">手机验证码登陆</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'neteasyLogin',
    data() {
      return {
        loginInfo: {
          phone: '',
          password: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .neteasylogin {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--md-theme-default-accent, #ff5252);

    .md-card {
      width: 320px;
      padding: 20px;
    }

    .operation {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .btn {
        width: 66%;
        margin: 5px auto;
        border-radius: 20px;
        border: none;
        font-weight: 400;

        &-red {
          color: var(--md-theme-default-accent, #ff5252) !important;
        }
      }
    }
  }
</style>
