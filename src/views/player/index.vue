<template>
  <div class="player-home">
    <div class="body">
      <div class="app">
        <phone></phone>
      </div>
      <div class="info">
        <div class="music-info"></div>
        <div class="control">
          <controlCenter />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import phone from '@/views/player/components/pnone'
  import controlCenter from '@/views/player/components/control-center'
  export default {
    name: 'playerHome',
    components: {
      phone,
      controlCenter
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
        border-left: 1px solid rgba($color: #000000, $alpha: 0.1);
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        .music-info {
          flex: 1;
        }
        .control {
          flex-basis: 56px;
        }
      }
    }
  }
</style>
