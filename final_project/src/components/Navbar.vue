<script setup>
import { ref } from 'vue'
const props = defineProps({
    username: String,
})
</script>

<template>
    <div class="nav">
        <ul>
            <li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/login'>Login</router-link></li>
            <li><router-link to='/register'>Register</router-link></li>
            <li id="user">{{ username || "Not Logged In" }}</li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
  float: left;
  color: white;
}

a {
    display: block;
    color: white;
    transition: background-color 0.3s;
    text-align: center;
    padding: 18px 24px;
    text-decoration: none;
}

.router-link-active{
    background-color: #04AA6D;
}

#user {
    padding: 16px 24px;
    float:right;
}

.nav{
    padding-bottom: 20px;
}

li a:hover:not(#user, .router-link-active){
    background-color: black;
}

</style>