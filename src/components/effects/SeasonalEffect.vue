<script setup>
import { computed } from 'vue'
import SnowEffect from './SnowEffect.vue'
import CherryBlossomEffect from './CherryBlossomEffect.vue'
import SunshineEffect from './SunshineEffect.vue'
import LeafEffect from './LeafEffect.vue'

const currentSeason = computed(() => {
  const month = new Date().getMonth() + 1
  
  if (month >= 3 && month <= 5) return 'spring'
  if (month >= 6 && month <= 8) return 'summer'
  if (month >= 9 && month <= 11) return 'autumn'
  return 'winter'
})

const seasonComponents = {
  spring: CherryBlossomEffect,
  summer: SunshineEffect,
  autumn: LeafEffect,
  winter: SnowEffect,
}
</script>

<template>
  <component :is="seasonComponents[currentSeason]" />
</template>