<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'

const router = useRouter()
const selectedAllergies = ref([])

const allergyTypes = [
  { name: '난류(계란)', emoji: '🥚' },
  { name: '우유', emoji: '🥛' },
  { name: '메밀', emoji: '🌾' },
  { name: '땅콩', emoji: '🥜' },
  { name: '대두', emoji: '🫘' },
  { name: '밀', emoji: '🌾' },
  { name: '고등어', emoji: '🐟' },
  { name: '게', emoji: '🦀' },
  { name: '새우', emoji: '🦐' },
  { name: '돼지고기', emoji: '🐷' },
  { name: '복숭아', emoji: '🍑' },
  { name: '토마토', emoji: '🍅' },
  { name: '아황산류', emoji: '⚗️' },
  { name: '호두', emoji: '🥜' },
  { name: '닭고기', emoji: '🐔' },
  { name: '쇠고기', emoji: '🐄' },
  { name: '오징어', emoji: '🦑' },
  { name: '조개류(굴, 전복, 홍합 등)', emoji: '🦪' }
]

const toggleAllergy = (allergy) => {
  const index = selectedAllergies.value.indexOf(allergy.name)
  if (index > -1) {
    selectedAllergies.value.splice(index, 1)
  } else {
    selectedAllergies.value.push(allergy.name)
  }
}


const handleConfirm = () => {
  if (selectedAllergies.value.length === 0) return
  router.push({ name: 'preference-analysis-2' })
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader title="음식 맞춤 추천 취향 분석"/>

    <div class="flex-1 flex flex-col w-full mt-16">
      <div class="flex flex-col items-start gap-2 w-full max-w-[500px]">
        <div class="text-white text-3xl font-bold text-left break-keep">
          <p>
            <span class="text-[#D3F921] whitespace-nowrap" style="font-family: 'Poppins', sans-serif;"></span> 해당하는 알레르기
          </p>
          <p>항목을 모두 선택해주세요.</p>
        </div>
        
        <div class="flex flex-wrap gap-2.5 mt-5">
          <button
            v-for="(allergy, index) in allergyTypes"
            :key="allergy.name"
            type="button"
            @click="toggleAllergy(allergy)"
            class="h-10 px-4 rounded-full flex items-center gap-2 active:scale-[0.97] transition-all duration-200"
            :class="
              selectedAllergies.includes(allergy.name)
                ? 'bg-[#D3F921] text-[#1a1a1a]'
                : 'bg-gray-800/50 text-white'
            "
          >
            <span class="text-base">{{ allergy.emoji }}</span>
            <span class="text-sm font-medium">{{ allergy.name }}</span>
          </button>
        </div>
      </div>
      <p class="text-gray-400 text-sm mb-6 text-center mt-auto">
        <span class="text-[#D3F921]">1</span>/2
      </p>
    </div>

    <button
      @click="handleConfirm"
      :disabled="selectedAllergies.length === 0"
      class="w-full h-[50px] rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-semibold bg-[#D3F921] hover:bg-[#E5FF3A] active:bg-[#B8D91D] text-[#1a1a1a] text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      다음
    </button>

  </AppLayout>
</template>