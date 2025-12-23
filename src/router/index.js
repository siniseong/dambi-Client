import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import LandingView from '../page/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router