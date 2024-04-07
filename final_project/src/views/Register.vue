<template>
    <h1>Create an account</h1>
    <div class="textinput">
    <p>Username:</p>
    <input type="text">
    </div>
    <div class="textinput">
    <p>Password:</p>
    <input type="text">
    </div>
    <button id="register">Create Account</button>
    <div class="hasaccount">
    <label>Already have an account? </label><router-link to='/login'>Login</router-link>
    </div>
</template>


<style>
    /* Refer to Login.vue */
</style>