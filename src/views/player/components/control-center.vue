<template>
  <div ref="test" class="control">
    <audio
      ref="audio"
      :src="musicUrl"
      preload="auto"
      @canplaythrough="audioCanPlayThrough"
      @ended="audioEnded"
      @error="audioError"
      @play="isPaused = false"
      @pause="isPaused = true"
      @seeking="audioSeeking"
      @timeupdate="audioTimeUpdate"
    ></audio>
    <md-progress-bar
      class="progress"
      md-mode="buffer"
      :md-buffer="audioBuffered"
      :md-value="playProgress"
      v-clickChangeProgress
    ></md-progress-bar>
    <md-toolbar
      style="justify-content: center; min-height:56px "
      class="md-accent"
    >
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
        <md-button class="md-icon-button prev" @click="nextMusic">
          <i class="fa fa-step-backward"></i>
        </md-button>
        <!-- 暂停/播放 -->
        <md-button class="md-icon-button">
          <i
            v-if="isPaused"
            class="fa fa-play-circle play"
            @click="playMusic"
          ></i>
          <i v-else class="fa fa-pause-circle pause" @click="pauseMusic"></i>
        </md-button>
        <!-- 下一曲 -->
        <md-button class="md-icon-button next" @click="nextMusic">
          <i class="fa fa-step-forward"></i>
        </md-button>
        <span>{{ currentTimeString }}/{{ time }}</span>
      </div>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'controlCenter',
    data() {
      return {
        canPlay: false,
        isPaused: true,
        time: '0:00',
        currentTime: 0,
        interval: null
      }
    },
    mounted() {
      console.dir(this.audio)
    },
    watch: {
      mode: {
        handler(mode) {
          if (mode === 'circle') {
            this.audio.loop = true
          } else {
            this.audio.loop = false
          }
        }
      },
      '$store.state.player.customPlayTime': {
        // 监听用户点击进度条事件
        deep: true,
        handler(val) {
          this.pauseMusic()
          this.playProgress = val
          this.audio.currentTime = (this.audio.duration * val) / 100
          this.playMusic()
        }
      }
    },
    computed: {
      currentTimeString() {
        // 当前时间的时间格式
        let m = Math.floor(this.currentTime / 60)
        let s =
          Math.floor(this.currentTime % 60) < 10
            ? `0${Math.floor(this.currentTime % 60)}`
            : Math.floor(this.currentTime % 60)
        return m + ':' + s
      },
      autoPlay: {
        // 是否自动播放
        get() {
          return Number(this.$route.query.autoPlay) || 0
        },
        set(v) {
          this.$router.replace({
            query: {
              autoPlay: v ? 1 : 0
            }
          })
        }
      },

      // 播放模式
      mode: {
        get() {
          return this.$store.state.player.mode
        },
        set(val) {
          this.$store.commit('SET_MODE', val)
        }
      },
      // 音乐播放进度
      playProgress: {
        get() {
          return this.$store.state.player.playProgress
        },
        set(val) {
          this.$store.commit('SET_PLAY_PROGESS', val)
        }
      },
      // 音乐缓存
      audioBuffered: {
        get() {
          return this.$store.state.player.audioBuffered
        },
        set(val) {
          this.$store.commit('SET_AUDIO_BUFFERED', val)
        }
      },
      // 音乐列表
      musicList: {
        get() {
          return this.$store.state.player.playList
        },
        set(val) {
          this.$store.commit('SET_PLAY_LIST', val)
        }
      },
      // 当前的音乐index
      currentIndex: {
        get() {
          return this.$store.state.player.currentIndex
        },
        set(val) {
          this.$store.commit('SET_CURRENT_INDEX', val)
          console.log('音乐切换')
          this.playMusic()
        }
      },
      // 音频dom
      audio() {
        return this.$refs.audio
      },
      musicUrl() {
        if (this.musicList && this.musicList[this.currentIndex]) {
          return this.musicList[this.currentIndex].url
        } else {
          return ''
        }
      }
    },
    methods: {
      test(name) {
        console.log(name)
      },
      audioTimeUpdate(e) {
        this.currentTime = this.audio.currentTime || this.currentTime
        if (this.audio.duration > 0) {
          this.playProgress =
            (this.audio.currentTime / this.audio.duration) * 100
        }
        if (this.audio.buffered.length > 0) {
          this.audioBuffered =
            (this.audio.buffered.end(0) / this.audio.duration) * 100
        }
      },
      audioSeeking(e) {
        console.log(event)
      },
      audioError() {
        this.canPlay = false
        // this.nextMusic()
      },
      audioEnded() {
        this.canPlay = false
        this.nextMusic()
      },
      audioCanPlayThrough() {
        this.canPlay = true
        this.time =
          Math.floor(this.audio.duration / 60) +
          ':' +
          Math.floor(this.audio.duration % 60)
        if (this.autoPlay) {
          this.audio.play()
        }
      },
      playMusic() {
        this.autoPlay = true
        if (this.canPlay) {
          this.audio.play()
        }
      },
      pauseMusic() {
        this.audio.pause()
      },
      nextMusic() {
        switch (this.mode) {
          case 'random':
            //  如果是随机
            this.currentIndex = Number.parseInt(
              Math.random() * this.musicList.length
            )
            break
          case 'retweet':
            // 循环播放
            this.$store.commit('ADD_CURRENT_INDEX')
            break
          case 'circle':
            this.audio.currentTime = 0
            break
          default:
            break
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .control {
    .progress {
      cursor: pointer;
      transition: height 0.5s 1s;

      &:hover {
        height: 10px;
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
