<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AnalysisPage from '../components/page/AnalysisPage.vue'

const router = useRouter()
const selectedIndex = ref(null)

const options = [
  '없음, 모든 음식을 먹을 수 있어요',
  '갑각류 알레르기 (새우, 게, 가재 등)',
  '견과류 알레르기 (땅콩, 아몬드, 호두 등)',
  '유제품 알레르기 (우유, 치즈, 요구르트 등)'
]

const handleNext = (index) => {
  console.log('Selected:', index, options[index])
}
</script>

<template>
  <AnalysisPage
    page-title="음식 맞춤 추천 취향 분석"
    :question-number="1"
    question-text="알레르기나 식이 제한으로 인해 못 먹는 음식이 있으신가요?"
    :options="options"
    :current-page="1"
    :total-pages="3"
    v-model="selectedIndex"
    @next="handleNext"
  />
</template>