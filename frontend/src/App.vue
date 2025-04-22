<template>
  <div id="app">
    <h1>Stretch App</h1>
    <router-view />
  </div>
  <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl">
    Tailwind is working!
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* global styles */
</style>
