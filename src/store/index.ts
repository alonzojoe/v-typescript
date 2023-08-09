import { Person } from './../types/Types';
import { createStore } from "vuex";
import { RootState, Person, SetPersonsPayload } from "../types/Types";
import api from "../api/index"

const store = createStore<RootState>({
    state: {
        data: {
            persons: [],
            personProfile: {}
        }
    },
    mutations: {
        setPersons: (state: RootState, payload: SetPersonsPayload) => {
            state.data.persons = payload
        },

        setPersonprofile: (state: any, payload: object) => {
            state.data.personProfile = payload
        },

        clearProfile: (state: any) => {
            state.data.personProfile = {}
        }
    },
    actions: {
        async fetchPersons({ commit }) {
            const response = await api.get<Person[]>('user?limit=20')
            const data = response.data.data
            commit('setPersons', data)
        },

        async viewProfile({commit}, id: string) {
            const response = await api.get<Person>(`user/${id}`)
            const data = response.data
            commit('setPersonprofile', data)
        }
    },
    getters: {
        getPersons: (state: RootState) => state.data.persons,
        getPersonProfile: (state: any) => state.data.personProfile
    }
})

export default store