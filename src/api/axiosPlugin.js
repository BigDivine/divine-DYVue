/* eslint-disable */
import Axios from 'axios';
let Config = {
  axiosTimeout: 90000,
};
export const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
  },
  timeout: Config.axiosTimeout,
});

// 在发送请求之前
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 返回状态判断
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function request(method, url, params) {
  let headers;
  if (typeof params === 'string') {
    headers = { 'Content-Type': 'application/json;charset=UTF-8' };
  } else if (params instanceof FormData) {
    headers = { 'Content-Type': 'multipart/form-data' };
  } else {
    headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  }
  headers['Authorization'] = sessionStorage.token;
  let promise;
  if (method === 'get') {
    promise = axios.get(url, { params, headers });
  }
  if (method === 'post') {
    promise = axios.post(url, params, { headers });
  }

  return new Promise((resolve) => {
    promise.then(
      (res) => {
        console.log('apiUtils-res', res);
        resolve(res);
      },
      (error) => {
        console.log('apiUtils-error', error);
        resolve(error.response);
      }
    );
  });
}
