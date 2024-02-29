import { createRouter, createWebHistory } from 'vue-router'
import GiftyView from '../views/GiftyView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import LoginView from '../views/LoginView.vue'
import SearchUserView from '../views/SearchUserView.vue'
import LogoutView from '../views/LogoutView.vue'
import CreatePersonView from '../views/CreatePersonView.vue'
import ModifyPersonView from '../views/ModifyPersonView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import CreateIdeaView from '../views/CreateIdeaView.vue'
import GetIdeasView from '../views/GetIdeasView.vue'

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
            path: '/create_person',
            name: 'createPerson',
            component: CreatePersonView
        },
        {
            path: '/modify_person/:id',
            name: 'modifyPerson',
            component: ModifyPersonView
        },
        {
            path: '/create_idea/',
            name: 'createIdea',
            component: CreateIdeaView
        },
        {
            path: '/me',
            name: 'userInfo',
            component: UserInfoView
        },
        {
            path: '/person/:id/ideas',
            name: 'getIdeasFor',
            component: GetIdeasView
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutView
        }
    ]
})

export default router
