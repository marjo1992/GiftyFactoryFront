import { createRouter, createWebHistory } from 'vue-router'
import GiftyView from '../views/GiftyView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import LoginView from '../views/LoginView.vue'
import SearchUserView from '../views/SearchUserView.vue'
import LogoutView from '../views/LogoutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'gifty',
            component: GiftyView
        },
        {
            path: '/create_user',
            name: 'createUser',
            component: CreateUserView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/search_user',
            name: 'searchUser',
            component: SearchUserView
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutView
        }
    ]
})

export default router
