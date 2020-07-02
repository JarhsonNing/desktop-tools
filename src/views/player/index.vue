<template>
  <div class="player-home">
    <div class="body">
      <div class="app">
        <phone></phone>
      </div>
      <div class="info"></div>
    </div>
  </div>
</template>

<script>
  import phone from './components/pnone'
  export default {
    name: 'playerHome',
    components: {
      phone
    }
  }
</script>

<style lang="scss" scoped>
  .player-home {
    height: 100vh;
    width: 100vw;
    .body {
      display: flex;
      height: 100%;
      width: 100%;

      .app {
        flex: 0 0 350px;
      }
      .info {
        flex: 1;
      }
    }
  }
</style>
