/* eslint-disable */
import Axios from 'axios'

let Config = {
  axiosTimeout: 90000
}
export const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: Config.axiosTimeout
})

// 在发送请求之前
axios.interceptors.request.use((config) => {
  // 附加token信息
  if (sessionStorage.token) {
    config.headers.Authorization = sessionStorage.token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  if (error.response && error.response.status && error.response.status === 401) {
    return
  } else {
    return Promise.reject(error)
  }
})

export default {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })
  }
}
