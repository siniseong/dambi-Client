<script setup>
import { computed } from 'vue'
import AppLayout from '../AppLayout.vue'
import PageHeader from '../PageHeader.vue'
import SeasonalEffect from '../effects/SeasonalEffect.vue'

const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  questionNumber: {
    type: Number,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => Array.isArray(value) && value.length > 0
  },
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  modelValue: {
    type: Number,
    default: null
  },
  required: {
    type: Boolean,
    default: true
  },
  nextButtonText: {
    type: String,
    default: '다음'
  }
})

const emit = defineEmits(['update:modelValue', 'next'])

const selectedIndex = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleSelect = (index) => {
  selectedIndex.value = selectedIndex.value === index ? null : index
}

const goNext = () => {
  if (selectedIndex.value === null && props.required) return
  emit('next', selectedIndex.value)
}
</script>

<template>
  <AppLayout>
    <SeasonalEffect />
    <PageHeader :title="pageTitle" />

    <div class="flex-1 flex flex-col w-full pt-12">
      <div class="flex-1 flex flex-col gap-4">
        <h1 class="question-title text-white text-4xl font-bold text-left break-keep">
          <span class="text-[#D3F921]">{{ questionNumber }}.</span> {{ questionText }}
        </h1>

        <div v-if="required" class="text-gray-300 font-medium text-sm mt-1 mb-[-4px]">
          <span class="text-red-500">*</span> 아래에서 하나를 선택해주세요.
        </div>
        <div class="w-full flex flex-col gap-3">
          <button 
            v-for="(option, index) in options"
            :key="index"
            @click="handleSelect(index)"
            class="group relative w-full h-16 rounded-xl transition-all duration-300 active:scale-[0.98] flex items-center justify-between px-5 overflow-hidden gap-3"
            :class="[
              selectedIndex === index
                ? 'bg-white/5'
                : 'bg-white/5 hover:bg-white/10'
            ]"
          >
            <span class="text-white text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0 text-left option-text">
              {{ option }}
            </span>

            <div 
              v-if="selectedIndex === index"
              class="flex items-center justify-center w-6 h-6 rounded-full bg-[#D3F921] flex-shrink-0"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="#1a1a1a" 
                  stroke-width="2.5" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                />
              </svg>  
            </div>
            <div 
              v-else
              class="w-6 h-6 rounded-full border-2 border-white/30 flex-shrink-0"
            ></div>
          </button>
        </div>
      </div>
    </div>

    <div class="text-white/60 text-sm text-center my-4">
      <span class="text-[#D3F921]">{{ currentPage }}</span>/{{ totalPages }}
    </div>

    <button 
      @click="goNext" 
      :disabled="selectedIndex === null && required"
      class="w-full h-[50px] rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 font-semibold bg-[#D3F921] hover:bg-[#E5FF3A] active:bg-[#B8D91D] text-[#1a1a1a] text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ nextButtonText }}
    </button>
  </AppLayout>
</template>

<style scoped>
@font-face {
    font-family: 'SlowGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/neurimboGothicRegular.woff2') format('woff2');
}

.question-title {
    font-family: 'SlowGothic', sans-serif;
    line-height: 1.2;
    letter-spacing: -0.02em;
}

@media (max-width: 359px) {
  .option-text {
    font-size: 0.875rem;
  }
}
</style>

