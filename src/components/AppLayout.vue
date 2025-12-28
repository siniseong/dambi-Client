<script setup>
import { useRoute } from 'vue-router'
import BottomNav from './BottomNav.vue'

const route = useRoute()
const showNav = route.path !== '/'
</script>

<template>
  <div class="w-full max-w-[500px] h-screen-safe bg-white relative flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.1)] font-sans text-gray-900 mx-auto">
    <main class="flex-1 flex flex-col px-6 pb-6">
      <slot></slot>
    </main>
    <!-- <BottomNav v-if="showNav" /> -->
  </div>
</template>