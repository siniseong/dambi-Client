<script setup>
import { computed } from 'vue'
import BaseButton from './components/BaseButton.vue'
import AppLayout from './components/AppLayout.vue'
import SeasonalEffect from './components/effects/SeasonalEffect.vue'
import { useKakaoShare } from './composables/useKakaoShare'

const timeGreeting = computed(() => {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 11) return '오늘 아침'
  if (hour >= 11 && hour < 17) return '오늘 점심'
  if (hour >= 17 && hour < 22) return '오늘 저녁'
  return '야식'
})

const { shareKakao } = useKakaoShare()
const handleShare = () => {
  shareKakao({
    title: 'DDD - 메뉴 추천 서비스',
    description: `매일매일 고민되는 ${timeGreeting.value} 메뉴, DDD가 추천해드릴게요.`,
  })
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute inset-x-0 mx-auto top-[38%] w-[200px] h-[200px] blur-[60px] animate-aurora opacity-15 bg-[linear-gradient(45deg,#ff0080,#7928ca,#4299e1,#ff0080)] [background-size:300%_300%]"></div>
    </div>

    <button 
      @click="handleShare"
      class="absolute top-4 left-4 p-2 text-[#888] hover:text-white transition-colors z-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    </button>

    <div class="flex-1 flex flex-col items-center justify-center pb-20">
      <div class="flex flex-col items-center justify-center mb-[-54px]">
        <img 
          src="@/assets/logo/ddd-logo.svg" 
          alt="DDD Main Logo" 
          class="w-[280px] h-[280px] drop-shadow-2xl translate-y-10 animate-float" 
        />
      </div>
      
      <div class="text-center">
        <p class="text-[#888] text-base font-normal leading-relaxed">
          매일매일 고민되는 <span class="text-[#ef88c8] font-semibold">{{ timeGreeting }}</span> 메뉴,<br/>
          DDD가 추천 해드릴게요.
        </p>
      </div>
    </div>

    <div class="w-full flex flex-col gap-3 mb-8">
      <BaseButton class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-[#000000] text-[15px]">
        <template #icon>
          <svg viewBox="0 0 32 32" class="w-5 h-5 text-[#000000]">
            <path d="M16 4C9.925 4 5 7.736 5 12.346c0 2.95 2.03 5.55 5.08 6.96l-1.3 4.8c-.1.4.3.7.6.5l5.6-3.7c.3 0 .7.1 1.02.1 6.075 0 11-3.736 11-8.346C27 7.736 22.075 4 16 4z" fill="currentColor"/>
          </svg>
        </template>
        카카오로 시작하기
      </BaseButton>

      <BaseButton class="bg-[#2C2C35] hover:bg-[#3A3A45] active:bg-[#454555] text-[#b1b4bc] text-[14px] font-medium">
        로그인 없이 시작하기
      </BaseButton>

      <p class="text-[#555] text-[11px] text-center mt-1 mb-[-4]">© 2025 DDD.</p>
    </div>
  </AppLayout>
</template>
