import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'home1',
            component: Index,
            redirect: '/index',
            children: [{
                path: '/index',
                name: 'index',
                component: Index
            }]

        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./pages/home.vue')
        },
        {
            path: '/appointment/:level',
            name: 'appointment',
            component: () => import('./pages/appointment.vue'),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/detail/:dId/:docId',
            name: 'detail',
            component: () => import('./pages/AppointDetail.vue')
        },
        {
            path: '/scheduling',
            name: 'scheduling',
            component: () => import('./pages/scheduling.vue')
        },
        {
            path: '/userCenter',
            component: () => import('./pages/userCenter.vue')
        },
        {
            path: '/introduction',
            component: () => import('./pages/introduction.vue')
        },
        {
            path: '/history',
            component: () => import('./pages/history.vue')
        },
        {
            path: '/docdetail',
            component: () => import('./pages/docDetail.vue')
        },
        {
            path: '/login',
            component: () => import('./pages/login.vue')
        }

    ]
})


export default router