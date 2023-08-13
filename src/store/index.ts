import { Person } from './../types/Types';
import { createStore } from "vuex";
import { RootState, Person, SetPersonsPayload } from "../types/Types";
import api from "../api/index"
import moment from 'moment';

const store = createStore<RootState>({
    state: {
        data: {
            persons: [],
            personProfile: {},
            personPosts: [],
            posts: [],
            postComments: [],
            postsByTags: [],
        }
    },
    mutations: {
        setPersons: (state: RootState, payload: SetPersonsPayload) => {
            state.data.persons = payload.data
        },

        setPersonprofile: (state: any, payload: object) => {
            state.data.personProfile = payload.data
        },

        clearProfile: (state: any) => {
            state.data.personProfile = {}
        },

        setPersonPosts: (state: any, payload: any) => {
            state.data.personPosts = payload.data.map((p) => {
                return {
                    ...p,
                    publishDate: moment(p.publishDate).format('MMMM D YYYY, h:mm:ss a')
                }
            })
        },

        setPostEmpty: (state: any) => {
            state.data.posts = []
        },

        setPostComments: (state: any, payload: any) => {
            state.data.postComments = payload.data.map((c) => {
                return {
                    ...c,
                    publishDate: moment(c.publishDate).format('MMMM D YYYY, h:mm:ss a')
                }
            })
        },

        setPosts: (state: any, payload: any) => {
            state.data.personPosts = payload.data.map((p) => {
                return {
                    ...p,
                    publishDate: moment(p.publishDate).format('MMMM D YYYY, h:mm:ss a')
                }
            })
        },

        setPostsBytags: (state: any, payload: any) => {
            state.data.postsByTags = payload.data.map((p) => {
                return {
                    ...p,
                    publishDate: moment(p.publishDate).format('MMMM D YYYY, h:mm:ss a')
                }
            })
        },

        setPostsByTagEmpty: (state: any) => {
            state.data.postsByTags = []
        }
    },
    actions: {
        async fetchPersons({ commit }) {
            const response = await api.get<Person[]>('user?limit=20')
            const data = response.data
            commit('setPersons', data)
        },

        async viewProfile({commit}, id: string) {
            const response = await api.get<Person>(`user/${id}`)
            const data = response
            commit('setPersonprofile', data)
        },

        async fetchPersonPosts({commit}, id: string) {
            const response = await api.get(`user/${id}/post?limit=10`)
            const data = response.data
            commit('setPersonPosts', data)
        },

        async fetchPosts({commit}) {
            const response = await api.get(`post?limit=100`)
            const data = response.data
            commit('setPosts', data)
        },

        async fetchPostComments({commit}, id: string) {
            const response = await api.get(`post/${id}/comment?limit=100`)
            const data = response.data
            commit('setPostComments', data)
        },

        async fetchPostByTag({commit}, tag: string) {
            const response = await api.get(`tag/${tag}/post?limit=100`)
            const data = response.data
            commit('setPostsBytags', data)
        }
    },
    getters: {
        getPersons: (state: RootState) => state.data.persons,
        getPersonProfile: (state: any) => state.data.personProfile,
        getPersonPosts: (state: any) => state.data.personPosts,
        getPosts: (state: any) => state.data.posts,
        getPostComments: (state: any) => state.data.postComments,
        getPostByTag: (state: any) => state.data.postsByTags,
    }
})

export default store