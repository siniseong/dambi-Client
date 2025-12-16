<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()

const showText1 = ref(false)
const showText2 = ref(false)
const showBadge = ref(false)
const showText3 = ref(false)
const showButton = ref(false)

onMounted(() => {
  setTimeout(() => {
    showText1.value = true
  }, 200)
  
  setTimeout(() => {
    showText2.value = true
  }, 500)
  
  setTimeout(() => {
    showBadge.value = true
  }, 800)
  
  setTimeout(() => {
    showText3.value = true
  }, 1100)
  
  setTimeout(() => {
    showButton.value = true
  }, 1400)
})

const handleNext = () => {
  router.push({ name: 'preference-analysis' })
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader title="음식 맞춤 추천 취향 분석" />

    <div class="flex-1 flex flex-col justify-center">
      <div class="flex flex-col gap-3">
        <p 
          class="text-white text-3xl font-semibold text-center transition-all duration-500"
          :class="showText1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="text-[#D3F921]">희성</span>님께 맞는
        </p>
        <p 
          class="text-white text-3xl font-semibold text-center transition-all duration-500"
          :class="showText2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          음식 추천을 위해
        </p>
        <div class="flex justify-center">
          <div
            class="inline-flex items-center px-5 py-3 rounded-full bg-[#D3F921] shadow-md overflow-hidden"
            :style="{
              opacity: showBadge ? 1 : 0,
              transform: showBadge ? 'translateX(0)' : 'translateX(-16px)',
              clipPath: showBadge ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
              transition: 'clip-path 0.6s ease, transform 0.6s ease, opacity 0.6s ease'
            }"
          >
            <span class="text-2xl"></span>
            <span class="text-[#1a1a1a] text-3xl font-extrabold">알레르기 · 음식 스타일</span>
          </div>
        </div>
        <p 
          class="text-white text-3xl font-semibold text-center transition-all duration-500"
          :class="showText3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          정보를 기록할게요.
        </p>
      </div>
    </div>

    <button 
      @click="handleNext"
      class="w-full h-[50px] rounded-xl flex items-center justify-center gap-2 transition-all duration-500 font-semibold bg-[#D3F921] hover:bg-[#E5FF3A] active:bg-[#B8D91D] text-[#1a1a1a] text-[15px]"
      :class="showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
    >
      다음
    </button>
  </AppLayout>
</template>