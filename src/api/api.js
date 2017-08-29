import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api-wfeedme.herokuapp.com'
})

export default api
