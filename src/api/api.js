import axios from 'axios'

const api = axios.create({
//  baseURL: 'https://api-wfeedme.herokuapp.com'
  baseURL: 'http://localhost:1337'
})

export default api
