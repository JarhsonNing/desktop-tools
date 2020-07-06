<template>
  <div class="control">
    <md-progress-bar
      class="progress"
      md-mode="determinate"
      :md-value="playProgress"
      v-clickChangeProgress
    ></md-progress-bar>
    <md-toolbar style="justify-content: center" class="md-accent">
      <div class="control-center">
        <!-- 播放模式 -->
        <md-menu md-size="medium" md-direction="top-end">
          <md-button class="md-icon-button" md-menu-trigger>
            <i :class="`fa fa-${mode}`"></i>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="mode = 'circle'">
              <span>单曲循环</span>
              <i class="fa fa-circle"></i>
            </md-menu-item>

            <md-menu-item @click="mode = 'retweet'">
              <span>列表循环</span>
              <i class="fa fa-retweet"></i>
            </md-menu-item>

            <md-menu-item @click="mode = 'random'">
              <span>随机播放</span>
              <i class="fa fa-random"></i>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
        <!-- 上一曲 -->
        <md-button class="md-icon-button prev">
          <i class="fa fa-step-backward"></i>
        </md-button>
        <!-- 暂停/播放 -->
        <md-button class="md-icon-button" @click="status = !status">
          <i v-if="status" class="fa fa-play-circle play"></i>
          <i v-else class="fa fa-pause-circle pause"></i>
        </md-button>
        <!-- 下一曲 -->
        <md-button class="md-icon-button next">
          <i class="fa fa-step-forward"></i>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'controlCenter',
    data() {
      return {
        status: false,
        mode: 'random'
      }
    },
    mounted() {},
    computed: {
      // 音乐播放进度
      playProgress: {
        get() {
          return this.$store.state.player.playProgress
        },
        set(val) {
          this.$store.commit('SET_PLAY_PROGESS', val)
        }
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .control {
    .progress {
      cursor: pointer;
      transition: height 0.5s 1s;

      &:hover {
        height: 24px;
        transition: height 0.5s;
      }
    }
    &-center {
      display: flex;
      justify-content: center;
      align-items: center;

      .prev,
      .next {
        font-size: 16px;
      }

      .play,
      .pause {
        font-size: 36px;
      }
    }
  }
</style>
