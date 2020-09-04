<template>
  <div class="music-item" @click="$emit('play-music', musicinfo)">
    <div class="img">
      <img :src="musicinfo.album.artist.img1v1Url" alt="" />
    </div>
    <div class="music-item-info">
      <div class="music-item-name">
        {{ musicinfo.name }}
      </div>
      <div class="music-item-album-name">
        专辑名：{{ musicinfo.album.name }}
      </div>
      <div class="music-item-artists-name">
        演唱者：{{ musicinfo.artists | dealArtists }}
      </div>
    </div>
    <div class="operation">
      <i class="fa fa-play-circle"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NetEasySearchMusicItem',
    props: {
      musicinfo: Object
    },
    filters: {
      dealArtists(artists) {
        if (artists) {
          return artists.map(i => i.name).join('/')
        } else {
          return ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .music-item {
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px 10px;
    font-size: 12px;
    display: flex;

    .img {
      width: 50px;
      height: 60px;
      padding: 5px 0;
      margin-right: 10px;
      flex-basis: 50px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .operation {
      flex-basis: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &-info {
      width: 250px;
      overflow: hidden;
      flex: 1;
      flex-basis: 250px;
    }
    &-name {
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
