<template>
  <div class="phone">
    <div class="screen">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="bottom-bar">
      <md-bottom-bar class="md-accent" md-type="shift" :md-sync-route="true">
        <md-bottom-bar-item
          id="bottom-bar-item-home"
          md-label="网易云"
          to="/player/home"
          md-icon="/assets/svg/neteasy.svg"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          id="bottom-bar-item-pages"
          md-label="酷狗"
          to="/player/kugou"
          md-icon="/assets/svg/kugou.svg"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          id="bottom-bar-item-posts"
          md-label="用户中心"
          to="/player/user"
          md-icon="/assets/svg/user.svg"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'phone',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .phone {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .screen {
      flex: 1;
      overflow: auto;
    }
    .bottom-bar {
      flex-basis: 56px;
    }
  }
</style>
