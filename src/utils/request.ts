import axios from 'axios'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const service = axios.create({
  baseURL: baseUrl,
  timeout: 120000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.debug(error) // for debug
    return Promise.reject(error)
  }
)

export default service
