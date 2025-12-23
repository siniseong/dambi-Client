import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import PreferenceAnalysis from '../page/PreferenceAnalysis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/preference-analysis',
      name: 'preference-analysis',
      component: PreferenceAnalysis
    }
  ]
})

export default router