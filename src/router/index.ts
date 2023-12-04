import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/views/Index.vue'
import Tabbar from '@/views/Tabbar.vue'
import Micro from '@/views/Micro.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Tabbar',
    name: 'Tabbar',
    component: Tabbar
  },
  {
    path: '/Micro',
    name: 'Micro',
    component: Micro
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
