import { createStore } from "vuex";

import api from "../api/index"

const store = createStore({
    state: {
        data: {
            persons: []
        }
    },
    mutations: {
        setPersons: (state: any, payload: any) => {
            state.data.persons = payload
        }
    },
    actions: {
        async fetchPersons({commit}) {
            api.get('users').then((data) => {
                commit('setPersons', data)
            })
        }
    },
    getters: {
        getPersons: (state: any) => state.data.persons
    }
})

export default store