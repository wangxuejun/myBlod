import axios from 'axios';
import { $showLoading, $closeLoading } from './loading';
import { Message } from 'iview';
let http = axios.create({
  baseURL: '/api',
  withCredentials: false, // 表示跨域请求时是否需要使用凭证
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    return data;
  }]
});
http.interceptors.request.use(function (config) {
  $showLoading();
  let token = localStorage.getItem('token');
  if (token) config.headers.token = token;
  return config;
}, function (error) {
  $closeLoading();
  return Promise.reject(error);
});
http.interceptors.response.use(function (response) {
  $closeLoading();
  let code = response.data.code;
  if (code === 0) {
    return response.data;
  } else {
    Message.error(response.data.msg);
    return response.data;
  }
}, function () {
  $closeLoading();
});
export default http;
