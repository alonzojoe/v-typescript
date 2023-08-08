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
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;