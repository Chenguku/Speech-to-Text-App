<template>
    <h1>Create an account</h1>
    <div class="textinput">
    <p>Username:</p>
    <input type="text" id = "username">
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

    function handleRegistration(){
        let userText = document.getElementById("username")
        let passwordText = document.getElementById("password")
        if(userText.value != ''  && passwordText.value != ''){
            return router.push('/')
        }
    }
</script>

<style>
    /* Refer to Login.vue */
</style>