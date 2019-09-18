import axios from 'axios';
// import {showFullScreenLoading, tryHideFullScreenLoading} from './loading'
// import router from '../router'
// import { Toast } from 'vant'
// Toast.allowMultiple()
// function toastBox (msg = '请求失败') {
//   let toast = Toast.fail({
//     message: msg,
//     duration: 0
//   })
//   setTimeout(() => {
//     toast.clear()
//   }, 1500)
// }
let http = axios.create({
  // baseURL: '/api/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  transformRequest: [function (data) {
    return data;
  }]
});
http.defaults.timeout = 15000;
http.interceptors.request.use(function (config) {
  let openId = sessionStorage.getItem('openid');
  if (openId) config.headers.openId = openId;
  return config;
}, function (error) {
  return Promise.reject(error);
});
http.interceptors.response.use(function (response) {
  // if (response.config.showLoading) {
  // tryHideFullScreenLoading();
  // }
  let code = response.data.errcode;
  if (code === 0) {
    return response;
  } else {
    return response;
  }
}, function () {
  // toastBox()
  // tryHideFullScreenLoading()
  // router.push({path: '/error'})
});
export default http;
