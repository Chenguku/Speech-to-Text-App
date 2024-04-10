<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
const authHeader = ref('')
const currentUser = ref('')

function loggedIn(username, password){
  console.log('logged in!')
  currentUser.value = username
  authHeader.value = username + ':' + password
}
</script>

<template>
  <Navbar :username="currentUser" />
  <div>
    <a id="" target="_blank">
      <img src="./assets/mic-icon.svg" class="icon" alt="Icon" />
    </a>
  </div>
  <router-view @signIn="loggedIn" :authHeader="authHeader"></router-view>
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
