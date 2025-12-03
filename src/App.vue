<script setup>
import { computed } from 'vue'
import BaseButton from './components/BaseButton.vue'
import AppLayout from './components/AppLayout.vue'

const timeGreeting = computed(() => {
  const hour = new Date().getHours()
  
  if (hour >= 5 && hour < 11) return '오늘 아침'
  if (hour >= 11 && hour < 17) return '오늘 점심'
  if (hour >= 17 && hour < 22) return '오늘 저녁'
  return '야식'
})
</script>

<template>
  <AppLayout>
    <div class="flex-1 flex flex-col items-center justify-center pb-20">
      <div class="flex flex-col items-center justify-center mb-[-54px]">
        <img 
          src="@/assets/logo/ddd-logo.svg" 
          alt="DDD Main Logo" 
          class="w-[280px] h-[280px] drop-shadow-2xl translate-y-10" 
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
