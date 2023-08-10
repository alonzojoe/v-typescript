import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../components/DefaultView.vue'


const routes = [
    {
        path: '/',
        component: DefaultView,
        children: [
            {
                path: '/',
                name: 'landing',
                component: () => import('../views/Landing.vue')
            },
            {
                path: '/persons',
                name: 'persons',
                component: () => import('../views/PersonsPage.vue')
            },
            {
                path: '/profile/:id',
                name: 'profile',
                component: () => import ('../views/ViewProfile.vue')
            },
            {
                path: '/posts/:id',
                name: 'posts',
                component: () => import('../views/PersonPosts.vue')
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;