import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Transcripts from '../views/Transcripts.vue'

const routes = [{
    path: '/', name:'Home', component : Home
},
{
    path: '/login', name:'Login', component: Login
},
{
    path: '/register', name: 'Register', component: Register
},
{
    path: '/transcripts', name: 'Transcripts', component: Transcripts, props: true
}
]
 
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router