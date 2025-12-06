import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import AiQuestion from '../page/AiQuestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ai-question',
      name: 'ai-question',
      component: AiQuestion
    }
  ]
})

export default router
