import axios from '@/plugins/axios'

const login = userinfo => axios.post('login', userinfo)
export { login }
