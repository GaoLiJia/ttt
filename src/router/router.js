import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../views/home/home';
import type from '../views/type/type';
import shopCar from '../views/shopCar/shop';
import mine from '../views/mine/mine';
import position from '../views/mine/position';
import rewritePosition from '../views/mine/rewritePosition';
import search from '../views/home/search/search.vue';
import goodMsg from '../views/home/goodMsg/goodMsg.vue';
import login from '../views/login/login';
import register from '../views/register/register';
import index from '../views/index/index';

import { getCookies } from '../utils/utils';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/index',
        component: index,
        children: [
            {
                path: 'search',
                component: search,
                name: 'search'
            },
            {
                path: 'home',
                component: home,
                name: 'home'
            },
            {
                path: 'type',
                component: type,
                name: 'type'
            },
            {
                path: 'shopCar',
                component: shopCar,
                name: 'shopCar'
            },
            {
                path: 'mine',
                component: mine,
                name: 'mine',
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'position',
                component: position,
                name: 'position'
            },
            {
                path: 'rewritePosition',
                component: rewritePosition,
                name: 'rewritePosition'
            }
        ]
    },
    {
        path: '/goodMsg',
        component: goodMsg,
        name: 'goodMsg'
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    },
    {
        path: '/register',
        component: register,
        name: 'register'
    }
];
const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to.name)
    if (to.matched.some(record => record.meta.requireAuth)) {
        let token = getCookies('token');
        if (!token) {
            next({name: 'login', query: {from: to.name}})
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router;