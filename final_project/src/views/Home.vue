<script setup>
    import router from '../router'
    import { ref, onMounted } from 'vue'
    const isRecording = ref(false)
    const hasRecorded = ref(false)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition()
    recognition.interimResults = true

    let texts
    let p

    onMounted(() => {
      texts = document.querySelector('.texts')
      p = document.createElement('p')

      recognition.addEventListener('result', (e) => {
        const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('')
        p.innerText = text
        texts.appendChild(p)
    
        if(e.results[0].isFinal){
          p = document.createElement('p')
        }
      })
    })

    function record(){
      isRecording.value = true
      hasRecorded.value = true
    
      texts.innerHTML = ''
      p = document.createElement('p')

      recognition.start()
    }

    function stopRecord(){
      isRecording.value = false
      recognition.stop()
    }
    
    function saveRecord(){
      console.log(document.getElementById('textDiv').innerText)
      stopRecord()
    }

    /// Event listeners for WebSpeech testing
    recognition.addEventListener('end', () => {
      isRecording.value = false
      console.log('Recording stopped')
    })
    recognition.addEventListener('error', (e) => {
      console.log('Error occurred in recognition: ' + e.error)
    })
    recognition.addEventListener('speechend', () => {
      console.log('Speech has stopped being detected')
      stopRecord()
    })
    recognition.addEventListener('start', () => {
      console.log('Recording started')
    })
    recognition.addEventListener('audiostart', () => {
      console.log('Audio has started')
    })
</script>


<template>
    <h1>Press to Record and Start Speaking</h1>

  <div>
    <a id="record" @click="record">
      <img src="../assets/mic-icon.svg" class="icon" alt="Icon" />
    </a>
  </div>
  <div class="texts" id="textDiv"></div>
  <button v-if="hasRecorded" @click="saveRecord" id="save">Save</button>
</template>