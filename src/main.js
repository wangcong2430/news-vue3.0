import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css'
createApp(App).use(router).use(store).use(Vant).mount('#app')
