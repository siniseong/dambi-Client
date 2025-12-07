<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()
const selectedOption = ref(null)

// 임시 데이터
const questionText = "오늘은 어떤 스타일로 드시고 싶으세요?"
const options = [
  { id: 1, text: "든든한 한끼 식사 🍚" },
  { id: 2, text: "가볍게 먹기 좋은 🥗" },
  { id: 3, text: "특별한 날을 위한 ✨" },
  { id: 4, text: "술과 함께 곁들이는 🍺" },
  { id: 5, text: "스트레스 풀리는 매운맛 🔥" }
]

const handleSelect = (id) => {
  selectedOption.value = id
}

const goNext = () => {
  if (selectedOption.value) {
    console.log('Selected:', selectedOption.value)
  }
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader title="취향 분석" />
    <div class="flex-1 flex flex-col w-full pt-4">
      <div class="relative w-full mb-10 mt-6">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#2F9266] rounded-full mix-blend-screen filter blur-[60px] opacity-10"></div>
        <div class="absolute -bottom-4 right-10 w-40 h-40 bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] opacity-10"></div>
        <div class="relative p-2">
          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-[#2F9266] text-lg">✦</span>
              <span class="text-[#888] text-xs font-medium tracking-wider">DDD AI QUESTION</span>
            </div>
            <h1 class="text-white text-2xl font-bold leading-snug whitespace-pre-line break-keep tracking-tight mb-[-26px]">
              {{ questionText }}
            </h1>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <button 
          v-for="option in options" 
          :key="option.id"
          @click="handleSelect(option.id)"
          class="w-full p-4 rounded-2xl text-left transition-all duration-200 flex items-center justify-between group border border-transparent"
          :class="[
            selectedOption === option.id 
              ? 'bg-[#2F9266] bg-opacity-20 border-[#2F9266] text-white' 
              : 'bg-[#1E1E24] text-[#b1b4bc] hover:bg-[#2C2C35] border-transparent'
          ]"
        >
          <span class="text-[16px] font-medium">{{ option.text }}</span>
          
          <div 
            class="w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-200"
            :class="[
              selectedOption === option.id
                ? 'border-[#2F9266] bg-[#2F9266]'
                : 'border-[#444] group-hover:border-[#666]'
            ]"
          >
            <svg v-if="selectedOption === option.id" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 text-white">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>
      </div>
    </div>

    <div class="w-full flex flex-col gap-3">
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