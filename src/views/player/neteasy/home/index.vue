<template>
  <div class="neteast-home">
    <div class="header">
      <md-toolbar class="md-accent">
        <h3 class="md-title" style="flex:1;text-align:left">网易云音乐</h3>
        <md-button class="md-icon-button" @click="goSearch">
          <i class="fa fa-search"></i>
        </md-button>
      </md-toolbar>
    </div>
    <div class="body">
      <md-tabs md-alignment="centered">
        <md-tab id="tab-home" md-label="发现"></md-tab>
        <md-tab id="tab-pages" md-label="我的"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'playerNeteasyHome',
    methods: {
      goSearch() {
        this.$router.push({ name: 'playerNeteasySearch' })
      }
    }
  }
</script>

<style lang="scss" scoped></style>
