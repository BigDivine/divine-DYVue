/* eslint-disable */
import Axios from 'axios';

let baseUrl = '';

let Config = {
  axiosTimeout: 90000
};
export const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: Config.axiosTimeout
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

export function request(method, url, params, headers) {
  console.log('request', method, url, params, headers);
  let requestUrl = baseUrl + url;
  let localHeaders;
  if (headers) {
    localHeaders = headers;
  } else {
    if (typeof params === 'string') {
      localHeaders = { 'Content-Type': 'application/json;charset=UTF-8' };
    } else if (params instanceof FormData) {
      localHeaders = { 'Content-Type': 'multipart/form-data' };
    } else {
      localHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
    }
  }

  // localHeaders['Authorization'] = '7c9d0769-cf42-4ccf-871d-dc202115f72f';
  let session_token = localStorage.getItem('session_token');
  if (session_token) {
    let session_token_obj = JSON.parse(atob(session_token));
    let token = session_token_obj[0].token;
    localHeaders['Authorization'] = token;
  }
  let promise;
  if (method === 'get') {
    promise = axios.get(requestUrl, { params, headers: localHeaders });
  }
  if (method === 'delete') {
    promise = axios.delete(requestUrl, { params, headers: localHeaders });
  }
  if (method === 'post') {
    promise = axios.post(requestUrl, params, { headers: localHeaders });
  }
  if (method === 'put') {
    promise = axios.put(requestUrl, params, { headers: localHeaders });
  }
  if (method === 'patch') {
    promise = axios.patch(requestUrl, params, { headers: localHeaders });
  }

  return new Promise((resolve) => {
    promise.then(
      (res) => {
        console.log('apiUtils-success', url, res);
        resolve(res);
      },
      (error) => {
        console.log('apiUtils-failed', url, error);
        resolve(error.response);
      }
    );
  });
}
