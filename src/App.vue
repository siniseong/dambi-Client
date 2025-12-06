<script setup>
import { ref, computed, onMounted } from 'vue'
import BaseButton from './components/BaseButton.vue'
import AppLayout from './components/AppLayout.vue'
import SeasonalEffect from './components/effects/SeasonalEffect.vue'
import BottomSheet from './components/BottomSheet.vue'
import { useKakaoShare } from './composables/useKakaoShare'
import { useCountdown } from './composables/useCountdown'
import { useTypewriter } from './composables/useTypewriter'

const title1 = ref('')
const title2 = ref('')
const { typeText } = useTypewriter()

onMounted(async () => {
  await typeText('Daily Food🍚', title1)
  await typeText('Randomizer,', title2)
})

const timeGreeting = computed(() => {
  const h = new Date().getHours()
  return h >= 5 && h < 11 ? '아침' : 
         h >= 11 && h < 17 ? '점심' : 
         h >= 17 && h < 22 ? '저녁' : '야식'
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

    <div class="flex-1 flex flex-col items-start justify-center w-full">
      <h1 class="text-white text-5xl font-semibold leading-tight mt-12 min-h-[1.2em]" style="font-family: 'Poppins', sans-serif;">
        {{ title1 }}
      </h1>
      <h1 class="text-white text-5xl font-semibold leading-tight mt-[-4px] min-h-[1.2em]" style="font-family: 'Poppins', sans-serif;">
        {{ title2 }}
      </h1>
      <p class="text-[#888] mt-2 text-base font-medium leading-relaxed text-center opacity-0 animate-fadeInUp [animation-delay:2.5s] [animation-fill-mode:forwards]">
        매일매일 고민되는 <span class="text-white font-semibold">{{ timeGreeting }}</span> 메뉴,
      </p>  
      <p class="text-[#888] text-base font-medium leading-relaxed text-center opacity-0 animate-fadeInUp [animation-delay:2.8s] [animation-fill-mode:forwards]">
        <span class="text-white font-semibold">ddd</span>가 추천 해드릴게요.
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