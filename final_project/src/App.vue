<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
import router from './router'
const authHeader = ref('')
const currentUser = ref('')

function loggedIn(username, password) {
  console.log('logged in!')
  currentUser.value = username
  authHeader.value = username + ':' + password
}
</script>

<template>
  <Navbar :username="currentUser" :authHeader="authHeader"/>
  <router-view @signIn="loggedIn" @stopRecord="stopRecord" :isRecording="isRecording" :authHeader="authHeader"></router-view>
</template>

<style>
.icon {
  height: 11em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.icon:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.texts p{
  text-align: left;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 10px;
  padding-left: 1%;
  padding-right: 1%;
  background-color: #04AA6D;
  border-width: 2px;
  color: white;
  font-size: larger;
}
#save{
    margin-top: 5%;
}
</style>
