import axios from '@/plugins/axios'

const login = userinfo => {
  console.log('login')
 return axios.post('login', userinfo)}
const signup = userinfo => axios.post('user/register',userinfo)
export { login,signup }
