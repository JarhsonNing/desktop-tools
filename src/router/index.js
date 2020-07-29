import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import playerRouter from './player'
import todolistRouter from './todolist'
import loginRouter from './login'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  ...playerRouter,
  ...todolistRouter,
  ...loginRouter,
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

// 路由跳转规则
router.beforeEach(async (to, from, next) => {
  to.query.redirect = from.path
  if (to.path === '/login') {
    const token = localStorage.getItem('token') || ''
    if (token) {
      if (store.state.user.userinfo.id) {
        next({ path: to.query.redirect || '/' })
      } else {
        try {
          await store.dispatch('fetchUserInfo')
          next({ path: to.query.redirect || '/' })
        } catch (error) {
          next()
        }
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
