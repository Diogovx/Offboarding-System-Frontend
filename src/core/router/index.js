import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/features/pages/login/login.vue'
import Onboarding from '@/features/pages/onboarding/onboarding.vue'
import Offboarding from '@/features/pages/offboarding/offboarding.vue'
import Audit from '@/features/pages/audit/audit.vue' 
import User from '@/features/pages/users/users.vue' 

const routes = [

  { path: '/', name: 'home', redirect: '/login' },
  { path: '/login', name: 'login', component: Login },
  { path: '/onboarding', name: 'onboarding', component: Onboarding },
  { path: '/offboarding', name: 'offboarding', component: Offboarding },
  { path: '/logs', name: 'logs', component: Audit },
  { path: '/users', name: 'users', component: User },

  // catch-all route to handle undefined paths
   { 
    path: '/:pathMatch(.*)*', 
    redirect: '/login' 
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router