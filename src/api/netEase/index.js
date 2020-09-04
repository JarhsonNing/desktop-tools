import axios from '@/plugins/axios'

const search = keywords => axios.get('/music/2', { params: { keywords } })
const getMusicUrl = id =>
  axios.get('/music/2/url', {
    params: { id: Array.isArray(id) ? id.join(',') : id }
  })
const canMusicPlay = id =>
  axios.get('/music/2/check', {
    params: { id }
  })
export { search, getMusicUrl, canMusicPlay }
