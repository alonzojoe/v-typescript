import { Person } from './../types/Types';
import { createStore } from "vuex";
import { RootState, SetPersonsPayload, Person } from "../types/Types";
import api from "../api/index"

const store = createStore<RootState>({
    state: {
        data: {
            persons: []
        }
    },
    mutations: {
        setPersons: (state: RootState, payload: SetPersonsPayload) => {
            state.data.persons = payload
        }
    },
    actions: {
        async fetchPersons({ commit }) {
            api.get('users').then((data) => {
                commit('setPersons', data)
            })
            const response = await api.get<Person[]>('users')
            const data = response.data
            commit('setPersons', data)
        }
    },
    getters: {
        getPersons: (state: RootState) => state.data.persons
    }
})

export default store