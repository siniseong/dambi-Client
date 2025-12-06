<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div>
    <button 
      @click="goBack"
      class="absolute top-4 left-4 p-2 z-10 text-white hover:text-gray-300 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>

    <div class="absolute top-4 left-0 w-full h-10 flex items-center justify-center z-0 pointer-events-none">
      <h2 class="text-white text-lg font-medium pointer-events-auto">{{ title }}</h2>
    </div>
  </div>
</template>
