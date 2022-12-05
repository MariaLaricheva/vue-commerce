import {createWebHistory, createRouter } from 'vue-router'
import vCatalogue from '../components/v-catalogue'
import vCart from '../components/v-cart'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'catalogue',
            component: vCatalogue
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        }
    ]
})

export default router;