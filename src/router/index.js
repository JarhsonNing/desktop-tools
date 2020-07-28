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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    redirect: '/about'
  }
]

const router = new VueRouter({
  routes
})

// 路由跳转规则
// router.beforeEach(async (to, from, next) => {
//   // const token = localStorage.getItem('token') || ''
//   // if (token) {
//   //   if(store.state.user.userinfo.id){
//   //     next()
//   //   }else{
//   //     try {
//   //       store.dispatch('getInfo')
//   //       next()
//   //     } catch (error) {
//   //     }
//   //   }
//   // } else {
//   // }
// })

export default router
