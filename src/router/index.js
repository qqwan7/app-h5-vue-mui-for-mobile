import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import {lang} from '@/common/utils/utils'
import {i18n} from '@/i18n'

import Layout from '@/components/layout/layout'
import meetingList from '@/views/meeting/list'
import Page2 from '@/views/page2/page2'
import MeetingDetail from '@/views/meeting/meetingDetail'
import InviteParticipant from '@/views/schedule/inviteParticipant'

Vue.use(Router)
i18n.locale = lang()

const routerMap = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        component: Layout,
        name: '',
        redirect: '/meeting/list',
        hidden: true,
        meta: { menuId: 'meetingList' },
        children: [
            {
                path: '/meeting/list',
                component: meetingList,
                name: 'meetingList',
                meta: { menuId: 'meetingList', authority: [] }
            },
            {
                path: '/page2',
                component: Page2,
                name: 'page2',
                meta: { menuId: 'page2', authority: [] }
            }
        ]
    },
    {
        path: '/meeting/detail',
        name: 'meetingDetail',
        component: MeetingDetail
    },
    {
        path: '/meeting/invite',
        name: 'inviteParticipant',
        component: InviteParticipant
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
        if (localStorage.getItem('token_account')) {
            if (to.path === '/login') {
                next({path: '/meeting/list'}) // 已有tab登录，直接跳转首页
            } else {
                // 判断当前用户是否已拉取完routers信息
                next()
            }
        } else {
            next('/login')
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
