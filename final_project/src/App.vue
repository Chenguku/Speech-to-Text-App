<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
let str
const pog = ref(str)
</script>

<template>
  <Navbar :username="pog" />
  <div>
    <a id="" target="_blank">
      <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
    </a>
  </div>
  <router-view></router-view>
  <!-- <HelloWorld msg="Click to Start" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
