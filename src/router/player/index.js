const playerLayout = () =>
  import(/* webpackChunkName:'player' */ '@/views/player')
const playerNeteasyLayout = () =>
  import(/* webpackChunkName: "playerNeteasy" */ '@/views/player/neteasy')
const playerNeteasyHome = () =>
  import(/* webpackChunkName: "playerNeteasy" */ '@/views/player/neteasy/home')
const playerNeteasySearch = () =>
  import(
    /* webpackChunkName: "playerNeteasy" */ '@/views/player/neteasy/search'
  )
const playerNeteasyLogin = () =>
  import(/* webpackChunkName: "playerNeteasy" */ '@/views/player/neteasy/login')
const playerUserLayout = () =>
  import(/* webpackChunkName: "user" */ '@/views/player/user')
const playerUserHome = () =>
  import(/* webpackChunkName: "playerUser" */ '@/views/player/user/home')
const playerUserUserinfo = () =>
  import(/* webpackChunkName: "playerUser" */ '@/views/player/user/userinfo')

export default [
  {
    path: '/player',
    name: 'player',
    component: playerLayout,
    children: [
      {
        path: 'neteasy',
        name: 'playerNeteasy',
        redirect: '/player/neteasy/home',
        component: playerNeteasyLayout,
        children: [
          {
            path: 'home',
            name: 'playerNeteasyHome',
            component: playerNeteasyHome
          },
          {
            path: 'search',
            name: 'playerNeteasySearch',
            component: playerNeteasySearch
          },
          {
            path: 'login',
            name: 'playerNeteasyLogin',
            component: playerNeteasyLogin
          }
        ]
      },
      {
        path: 'kugou',
        name: 'playerKugou',
        component: () =>
          import(/* webpackChunkName: "playerKugou" */ '@/views/Home.vue')
      },
      {
        path: 'user',
        name: 'playerUser',
        component: playerUserLayout,
        redirect: '/player/user/home',
        children: [
          {
            path: 'home',
            name: 'playerUserHome',
            component: playerUserHome
          },
          {
            path: 'userinfo',
            name: 'playerUserUserinfo',
            component: playerUserUserinfo
          }
        ]
      }
    ]
  }
]
