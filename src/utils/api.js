import http from './axios';
function config (url, params, method = 'GET') {
  return {
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? JSON.stringify(params) : null,
    params: method === 'GET' || method === 'DELETE' ? params : null
  };
}
// 注册
export function apiRegister (params, callback) {
  http(config('/user/register', params, 'POST')).then(res => {
    if (typeof callback === 'function') callback(res);
  });
}
// 登录
export function apiLogin (params, callback) {
  http(config('/user/login', params, 'POST')).then(res => {
    if (typeof callback === 'function') callback(res);
  });
}
