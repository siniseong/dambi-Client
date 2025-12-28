<script setup>
  import { ref } from 'vue'
  import AppLayout from '../components/AppLayout.vue'
  import PlusIcon from '../components/icons/PlusIcon.vue'
  // import SearchIcon from '../components/icons/SearchIcon.vue'
  // import ChevronDownIcon from '../components/icons/ChevronDownIcon.vue'

  const viewMode = ref('list')
  const toggleView = () => {
    viewMode.value = viewMode.value === 'list' ? 'calendar' : 'list'
  }
</script>

<template>
  <AppLayout>
    <div class="flex-1 flex flex-col">
      <div class="w-full max-w-[500px] mx-auto">
        <div class="mt-6 mb-5">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold text-black flex items-center gap-2">
              <button @click="toggleView" class="flex items-center gap-2 transition-opacity">
                <span class="translate-y-0.5 font-bold">
                  약속 <span class="gradient-text">{{ viewMode === 'list' ? '리스트' : '캘린더' }}</span>
                </span>
              </button>
            </h1>
            <div class="flex items-center gap-4">
              <!-- <button class="text-gray-500 transition-colors">
                <SearchIcon />
              </button> -->
              <button class="text-gray-700 transition-colors">
                <PlusIcon />
              </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(90deg, #1A7CD9 0%, #4A9EFF 50%, #1A7CD9 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>