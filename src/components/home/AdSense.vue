<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import drawImg from '../../assets/draw.svg'

  // test ads
  const ads = [
    {
      date: '1월 9일 ~ 1월 14일',
      title: '3학년 4반 마지막'
    },
    {
      date: '2월 1일 ~ 2월 5일',
      title: '졸업 여행'
    },
    {
      date: '2월 10일 ~ 2월 15일',
      title: '신년 모임'
    }
  ]
  
  const extendedAds = [ads[ads.length - 1], ...ads, ads[0]]
  
  const currentAdIndex = ref(1)
  const isTransitioning = ref(true)
  let slideInterval = null
  
  const nextSlide = () => {
    currentAdIndex.value++
    
    if (currentAdIndex.value >= extendedAds.length - 1) {
      setTimeout(() => {
        isTransitioning.value = false
        currentAdIndex.value = 1
        setTimeout(() => {
          isTransitioning.value = true
        }, 50)
      }, 500)
    }
  }
  
  onMounted(() => {
    slideInterval = setInterval(nextSlide, 3000)
  })
  
  onUnmounted(() => {
    if (slideInterval) {
      clearInterval(slideInterval)
    }
  })
</script>

<template>
  <div class="mb-4 overflow-hidden rounded-2xl">
    <div class="relative h-24">
      <div 
        class="flex"
        :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
        :style="{ transform: `translateX(-${currentAdIndex * 100}%)` }"
      >
        <div 
          v-for="(ad, index) in extendedAds" 
          :key="index"
          class="relative flex min-w-full h-24 items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-4"
        >
          <div class="relative z-10 flex flex-col">
            <h3 class="text-sm font-medium text-white">{{ ad.date }}</h3>
            <h3 class="text-lg font-semibold text-white">{{ ad.title }}</h3>
          </div>
          <img :src="drawImg" alt="draw" class="ml-4 relative z-10 h-16 w-auto" />
          <div class="absolute bottom-2 right-4 z-10 rounded-lg bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {{ index === 0 ? ads.length : index <= ads.length ? index : 1 }} / {{ ads.length }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>