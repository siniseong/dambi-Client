<script setup>
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    
    <PageHeader title="페이지 이름" />

    <div class="flex-1 flex flex-col items-start justify-center w-full">
    </div>

    <div class="w-full flex flex-col gap-3">
      <BaseButton class="bg-[#2F9266] hover:bg-[#257a55] active:bg-[#1c6344] text-white text-[15px]">
        다음
      </BaseButton>
    </div>
  </AppLayout>
</template>