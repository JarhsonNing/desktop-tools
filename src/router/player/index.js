const playerHome = () =>
  import(/* webpackChunkName:'player' */ '@/views/player/home')

export default [
  {
    path: '/player/home',
    name: 'playerHome',
    component: playerHome
  }
]
