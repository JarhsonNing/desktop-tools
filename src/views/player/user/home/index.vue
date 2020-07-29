<template>
  <div class="user__home">
    <div class="header">
      <md-toolbar class="md-accent">
        <h3 class="md-title" style="flex:1;text-align:left">用户中心</h3>
      </md-toolbar>
    </div>
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ userinfo.nickname || '尚未登陆' }}</div>
          <div class="md-subhead" v-if="userinfo.created_music_list">一共创建了{{ userinfo.created_music_list.length }}个歌单</div>
          <div class="md-subhead" @click="login" v-else>点击登录</div>
        </md-card-header-text>

        <md-card-media>
          <img v-if="userinfo.avatar" @click="setUserInfo" :src="userinfo.avatar" alt="People" />
          <img v-else @click="login" src="@/assets/images/login.png" alt="People" />
        </md-card-media>
      </md-card-header>
    </md-card>
    <md-list class="md-double-line">
      <md-divider></md-divider>
      <md-list-item>
        <md-icon><i class="fas fa-compact-disc"></i></md-icon>

        <div class="md-list-item-text">
          <span>我的歌单</span>
          <span v-if="userinfo.created_music_list">共{{ userinfo.created_music_list.length + userinfo.like_music_list.length }}</span>
        </div>
      </md-list-item>
      <md-divider></md-divider>
      <md-list-item>
        <md-icon><i class="fas fa-user"></i></md-icon>

        <div class="md-list-item-text">
          <span>我的相关账号</span>
          <span>网易云、酷狗</span>
        </div>
      </md-list-item>
      <md-divider></md-divider>
    </md-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      userinfo() {
        return this.$store.state.user.userinfo || {}
      }
    },
    methods: {
      login() {
        this.$router.push('/login')
      },
      setUserInfo() {
        this.$router.push('/player/user/userinfo')
      }
    },
    mounted() {
      this.$store.dispatch('fetchUserInfo')
    }
  }
</script>

<style lang="scss" scoped>
  .user__home {
    display: block;
  }
</style>
