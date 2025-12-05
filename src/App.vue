<script setup>
import { ref, computed } from 'vue'
import BaseButton from './components/BaseButton.vue'
import AppLayout from './components/AppLayout.vue'
import SeasonalEffect from './components/effects/SeasonalEffect.vue'
import BottomSheet from './components/BottomSheet.vue'
import DDDLogo from './logo/DDDLogo.vue'
import { useKakaoShare } from './composables/useKakaoShare'
import { useCountdown } from './composables/useCountdown'

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

const isBottomSheetOpen = ref(false)
const { countdown, start: startCountdown, stop: stopCountdown } = useCountdown(3)

const openBottomSheet = () => {
  isBottomSheetOpen.value = true
  startCountdown(() => window.location.href = '/')
}

const closeBottomSheet = () => {
  isBottomSheetOpen.value = false
  stopCountdown()
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <button 
      @click="handleShare"
      class="absolute top-4 left-4 p-2 z-10 group"
    >
      <img 
        src="@/assets/main-page/share-icon.svg" 
        alt="Share" 
        class="w-6 h-6 transition-all duration-200 group-hover:brightness-0 group-hover:invert" 
      />
    </button>

    <div class="flex-1 flex flex-col items-center justify-center">
      <div class="mb-4 select-none">
        <DDDLogo />
      </div>
      
      <p class="text-[#888] mt-4 text-base font-medium leading-relaxed text-center opacity-0 animate-fadeInUp [animation-delay:4.2s] [animation-fill-mode:forwards]">
        매일매일 고민되는 <span class="text-[#ef88c8] font-semibold">{{ timeGreeting }}</span> 메뉴,
      </p>
      <p class="text-[#888] text-base font-medium leading-relaxed text-center opacity-0 animate-fadeInUp [animation-delay:4.6s] [animation-fill-mode:forwards]">
        DDD가 추천 해드릴게요.
      </p>
    </div>

    <div class="w-full flex flex-col gap-3">
      <BaseButton class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-[#000000] text-[15px]">
        <template #icon>
          <img src="@/assets/main-page/kakao-icon.svg" alt="Kakao" class="w-5 h-5" />
        </template>
        카카오로 시작하기
      </BaseButton>

      <BaseButton 
        @click="openBottomSheet"
        class="bg-[#2C2C35] hover:bg-[#3A3A45] active:bg-[#454555] text-[#b1b4bc] text-[14px] font-medium"
      >
        로그인 없이 시작하기
      </BaseButton>

      <p class="text-[#555] text-[11px] text-center mt-1">© 2025 DDD.</p>
    </div>

    <BottomSheet :isOpen="isBottomSheetOpen" @close="closeBottomSheet">
      <div class="flex flex-col items-center py-4">
        <div class="relative mb-6">
          <img 
            src="@/assets/main-page/warning-signage .png" 
            alt="Warning"
            class="w-24 h-24 object-contain"
          />
        </div>
        
        <p class="text-[#888] text-sm text-center">
          <span class="text-white font-medium">{{ countdown }}초</span> 후 게스트로 시작해요
        </p>
        <p class="text-[#888] text-sm text-center mb-8">
          로그인하면 더 많은 기능을 이용할 수 있어요
        </p>
        
        <div class="w-full">
          <BaseButton class="bg-[#FEE500] hover:bg-[#FDD835] active:bg-[#FBC02D] text-[#000000] text-[15px]">
            <template #icon>
              <img src="@/assets/main-page/kakao-icon.svg" alt="Kakao" class="w-5 h-5" />
            </template>
            카카오로 시작하기
          </BaseButton>
        </div>
      </div>
    </BottomSheet>
  </AppLayout>
</template>

<style scoped>
</style>