<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'
import router from './router'
const authHeader = ref('')
const currentUser = ref('')
const isRecording = ref(false)

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.interimResults = true

function loggedIn(username, password) {
  console.log('logged in!')
  currentUser.value = username
  authHeader.value = username + ':' + password
}

function record(){
  router.push('/')
  isRecording.value = true

  let texts = document.querySelector('.texts')
  let p = document.createElement('p')

  recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('')
    p.innerText = text
    texts.appendChild(p)

    if(e.results[0].isFinal){
      p = document.createElement('p')
    }
  })

  recognition.start()
}

function saveRecord(){
  console.log(document.getElementById('textDiv').innerText)
  isRecording.value = false
  recognition.stop()
}
</script>

<template>
  <Navbar :username="currentUser" :authHeader="authHeader"/>
  <div>
    <a id="record" @click="record">
      <img src="./assets/mic-icon.svg" class="icon" alt="Icon" />
    </a>
  </div>
  <router-view @signIn="loggedIn" @stopRecord="stopRecord" :isRecording="isRecording" :authHeader="authHeader"></router-view>
  <div class="texts" id="textDiv"></div>
  <button v-if="isRecording" @click="saveRecord" id="save">Save</button>
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
