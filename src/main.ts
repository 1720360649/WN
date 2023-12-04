import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Toast
import { showToast } from 'vant';
import 'vant/es/toast/style';

// 微前端框架
import microApp from '@micro-zoe/micro-app'
microApp.start()

const app = createApp(App)

app.use(store).use(router).mount('#app')
