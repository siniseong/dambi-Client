<script setup>
import { useRouter } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'

const router = useRouter()

const handleNext = () => {
  router.push({ name: 'preference-analysis' })
}
</script>

<template>
  <AppLayout>
    <PageHeader title="음식 맞춤 추천 취향 분석" />

    <div class="flex-1 flex flex-col items-center justify-center w-full gap-8">
      <div class="text-8xl">🍽️</div>
      
      <p class="text-white text-lg text-center px-4 leading-relaxed">
        희성님께 맞는 음식을 추천해드리기 위해<br />
        간단한 조사를 시작합니다.
      </p>
    </div>

    <button 
      @click="handleNext"
      class="w-full h-[50px] rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-semibold bg-[#D3F921] hover:bg-[#E5FF3A] active:bg-[#B8D91D] text-[#1a1a1a] text-[15px]"
    >
      다음
    </button>
  </AppLayout>
</template>

