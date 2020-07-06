const todolistHome = () =>
    import('@/views/todolist/home')

export default [
    {
        path: '/todolist/home',
        name: 'todolist',
        component: todolistHome
    }
]