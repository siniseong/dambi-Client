<script setup>

import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import handShakeImg from '@/assets/home/hand_shake.png'
import dayCheckImg from '@/assets/home/day_check.png'
import mapPersonImg from '@/assets/home/map_person.png'
import groupImg from '@/assets/home/group.png'
import partyImg from '@/assets/home/party.png'
import phoneImg from '@/assets/home/phone.png'
import linkImg from '@/assets/home/link.png'
import beerImg from '@/assets/home/beer.png'

const router = useRouter()
const showMainPage = ref(false)
const textRef = ref(null)
const marqueeRef = ref(null)
const gradientRef = ref(null)

const leftMarqueeColors = ['#6B5F9F', '#E67A9B', '#E6B84D', '#5AA3CC']
const rightMarqueeColors = ['#6BA87A', '#E69A4D', '#9D5FCC', '#CC5F5F']

const leftMarqueeImages = [handShakeImg, dayCheckImg, mapPersonImg, groupImg]
const rightMarqueeImages = [partyImg, phoneImg, linkImg, beerImg]

const updateMarqueeHeight = () => {
  if (!textRef.value || !marqueeRef.value) return

  const h1 = textRef.value.querySelector('h1')
  const h2 = textRef.value.querySelector('h2')
  const container = marqueeRef.value.parentElement
  const containerRect = container.getBoundingClientRect()

  if (h1) {
    const h1Bottom = h1.getBoundingClientRect().bottom - containerRect.top
    const marqueeHeight = h1Bottom - 15
    marqueeRef.value.style.height = `${marqueeHeight}px`

    if (h2 && gradientRef.value) {
      const h2Top = h2.getBoundingClientRect().top - containerRect.top
      const offset = 120
      gradientRef.value.style.height = `${Math.max(0, marqueeHeight - h2Top + offset)}px`
    }
  } else {
    const textBottom = textRef.value.getBoundingClientRect().bottom - containerRect.top
    marqueeRef.value.style.height = `${textBottom + 20}px`
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

const rightMarqueeScaleClasses = ['scale-125', 'scale-150', 'scale-125', 'scale-125']

const getMarqueeImageClass = (index, images, scaleClasses = null) => {
  const imageIndex = index % images.length
  const baseClasses = 'object-contain drop-shadow-lg'
  const scaleClass = scaleClasses ? scaleClasses[imageIndex] : 'scale-125'
  
  return `w-full h-auto ${baseClasses} absolute bottom-0 ${scaleClass}`
}
</script>

<template>
  <AppLayout>
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
                    <div 
                      class="flex-shrink-0 h-52 rounded-[2rem] overflow-hidden relative"
                      :style="{ backgroundColor: color }"
                    >
                      <img 
                        :src="leftMarqueeImages[index % leftMarqueeImages.length]" 
                        alt="" 
                        :class="getMarqueeImageClass(index, leftMarqueeImages)"
                      />
                    </div>
                  </template>
                </div>
              </div>
              <div class="flex-1 h-full overflow-hidden">
                <div class="flex flex-col gap-3 animate-scroll-down">
                  <template v-for="(color, index) in rightMarqueeColors.concat(rightMarqueeColors)" :key="index">
                    <div 
                      class="flex-shrink-0 h-52 rounded-[2rem] overflow-hidden relative"
                      :style="{ backgroundColor: color }"
                    >
                      <img 
                        :src="rightMarqueeImages[index % rightMarqueeImages.length]" 
                        alt="" 
                        :class="getMarqueeImageClass(index, rightMarqueeImages, rightMarqueeScaleClasses)"
                      />
                    </div>
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
          <h1 class="text-black text-4xl font-semibold leading-tight text-center font-poppins animate-fadeInUp">
            meetory<span class="text-[#B3E2FF] mb-4">.</span>
          </h1>
        </div>
        
        <div class="relative z-10">
          <BaseButton 
            @click="router.push('/home')"
            class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-black text-[15px] w-full"
          >
            <template #icon>
              <img src="@/assets/kakao-icon.svg" alt="Kakao" class="w-5 h-5" />
            </template>
            카카오로 시작하기
          </BaseButton>
        </div>
      </div>
    </template>
  </AppLayout>
</template>