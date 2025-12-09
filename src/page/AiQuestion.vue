<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()
const selectedOption = ref(null)
const questionText = '오늘은 어떤 스타일로 드실래요?'
const options = [
  { id: 1, text: '든든한 한끼 식사' },
  { id: 2, text: '가볍게 먹기 좋은 🥗' },
]

const handleSelect = (id) => {
  selectedOption.value = id
}

const goNext = () => {
  if (!selectedOption.value) return
  console.log('Selected:', selectedOption.value)  
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader title="취향 분석" />
    <div class="flex-1 flex flex-col w-full pt-4">
      <div class="relative w-full mb-6 mt-6 flex-1 flex items-center justify-center min-h-0">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-64 h-64 bg-[#2F9266] rounded-full mix-blend-screen filter blur-[80px] opacity-15"></div>
          <div class="absolute w-48 h-48 bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] opacity-10 -translate-x-20 -translate-y-10"></div>
        </div>

        <div class="relative z-10 text-center px-4">
          <div class="flex items-center justify-center gap-2 mb-2">
            <span class="text-[#888] text-xs font-medium tracking-wider">✦ DDD AI는 실수할 수 있습니다.</span>
          </div>
          <h1 class="text-white text-3xl sm:text-4xl font-bold leading-tight whitespace-pre-line break-keep tracking-tight">
            {{ questionText }}
          </h1>
        </div>
      </div>

      <div class="flex flex-col gap-5 w-full px-2 pb-4 -mt-8">
        <button 
          v-for="(option, index) in options" 
          :key="option.id"
          @click="handleSelect(option.id)"
          class="group relative w-full py-7 rounded-xl transition-all duration-200 border-2 text-center active:scale-[0.99]"
          :class="[
            selectedOption === option.id 
              ? 'bg-[#18181b] border-[#2F9266]' 
              : 'bg-[#18181b] border-[#3f3f46] hover:bg-[#1f1f23] hover:border-[#52525b]'
          ]"
        >
          <span 
            class="text-[20px] sm:text-[22px] tracking-tight transition-all duration-200 break-keep leading-snug"
            :class="selectedOption === option.id ? 'text-white font-semibold' : 'text-[#71717a] font-normal group-hover:text-[#d4d4d8]'"
          >
            {{ option.text }}
          </span>
        </button>
      </div>
    </div>

    <div class="w-full flex flex-col gap-3 mt-5">
      <div class="flex justify-center items-center gap-1 mb-2">
        <span class="text-[#2F9266] font-bold text-sm">1</span>
        <span class="text-[#666] font-medium text-sm">/ 3</span>
      </div>

      <BaseButton 
        @click="goNext" 
        :disabled="!selectedOption"
        class="bg-[#2F9266] hover:bg-[#257a55] active:bg-[#1c6344] text-white text-[15px] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
      >
        다음
      </BaseButton>
    </div>
  </AppLayout>
</template>