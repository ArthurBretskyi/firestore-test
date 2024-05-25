import { createStore } from 'vuex'
import todolist from './modules/todolist'
import auth from './modules/auth'

export default createStore({
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { todolist, auth },
})
