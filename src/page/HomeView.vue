<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const showMainPage = ref(false)
const textRef = ref(null)
const marqueeRef = ref(null)
const gradientRef = ref(null)

const leftMarqueeColors = ['#FFD4A0', '#D4C0FF', '#B8E0FF', '#FFB8D9']
const rightMarqueeColors = ['#C8FF8F', '#FFE0B3', '#D4B8FF', '#B8FFD4']

const updateMarqueeHeight = () => {
  if (!textRef.value || !marqueeRef.value) return

  const h1Element = textRef.value.querySelector('h1')
  const h2Element = textRef.value.querySelector('h2')
  const containerRect = marqueeRef.value.parentElement.getBoundingClientRect()

  if (h1Element) {
    const h1Rect = h1Element.getBoundingClientRect()
    const h1BottomFromTop = h1Rect.bottom - containerRect.top
    const marqueeHeight = h1BottomFromTop - 15
    
    marqueeRef.value.style.height = `${marqueeHeight}px`

    if (h2Element && gradientRef.value) {
      const h2Rect = h2Element.getBoundingClientRect()
      const h2TopFromTop = h2Rect.top - containerRect.top
      const gradientHeight = marqueeHeight - h2TopFromTop
      
      gradientRef.value.style.height = `${Math.max(0, gradientHeight)}px`
    }
  } else {
    const textRect = textRef.value.getBoundingClientRect()
    const textBottomFromTop = textRect.bottom - containerRect.top
    marqueeRef.value.style.height = `${textBottomFromTop + 20}px`
  }
}

onMounted(() => {
  showMainPage.value = true
  nextTick(() => {
    updateMarqueeHeight()
    window.addEventListener('resize', updateMarqueeHeight)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMarqueeHeight)
})
</script>

<template>
  <AppLayout>
    <SeasonalEffect />

    <template v-if="showMainPage">
      <div 
        class="w-full h-full flex flex-col transition-opacity duration-300 relative z-10 animate-fadeInUp"
      >
        <div class="flex-1 flex flex-col relative min-h-0">
          <div ref="marqueeRef" class="absolute top-0 left-0 right-0 flex flex-col w-full pointer-events-none z-0">
            <div class="flex gap-3 w-full h-full relative">
              <div class="flex-1 h-full overflow-hidden">
                <div class="flex flex-col gap-3 animate-scroll-up">
                  <template v-for="(color, index) in leftMarqueeColors.concat(leftMarqueeColors)" :key="index">
                    <div class="flex-shrink-0 h-56 rounded-[2rem]" :style="{ backgroundColor: color }"></div>
                  </template>
                </div>
              </div>
              <div class="flex-1 h-full overflow-hidden">
                <div class="flex flex-col gap-3 animate-scroll-down">
                  <template v-for="(color, index) in rightMarqueeColors.concat(rightMarqueeColors)" :key="index">
                    <div class="flex-shrink-0 h-56 rounded-[2rem]" :style="{ backgroundColor: color }"></div>
                  </template>
                </div>
              </div>
              <div ref="gradientRef" class="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-[#f3f4f6] pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        <div ref="textRef" class="text-center mb-20 relative z-10">
          <h2 class="text-black text-lg font-medium mb-1">
            복잡한 약속 잡기, <span class="font-bold">링크</span> 하나면 끝.
          </h2>
          <h1 class="text-black text-3xl font-semibold leading-tight text-center font-poppins animate-fadeInUp">
            meetory<span class="text-[#B3E2FF] mb-4">.</span>
          </h1>
        </div>
        
        <div class="relative z-10 mb-2">
          <BaseButton class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-[#000000] text-[15px] w-full">
            <template #icon>
              <img src="@/assets/main-page/kakao-icon.svg" alt="Kakao" class="w-5 h-5" />
            </template>
            카카오로 시작하기
          </BaseButton>
        </div>
      </div>
    </template>
  </AppLayout>
</template>