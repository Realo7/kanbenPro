import axios from '@/utils/request';

// 用户登录
export function login(data) {
  return axios({
    url: '/login',
    method: 'post',
    data,
  });
}

// 获取用户信息
export function getInfo() {
  return axios({
    url: '/user/info',
    method: 'get',
  });
}

// 获取审核人, 用于申请绩效时审核
export function listAuditors() {
  return axios({
    url: '/user/getAuditors',
    method: 'get',
  });
}
