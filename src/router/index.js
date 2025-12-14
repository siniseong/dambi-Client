import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import PreferenceAnalysisStart from '../page/PreferenceAnalysisStart.vue'
import PreferenceAnalysis from '../page/PreferenceAnalysis.vue'
import PreferenceAnalysis2 from '../page/PreferenceAnalysis2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/preference-analysis-start',
      name: 'preference-analysis-start',
      component: PreferenceAnalysisStart
    },
    {
      path: '/preference-analysis',
      name: 'preference-analysis',
      component: PreferenceAnalysis
    },
    {
      path: '/preference-analysis-2',
      name: 'preference-analysis-2',
      component: PreferenceAnalysis2
    }
  ]
})

export default router