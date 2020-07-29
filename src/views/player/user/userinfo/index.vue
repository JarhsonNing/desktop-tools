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

      <md-field v-if="canChangePassword">
        <label>密码</label>
        <md-input v-model="password.password" type="password" required></md-input>
      </md-field>
      <md-field v-if="canChangePassword">
        <label>确认密码</label>
        <md-input v-model="password.repassword" type="password" required></md-input>
      </md-field>

      <div class="md-inset">
        <md-button class="md-accent" @click="canChangePassword = !canChangePassword">修改密码</md-button>
      </div>
    </div>
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
        console.dir(this.avatar_uploader.files[0])
        this.filereader.readAsDataURL(this.avatar_uploader.files[0])
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
          z-index: 10;
        }
        &__preview {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 9;
          cursor: pointer;
        }
      }
    }
    .form {
      margin: 0 20px;
    }
  }
</style>
