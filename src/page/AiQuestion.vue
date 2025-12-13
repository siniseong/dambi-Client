<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()
const selectedIndex = ref(null)

const options = [
  '없음, 모든 음식을 먹을 수 있어요',
  '갑각류 알레르기 (새우, 게, 가재 등)',
  '견과류 알레르기 (땅콩, 아몬드, 호두 등)',
  '유제품 알레르기 (우유, 치즈, 요구르트 등)'
]

const handleSelect = (index) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
}

const goNext = () => {
  if (selectedIndex.value === null) return
  console.log('Selected:', selectedIndex.value, options[selectedIndex.value])  
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader title="음식 맞춤 추천 취향 분석" />

    <div class="flex-1 flex flex-col w-full pt-12">
      <div class="flex-1 flex flex-col gap-4">
        <h1 class="text-white text-4xl font-bold text-left break-keep" style="font-family: 'SlowGothic', sans-serif; line-height: 1.2; letter-spacing: -0.02em;">
          <span class="text-[#D3F921]">Q1.</span> 알레르기나 식이 제한으로 인해 못 먹는 음식이 있으신가요?
        </h1>

        <div class="text-gray-300 font-medium text-sm mt-1 mb-[-4px]"><span class="text-red-500">*</span> 아래에서 하나를 선택해주세요.</div>
        <div class="w-full flex flex-col gap-3">
          <button 
            v-for="(option, index) in options"
            :key="index"
            @click="handleSelect(index)"
            class="group relative w-full h-16 rounded-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-between px-5 overflow-hidden gap-3"
            :class="[
              selectedIndex === index
                ? 'bg-white/5'
                : 'bg-white/5 hover:bg-white/10'
            ]"
          >
            <span class="text-white text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0 text-left option-text">
              {{ option }}
            </span>

            <div 
              v-if="selectedIndex === index"
              class="flex items-center justify-center w-6 h-6 rounded-full bg-[#D3F921] flex-shrink-0"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="#1a1a1a" 
                  stroke-width="2.5" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
              </svg>  
            </div>
            <div 
              v-else
              class="w-6 h-6 rounded-full border-2 border-white/30 flex-shrink-0"
            ></div>
          </button>
        </div>
      </div>
    </div>

    <div class="text-white/60 text-sm text-center my-4">
      <span class="text-[#D3F921]">1</span>/3
    </div>

    <BaseButton 
      @click="goNext" 
      :disabled="selectedIndex === null"
      class="bg-[#D3F921] hover:bg-[#E5FF3A] active:bg-[#B8D91D] text-[#1a1a1a] text-[15px] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      다음
    </BaseButton>

  </AppLayout>
</template>

<style scoped>
@font-face {
    font-family: 'SlowGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/neurimboGothicRegular.woff2') format('woff2');
}

@media (max-width: 359px) {
  .option-text {
    font-size: 0.875rem;
  }
}
</style>