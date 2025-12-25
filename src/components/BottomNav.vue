<script setup>
import { useRoute, useRouter } from 'vue-router'
import AppointmentsIcon from '../assets/nav/Homeicon.vue'
import MemoriesIcon from '../assets/nav/MemoriesIcon.vue'
import RecommendationsIcon from '../assets/nav/RecommendationsIcon.vue'
import SettingsIcon from '../assets/nav/SettingsIcon.vue'

const route = useRoute()
const router = useRouter()

const navItems = [
  {
    name: 'home',
    label: '홈',
    path: '/home',
    icon: AppointmentsIcon
  },
  {
    name: 'memories',
    label: '기록',
    path: '/memories',
    icon: MemoriesIcon
  },    
  {
    name: 'recommendations',
    label: '추천',
    path: '/recommendations',
    icon: RecommendationsIcon
  },
  {
    name: 'settings',
    label: '설정',
    path: '/settings',
    icon: SettingsIcon
  }
]

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}

const navigate = (path) => {
  router.push(path)
}
</script>

<template>
  <nav class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] bg-white backdrop-blur-sm z-50 border-t border-[#E6E9EC] rounded-t-[1.8rem]" style="border-top-width: 0.5px;">
    <div class="flex items-center justify-around h-16 px-2">
      <button
        v-for="item in navItems"
        :key="item.name"
        @click="navigate(item.path)"
        :class="[
          'flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 rounded-xl mb-1',
          isActive(item.path)
            ? 'text-gray-900'
            : 'text-gray-400'
        ]"
      >
        <component :is="item.icon" />
        <span class="text-xs font-medium">{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>