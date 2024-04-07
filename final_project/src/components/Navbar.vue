<script setup>
import { ref } from 'vue'
const props = defineProps({
    username: String,
})
</script>

<template>
    <div class="nav">
        <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Create an Account</li>
            <li id="user">{{ username || "Please sign in" }}</li>
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
  padding: 2%;
  transition: background-color 0.3s;
}

#user {
    float:right;
}
#user:hover{
    background-color: #333;
}

.nav{
    padding-bottom: 20px;
}

li:hover{
    background-color: black;
}

</style>