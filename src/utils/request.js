import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use(
  (req) => {
    const rew = req;
    rew.headers.token = sessionStorage.getItem('token'); // 请求头部添加token
    return rew;
  },
  (error) => Promise.reject(error),
);
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.response.data);
    console.log(`err:${error}`); // for debug
    this.$toast(error);
    return Promise.reject(error);
  },
);

export default axios;
