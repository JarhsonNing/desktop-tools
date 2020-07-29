<template>
  <div class="user__home">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ userinfo.username || '尚未登陆' }}</div>
          <div class="md-subhead" v-if="userinfo.created_music_list">一共创建了{{ userinfo.created_music_list.length }}个歌单</div>
          <div class="md-subhead" @click="login" v-else>点击登录</div>
        </md-card-header-text>

        <md-card-media>
          <img v-if="userinfo.avatar" :src="userinfo.avatar" alt="People" />
          <img v-else @click="login" src="@/assets/images/login.png" alt="People" />
        </md-card-media>
      </md-card-header>
    </md-card>
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
      }
    },
    mounted() {
      console.log(this.$store.state.user)
      console.log(this.userinfo)
    }
  }
</script>

<style lang="scss" scoped>
  .user__home {
    display: block;
  }
</style>
