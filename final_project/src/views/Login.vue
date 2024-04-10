<template>
    <h1>Login</h1>
    <div class="textinput">
    <p>Username:</p>
    <input type="text" id="username">
    </div>
    <div class="hasaccount" id="notice">
        <p v-if="failedLogin">Username or Password is Incorrect</p>
    </div>
    <div class="textinput">
    <p>Password:</p>
    <input type="text" id="password">
    </div>
    <button class="signin" @click="handleLogin">Login</button>
    <div class="hasaccount">
    <label>Don't have an account? </label><router-link to='/register'>Register</router-link>
    </div>
</template>

<script setup>
    import router from '../router'
    import { ref } from 'vue'
    const emit = defineEmits(['signIn'])
    const failedLogin = ref(false)
    let authHeader

    async function handleLogin(){
        let userText = document.getElementById("username").value
        let passwordText = document.getElementById("password").value

        if(userText.value == ''  || passwordText.value == ''){
            console.log('empty information')
            return
        }

        const response = await fetch('http://localhost:3000/login', 
        {
            method: "POST", 
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({"userID": userText, "password": passwordText})
        })
        const access = await response.json()
        console.log(access)
        if(access.success){
            emit('signIn', userText)
            authHeader = userText + ':' + password
            router.push('/')
        }
        else{
            failedLogin.value = true
        }
    }
</script>


<style>
    .textinput {
        margin-top: 10px;
        font-size: 24px;
        text-align:center;
    }
    input[type="text"]{
        border: none;
        border-radius: 3px;
        padding:10px;
        width: 40%;
        font-size: 0.7em;
    }
    p{
        margin-bottom: 0;
    }
    .signin{
        margin-top: 40px;
        width: 42%;
        font-size: 20px;
    }
    .hasaccount{
        text-align: right;
        margin-right: 30%;
    }
    #notice {
        color: red;
    }
</style>