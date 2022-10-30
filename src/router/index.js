import { createRouter, createWebHashHistory } from 'vue-router'
//import Index from '../views/index.vue'
const routes = [
  {
    path: '/newsinfo/:id',
    name: 'newsinfo',
    component: () => import('../views/info.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },

  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/collect.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search.vue')
  },

  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    redirect: './index0',
    children: [
      {
        path: '/index0',
        name: 'index0',
        component: () => import('../views/Index0.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my.vue')
      },
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router

