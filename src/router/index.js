import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import LandingView from '../page/LandingView.vue'
import MemoriesView from '../page/MemoriesView.vue'
import RecommendationsView from '../page/RecommendationsView.vue'
import SettingsView from '../page/SettingsView.vue'

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
    },
    {
      path: '/memories',
      name: 'memories',
      component: MemoriesView
    },
    {
      path: '/recommendations',
      name: 'recommendations',
      component: RecommendationsView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router