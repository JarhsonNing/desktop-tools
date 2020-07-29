<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/player/neteasy">player</router-link>｜
    <router-link to="/todolist/home">todolist</router-link>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home'
  }
</script>
