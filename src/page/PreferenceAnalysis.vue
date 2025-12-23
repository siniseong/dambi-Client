<script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import AppLayout from '../components/AppLayout.vue'
  import PageHeader from '../components/PageHeader.vue'
  import CheckIcon from '../components/icons/CheckIcon.vue'
  import CloseIcon from '../components/icons/CloseIcon.vue'
  
  const router = useRouter()
  const selectedIndex = ref(null)
  const currentQuestionIndex = ref(0)
  const answers = ref([])

  const questions = ref([
    '매운 맛과 순한 맛 중, 어느 쪽이 더 좋으세요?',
    '뜨끈한 국물 요리 좋아하시나요?',
    '가볍게 먹는 편과 든든하게 먹는 편 중 어느 쪽이 더 좋으세요?',
    '혼자 드실까요, 함께 드실까요?',
    '가게에서 드시나요, 배달로 드시나요?'
  ])
  
  const cardSets = ref([
    [
      { label: '가게', tone: 'yes', value: 'store' },
      { label: '배달 / 포장', tone: 'no', value: 'delivery' }
    ]
  ])
  
  const getDefaultYesNoCards = () => [
    { label: '예', tone: 'yes', value: 'yes' },
    { label: '아니요', tone: 'no', value: 'no' }
  ]

  const currentCards = computed(() => {
    if (currentQuestionIndex.value === questions.value.length - 1) {
      return cardSets.value[0]
    }
    return getDefaultYesNoCards()
  })
  
  const handleSelect = (index) => {
    selectedIndex.value = index
    const choice = currentCards.value[index]
    answers.value[currentQuestionIndex.value] = choice.value

    if (currentQuestionIndex.value < questions.value.length - 1) {
      setTimeout(() => {
        currentQuestionIndex.value += 1
        selectedIndex.value = null
      }, 180)
    }
  }
  </script>
  
  <template>
    <AppLayout>
      <PageHeader title="음식 맞춤 추천 취향 분석"/>
  
      <div class="flex-1 flex flex-col justify-center">
        <div class="flex flex-col gap-4 max-w-[500px] mx-auto w-full">
          <div class="text-gray-900 text-3xl font-bold break-keep">
            <p
              class="text-[#D3F921] text-2xl mb-2"
              style="font-family: 'Poppins', sans-serif;"
            >
              {{ currentQuestionIndex + 1 }}/{{ questions.length }}
            </p>
            <p>
              {{ questions[currentQuestionIndex] }}
            </p>
          </div>
          <p class="text-sm text-gray-600 mt-[-6px]">
            아래 선택지 중 한 가지를 편하게 골라 주세요.
          </p>
          
          <div class="flex gap-3 w-full justify-center items-center mt-8">
            <button
                v-for="(card, index) in currentCards"
                :key="index"
                type="button"
                @click="handleSelect(index)"
                class="flex-1 min-h-[240px] max-h-[320px] px-6 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-200 active:scale-[0.97] sm:min-h-[280px] sm:max-h-[400px]"
                :class="
                  currentQuestionIndex === questions.length - 1
                    ? selectedIndex === index
                      ? 'bg-[#D3F921] text-[#1a1a1a] shadow-[0_18px_40px_rgba(0,0,0,0.2)]'
                      : 'bg-white/80 text-gray-700 border border-gray-200'
                    : selectedIndex === index
                      ? card.tone === 'yes'
                        ? 'bg-blue-500 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]'
                        : 'bg-red-500 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]'
                      : card.tone === 'yes'
                        ? 'bg-blue-500/10 text-gray-700 border border-blue-200'
                        : 'bg-red-500/10 text-gray-700 border border-red-200'
                "
                >
                <div class="flex items-center justify-center">
                  <!-- 5번 질문 (가게/배달)에만 특별한 아이콘 사용 -->
                  <template v-if="currentQuestionIndex === questions.length - 1">
                    <!-- 가게 아이콘 -->
                    <svg
                      v-if="card.value === 'store'"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <!-- 포장 아이콘 -->
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-14 h-14"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </template>
                  <!-- 나머지 질문들은 기존 체크/X 아이콘 -->
                  <template v-else>
                    <CheckIcon v-if="card.tone === 'yes'" />
                    <CloseIcon v-else />
                  </template>
                </div>
                <div class="flex flex-col items-center gap-1">
                  <span class="text-base font-medium">
                    {{ card.label }}
                  </span>
                </div>
              </button>
          </div>
        </div>
    </div>
      
      <!-- 질문 진행도: 좌우 구분선 사이 중앙에 5/5 배치 -->
      <div
        class="w-full max-w-[500px] mx-auto mt-4 mb-2 flex items-center gap-3 text-gray-500 text-sm"
      >
        <div class="flex-1 border-t border-gray-300"></div>
        <p class="shrink-0">
          <span class="text-[#D3F921]">{{ currentQuestionIndex + 1 }}</span
          >/{{ questions.length }}
        </p>
        <div class="flex-1 border-t border-gray-300"></div>
      </div>
  
    </AppLayout>
  </template>