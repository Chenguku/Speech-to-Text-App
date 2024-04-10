<template>
    <h1>Create an account</h1>
    <div class="textinput">
    <p>Username:</p>
    <input type="text" id = "username">
    </div>
    <div class="hasaccount" id="notice">
        <p v-if="failedRegister">Username is already taken</p>
    </div>
    <div class="textinput">
    <p>Password:</p>
    <input type="text" id="password">
    </div>
    <button class="signin" @click="handleRegistration">Create Account</button>
    <div class="hasaccount">
    <label>Already have an account? </label><router-link to='/login'>Login</router-link>
    </div>
</template>

<script setup>
    import router from '../router'
    import { ref } from 'vue'
    const failedRegister = ref(false)
    let authHeader

    async function handleRegistration(){
        let userText = document.getElementById("username").value
        let passwordText = document.getElementById("password").value

        if(userText.value == ''  || passwordText.value == ''){
            console.log('empty information')
            return
        }

        const response = await fetch('http://localhost:3000/register', 
        {
            method: "POST", 
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({"userID": userText, "password": passwordText})
        })
        const registration = await response.json()
        console.log(registration)
        authHeader = 'Basic ' + registration.userID
        if(registration.success){
            authHeader = userText + ':' + password
            this.$root.loggedIn(userText)
            router.push('/')
        }
        else{
            failedRegister.value = true
        }
    }
</script>

<style>
    /* Refer to Login.vue */
</style>