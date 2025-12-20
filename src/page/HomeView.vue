<script setup>
import { ref, onMounted, computed } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const meetText = ref('meet')
const storyText = ref('story')
const mergedText = ref('')
const showMerged = ref(false)
const showMeet = ref(false)
const showStory = ref(false)
const showMainPage = ref(false)

const titleClass = computed(() => 'text-black text-5xl font-semibold leading-none transition-all duration-1000 ease-in-out font-poppins')
const mainTitleClass = computed(() => 'text-black text-2xl font-semibold leading-tight text-center z-10 animate-fadeInUp font-poppins')
const contentTitleClass = computed(() => 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight font-poppins whitespace-nowrap')

onMounted(() => {
  setTimeout(() => {
    showMeet.value = true
  }, 200)
  
  setTimeout(() => {
    showStory.value = true
  }, 600)
  
  setTimeout(() => {
    showMerged.value = true
    setTimeout(() => {
      mergedText.value = 'meetory'
      setTimeout(() => {
        showMainPage.value = true
      }, 800)
    }, 600)
  }, 2000)
})
</script>

<template>
  <AppLayout>
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute -top-1/4 -left-1/4 w-full h-full bg-[#B3E2FF] rounded-full opacity-30 blur-[120px]"></div>
      <div class="absolute top-1/4 -right-1/4 w-3/4 h-3/4 bg-[#B3E2FF] rounded-full opacity-25 blur-[100px]"></div>
      <div class="absolute bottom-1/4 left-1/4 w-2/3 h-2/3 bg-[#B3E2FF] rounded-full opacity-20 blur-[110px]"></div>
    </div>
    <SeasonalEffect />
    
    <div v-if="!showMainPage" class="flex-1 flex flex-col items-center justify-center w-full relative z-10">
      <div class="relative min-h-[1.2em] text-center w-full">
        <div 
          v-if="!mergedText"
          class="flex flex-col items-center gap-0 transition-all duration-1000 ease-in-out"
          :class="{ 'animate-mergeWords': showMerged }"
        >
          <h1 
            :class="[
              titleClass,
              showMeet && !showMerged ? 'animate-slide-in-left' : '',
              { 'animate-mergeMeet': showMerged },
              !showMeet ? 'opacity-0 -translate-x-[100px]' : ''
            ]"
          >
            {{ meetText }}
          </h1>
          <h1 
            :class="[
              titleClass,
              showStory && !showMerged ? 'animate-slide-in-left' : '',
              { 'animate-mergeStory': showMerged },
              !showStory ? 'opacity-0 -translate-x-[100px]' : ''
            ]"
          >
            {{ storyText }}
          </h1>
        </div>
        <h1 
          v-if="mergedText && !showMainPage"
          class="text-black text-5xl font-semibold leading-tight animate-fadeInUp text-center font-poppins"
        >
          {{ mergedText }}<span class="text-[#B3E2FF]">.</span>
        </h1>
      </div>
    </div>

    <template v-if="showMainPage">
      <h1 :class="[mainTitleClass, 'absolute top-5 left-0 right-0']">
        {{ mergedText }}<span class="text-[#B3E2FF]">.</span>
      </h1>

      <div class="flex-1 flex flex-col items-center justify-center w-full relative z-10 gap-6 px-2 sm:px-4">
        <div class="text-center animate-fadeInUp w-full overflow-hidden">
          <h2 :class="contentTitleClass" class="inline-block">
            복잡한 약속 잡기
          </h2>
          <p :class="contentTitleClass" class="inline-block">
            <span class="animate-gradient-shift">🔗 링크</span> 하나면 끝<span class="text-[#B3E2FF]">.</span><span class="cursor-blink">|</span>
          </p>
        </div>
      </div>
        
      <div 
        class="w-full transition-opacity duration-300 relative z-10 animate-fadeInUp"
      >
        <BaseButton class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-[#000000] text-[15px]">
          <template #icon>
            <img src="@/assets/main-page/kakao-icon.svg" alt="Kakao" class="w-5 h-5" />
          </template>
          카카오로 시작하기
        </BaseButton>
        <p class="text-center text-gray-500 text-xs mt-4">Developed by siniseong</p>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped>
@keyframes gradientShift {
  0% {
    background-position: 0% center;
  }
  25% {
    background-position: 50% center;
  }
  50% {
    background-position: 100% center;
  }
  75% {
    background-position: 50% center;
  }
  100% {
    background-position: 0% center;
  }
}

.animate-gradient-shift {
  display: inline-block;
  background: linear-gradient(90deg, #2563EB 0%, #3B82F6 25%, #60A5FA 50%, #3B82F6 75%, #1D4ED8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: gradientShift 6s ease-in-out infinite;
  font-weight: bold;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.cursor-blink {
  display: inline-block;
  color: #B3E2FF;
  animation: blink 1s step-end infinite;
  margin-left: 2px;
}
</style>