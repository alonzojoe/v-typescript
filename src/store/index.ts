import { Person } from './../types/Types';
import { createStore } from "vuex";
import { RootState, Person, SetPersonsPayload } from "../types/Types";
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
            const response = await api.get<Person[]>('user?limit=10')
            const data = response.data.data
            commit('setPersons', data)
        }
    },
    getters: {
        getPersons: (state: RootState) => state.data.persons
    }
})

export default store