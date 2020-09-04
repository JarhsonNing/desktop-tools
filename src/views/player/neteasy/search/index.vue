<template>
  <div class="neteasy-search">
    <div class="header">
      <md-toolbar class="md-accent">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="goBack">
              <i class="fa fa-arrow-left"></i>
            </md-button>
          </div>

          <md-autocomplete
            v-model="searchValue"
            :md-options="suggest"
            :mdOpenOnFocus="false"
            :mdFuzzySearch="false"
            @md-changed="handleValueChanged"
            @md-selected="handleMusicSelected"
          >
            <label><i class="fa fa-search">搜索</i></label>
            <!-- <template #md-autocomplete-item="{ item }">
              {{ item }}
            </template> -->
          </md-autocomplete>
        </div>
      </md-toolbar>
      <md-progress-bar
        v-if="showLoading"
        class="md-accent"
        md-mode="indeterminate"
      ></md-progress-bar>
    </div>
    <template v-for="music in searchMusicList">
      <searchItem :musicinfo="music" @play-music="playMusic" :key="music.id" />
      <md-divider :key="music.id + 'divider'"></md-divider>
    </template>
  </div>
</template>
<script>
  import { search, canMusicPlay, getMusicUrl } from '@/api/netEase'
  import searchItem from './musicItem'
  export default {
    name: 'playerNeteasySearch',
    components: {
      searchItem
    },
    data() {
      return {
        searchValue: '',
        suggest: [],
        showLoading: false,
        isSearching: false,
        searchMusicList: []
      }
    },
    methods: {
      async fetchSongs(keywords) {
        let data = await search(keywords)
        if (data && data.songs) {
          return data.songs
        } else {
          return []
        }
      },
      async handleValueChanged(val) {
        if (this.isSearching) return
        this.isSearching = true
        this.suggest = [val]
        let songs = await this.fetchSongs(val)
        this.isSearching = false
        this.suggest = this.suggest.concat(
          ...songs.map(
            i => i.name + ' - ' + i.artists.map(i => i.name).join('/')
          )
        )
      },
      async handleMusicSelected(keywords) {
        this.searchMusicList = await this.fetchSongs(keywords.split('——')[0])
      },
      async playMusic(musicinfo) {
        let { success, message } = await canMusicPlay(musicinfo.id)
        if (success) {
          let musicList = await getMusicUrl(musicinfo.id)
          let playList = this.$store.state.player.playList
          playList.splice(
            this.$store.state.player.currentIndex + 1,
            0,
            ...musicList
          )
          this.$store.commit('SET_PLAY_LIAT', playList)
          this.$store.commit('ADD_CURRENT_INDEX')
        }
      }
    }
  }
</script>
