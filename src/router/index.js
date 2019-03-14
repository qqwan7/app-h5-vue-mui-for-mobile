import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/login/login'
import {lang} from '@/common/utils/utils'
import {i18n} from '@/i18n'

import Layout from '@/components/layout/layout'
import Page1 from '@/views/page1/page1'
import Page2 from '@/views/page2/page2'

Vue.use(Router)
i18n.locale = lang()

const routerMap = [
    // {
    //     path: '/',
    //     name: 'login',
    //     component: Login
    // },
    {
        path: '/',
        component: Layout,
        name: '',
        redirect: '/page1',
        hidden: true,
        meta: { menuId: 'page1' },
        children: [
            {
                path: '/page1',
                component: Page1,
                name: 'page1',
                meta: { menuId: 'page1', authority: [] }
            },
            {
                path: '/page2',
                component: Page2,
                name: 'page2',
                meta: { menuId: 'page2', authority: [] }
            }
        ]
    }
]

export const router = new Router({
  // mode: 'history',
  routes: routerMap
})

router.beforeEach((to, from, next) => {
    let pathArr = ['/login']
    if (pathArr.indexOf(to.path) >= 0) {
        next()
    } else {
        if (localStorage.getItem('name')) {
            if (to.path === '/login') {
                next({path: '/statistic'}) // 已有tab登录，直接跳转首页
            } else {
                // 判断当前用户是否已拉取完routers信息
                next()
            }
        } else {
            next()
        }
    }
})

router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g
    const isChunkLoadFailed = error.message.match(pattern)
    if (isChunkLoadFailed) {
        location.reload()
    }
})
