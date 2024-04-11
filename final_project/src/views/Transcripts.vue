<template>
    <h1 v-if="authHeader">{{authHeader.split(':')[0]}}'s Transcripts</h1>
    <h1 v-else>Login to Access Transcripts</h1>
    <div id="transcripts"></div>
</template>

<script setup>
    import { ref } from 'vue'
    const props = defineProps({
        authHeader: String
    })
    let authHeader = props.authHeader

    async function getTranscripts(){
        console.log(authHeader)
        const response = await fetch('http://localhost:3000/api', 
        {
            method: "GET", 
            headers: {"Content-Type": 'application/json', "Authorization": authHeader},
        })
        let transcipts = await response.json()
        console.log(transcipts)
    }
    if(authHeader){
        getTranscripts()
    }
</script>