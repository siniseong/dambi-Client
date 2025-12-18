<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import AppLayout from '../components/AppLayout.vue'
  import PageHeader from '../components/PageHeader.vue'
  import SeasonalEffect from '../components/effects/SeasonalEffect.vue'
  import CheckIcon from '../components/icons/CheckIcon.vue'
  import CloseIcon from '../components/icons/CloseIcon.vue'
  
  const router = useRouter()
  const selectedIndex = ref(null)
  
  const cards = [
    {
      label: '네',
      tone: 'yes'
    },
    {
      label: '아니요',
      tone: 'no'
    }
  ]
  
  const handleSelect = (index) => {
    selectedIndex.value = index
    
    if (cards[index].tone === 'yes') {
      router.push({ name: 'preference-analysis-allergy' })
    } else {
      router.push({ name: 'preference-analysis-2' })
    }
  }
  </script>
  
  <template>
    <AppLayout>
      <SeasonalEffect />
      <PageHeader title="음식 맞춤 추천 취향 분석"/>
  
      <div class="flex-1 flex flex-col w-full mt-16 justify-between">
        <div class="flex flex-col items-start gap-2 w-full max-w-[500px]">
          <div class="text-white text-3xl font-bold text-left break-keep">
            <p>
              <span class="text-[#D3F921] whitespace-nowrap" style="font-family: 'Poppins', sans-serif;">Q2.</span> 특정 음식에 대한
            </p>
            <p>알레르기가 있으신가요?</p>
          </div>
          <p class="text-sm text-gray-400 text-left">
            예) 새우, 땅콩, 우유, 메밀 등
          </p>
        </div>
  
        <div class="flex gap-3 w-full justify-center items-center max-w-[500px] my-auto">
          <button
              v-for="(card, index) in cards"
              :key="index"
              type="button"
              @click="handleSelect(index)"
              class="flex-1 min-h-[240px] max-h-[320px] px-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.97] sm:min-h-[280px] sm:max-h-[400px]"
              :class="
                selectedIndex === index
                  ? card.tone === 'yes'
                    ? 'bg-blue-500 text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)]'
                    : 'bg-red-500 text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)]'
                  : card.tone === 'yes'
                    ? 'bg-blue-500/10 text-white/80'
                    : 'bg-red-500/10 text-white/80'
              "
              >
              <div class="flex items-center justify-center">
                <CheckIcon v-if="card.tone === 'yes'" />
                <CloseIcon v-else />
              </div>
              <div class="flex flex-col items-center gap-1">
                <span class="text-base font-medium">
                  {{ card.label }}
                </span>
              </div>
            </button>
        </div>
        <p class="text-gray-400 text-sm mb-2 text-center">
          <span class="text-[#D3F921]">1</span>/2
        </p>
      </div>
  
    </AppLayout>
  </template>