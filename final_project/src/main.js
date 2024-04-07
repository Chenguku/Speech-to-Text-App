import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/', name:'Home', component : Home
    },
    {
        path: '/login', name:'Login', component: Login
    }
    ]
})

createApp(App).use(router).mount('#app')