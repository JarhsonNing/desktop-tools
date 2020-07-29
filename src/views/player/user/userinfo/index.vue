<template>
  <div class="userinfo">
    <md-toolbar class="md-accent">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="$router.go(-1)">
            <i class="fa fa-arrow-left"></i>
          </md-button>
        </div>

        <span>用户信息</span>
      </div>
    </md-toolbar>
    <div class="header">
      <div class="avatar">
        <input type="file" name="avatar" class="avatar__input" ref="avatar_uploader" @change="avatarChange" />
        <img :src="avatarBase64 || userinfo.avatar" style="object-fit: cover;" class="avatar__preview" alt="" />
      </div>
    </div>
    <div class="form">
      <md-field>
        <label>昵称</label>
        <md-input v-model="userinfo.nickname"></md-input>
      </md-field>

      <md-field>
        <label>用户名</label>
        <md-input v-model="userinfo.username" readonly></md-input>
      </md-field>

      <div class="md-inset">
        <md-button class="md-accent" @click="canChangePassword = !canChangePassword">修改密码</md-button>
      </div>
    </div>

    <md-dialog :md-active.sync="canChangePassword">
      <md-dialog-title>修改密码</md-dialog-title>

      <div style="padding:0 20px">
        <md-field>
          <label>密码</label>
          <md-input v-model="password.password" type="password" required></md-input>
        </md-field>
        <md-field>
          <label>确认密码</label>
          <md-input v-model="password.repassword" type="password" required></md-input>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-primary" @click="canChangePassword = false">Close</md-button>
        <md-button class="md-primary" @click="changePassword">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'userinfo',
    data() {
      return {
        avatarBase64: '',
        password: {
          password: '',
          repassword: ''
        },
        canChangePassword: false
      }
    },
    computed: {
      avatar_uploader() {
        return this.$refs.avatar_uploader
      },
      filereader() {
        let fr = new FileReader()
        fr.onload = () => {
          this.avatarBase64 = fr.result
        }
        return fr
      },
      userinfo() {
        return this.$store.state.user.userinfo
      }
    },
    mounted() {
      if (!this.userinfo.avatar) {
        this.$store.dispatch('fetchUserInfo')
      } else {
        console.log(userinfo)
      }
    },
    methods: {
      avatarChange() {
        this.filereader.readAsDataURL(this.avatar_uploader.files[0])
      },
      changePassword() {
        //todo 修改密码
        this.canChangePassword = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userinfo {
    .header {
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        margin: 20px;
        width: 100px;
        height: 100px;
        position: relative;
        &__input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
          z-index: 0;
        }
        &__preview {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: -1;
          cursor: pointer;
        }
      }
    }
    .form {
      margin: 0 20px;
    }
  }
  .md-dialog ::v-deep.md-dialog-container {
    min-width: 500px;
  }
</style>
