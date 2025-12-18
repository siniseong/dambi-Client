<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppLayout from '../components/AppLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SeasonalEffect from '../components/effects/SeasonalEffect.vue'
import CloseIconSmall from '../components/icons/CloseIconSmall.vue'

const router = useRouter()
const selectedAllergies = ref([])

const allergyTypes = [
  '난류(계란)',
  '우유',
  '메밀',
  '땅콩',
  '대두',
  '밀',
  '고등어',
  '게',
  '새우',
  '돼지고기',
  '복숭아',
  '토마토',
  '아황산류',
  '호두',
  '닭고기',
  '쇠고기',
  '오징어',
  '조개류(굴, 전복, 홍합 등)'
]

const toggleAllergy = (allergy) => {
  const index = selectedAllergies.value.indexOf(allergy)
  if (index > -1) {
    selectedAllergies.value.splice(index, 1)
  } else {
    selectedAllergies.value.push(allergy)
  }
}

const getSelectedButtonClass = (index) => {
  const colorIndex = index % 3
  if (colorIndex === 0) {
    return 'bg-[#FFAB2C] text-white'
  } else if (colorIndex === 1) {
    return 'bg-[#282AE1] text-white'
  } else {
    return 'bg-[#D3F921] text-[#1a1a1a]'
  }
}

const getUnselectedButtonClass = (index) => {
  const colorIndex = index % 3
  if (colorIndex === 0) {
    return 'bg-[#101013] text-white border border-[#FFAB2C]'
  } else if (colorIndex === 1) {
    return 'bg-[#101013] text-white border border-[#282AE1]'
  } else {
    return 'bg-[#101013] text-white border border-[#D3F921]'
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

    <div class="flex-1 flex flex-col w-full pt-12">
      <div class="flex-1 flex flex-col gap-4">
        <div class="flex flex-col items-center gap-2">
          <p class="text-3xl text-[#D3F921] font-bold text-center" style="font-family: 'Poppins', sans-serif;">
            Q.1-1.
          </p>
          <div class="text-white text-3xl font-bold text-center break-keep">
            <p>가지고 계신 알레르기를</p>
            <p>모두 알려주세요.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <button
            v-for="(allergy, index) in allergyTypes"
            :key="allergy"
            type="button"
            @click="toggleAllergy(allergy)"
            class="h-10 px-4 rounded-full flex items-center gap-2 transition-all duration-200 active:scale-[0.97] whitespace-nowrap"
            :class="
              selectedAllergies.includes(allergy)
                ? getSelectedButtonClass(index)
                : getUnselectedButtonClass(index)
            "
          >
            <span class="text-sm font-medium">{{ index + 1 }}. {{ allergy }}</span>
            <CloseIconSmall 
              v-if="selectedAllergies.includes(allergy)"
              class="flex-shrink-0"
            />
          </button>
        </div>
      </div>
    </div>

    <div class="text-white/60 text-sm text-center my-4">
      <span class="text-[#D3F921]">1</span>/2
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