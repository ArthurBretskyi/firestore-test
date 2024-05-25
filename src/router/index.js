import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoFormView from '../views/ToDoFormView.vue'
import ToDoListView from '../views/ToDoListView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import store from '@/store'
import LoginPageView from '../views/LoginPageView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/to_do_form/:id?',
        name: 'todo-form',
        component: ToDoFormView,
        meta: {
            requiredAuth: true,
        },
    },

    {
        path: '/to_do_list',
        name: 'todo-list',
        component: ToDoListView,
        meta: {
            requiredAuth: true,
        },
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'pageNotFound',
        component: PageNotFoundView,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPageView,
        meta: {
            requiredAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach(async (to) => {
    if (to.meta?.requiredAuth) {
        let isAuthenticated = store.state.auth.user

        if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

        if (!isAuthenticated)
            return {
                name: 'login',
            }
    }
})

export default router
