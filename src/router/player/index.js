const playerLayout = () =>
  import(/* webpackChunkName:'player' */ '@/views/player')

export default [
  {
    path: '/player',
    name: 'player',
    component: playerLayout,
    children: [
      {
        path: 'home',
        name: 'palyerHome',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/About.vue')
      },
      {
        path: 'kugou',
        name: 'playerKugou',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      },
      {
        path: 'user',
        name: 'playerUser',
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/Home.vue')
      }
    ]
  }
]
