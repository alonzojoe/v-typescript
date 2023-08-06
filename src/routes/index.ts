import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../components/DefaultView.vue'


const routes = [
    {
        path: '/',
        component: DefaultView,
        children: [
            {
                path: '/',
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