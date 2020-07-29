import axios from '@/plugins/axios'
const getUserInfo = () => axios.get('user/info')
export { getUserInfo }
