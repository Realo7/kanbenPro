import { createStore } from 'vuex';
import { login, getInfo } from '@/api/user';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    async dduserlogin(authCode) {
      login();
    },
    async getuserInfo() {
      getInfo();
    },
  },
  modules: {
  },
});
