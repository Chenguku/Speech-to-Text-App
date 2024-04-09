<template>
    <h1>Login</h1>
    <div class="textinput">
    <p>Username:</p>
    <input type="text" id="username">
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

    async function handleLogin(){
        let userText = document.getElementById("username")
        let passwordText = document.getElementById("password")

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
            router.push('/')
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
</style>