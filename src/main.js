import { createApp } from 'vue';
import Vant from 'vant';

import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/index.css';
import 'normalize.css';

createApp(App).use(store).use(router).use(Vant)
  .mount('#app');
