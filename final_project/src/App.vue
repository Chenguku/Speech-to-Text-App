<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
let str
const currentUser = ref(str)
</script>

<template>
  <Navbar :username="currentUser" />
  <div>
    <a id="" target="_blank">
      <img src="./assets/mic-icon.svg" class="icon" alt="Icon" />
    </a>
  </div>
  <router-view></router-view>
  <!-- <HelloWorld msg="Click to Start" /> -->
</template>

<style scoped>
.icon {
  height: 11em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.icon:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
