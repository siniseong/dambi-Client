<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const isVisible = ref(false)
const animationState = ref('closed')

watch(() => props.isOpen, async (newVal) => {
  if (newVal) {
    isVisible.value = true
    animationState.value = 'opening'
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    await nextTick()
    requestAnimationFrame(() => {
      animationState.value = 'open'
    })
  } else {
    animationState.value = 'closing'
    document.removeEventListener('keydown', handleEsc)
    document.body.style.overflow = ''
    setTimeout(() => {
      isVisible.value = false
      animationState.value = 'closed'
    }, 280)
  }
})

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

const handleBackdropClick = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 z-50 flex justify-center" 
      @touchmove.prevent
    >
      <div 
        class="backdrop absolute inset-0 bg-[linear-gradient(to_top,rgb(0,0,0)_0%,rgb(0,0,0)_30%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.3)_100%)]"
        :class="{
          'backdrop-enter': animationState === 'opening',
          'backdrop-open': animationState === 'open',
          'backdrop-leave': animationState === 'closing'
        }"
        @click="handleBackdropClick"
      />

      <div 
        class="sheet-content relative w-full max-w-[430px] flex flex-col justify-end px-6 pb-8"
        :class="{
          'sheet-enter': animationState === 'opening',
          'sheet-open': animationState === 'open',
          'sheet-leave': animationState === 'closing'
        }"
      >
        <div class="relative" @click.stop>
          <button
            @click="emit('close')"
            class="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center text-white hover:opacity-70 active:opacity-50 transition-opacity z-10"
            aria-label="닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.backdrop {
  opacity: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.backdrop-enter {
  opacity: 0;
}

.backdrop-open {
  opacity: 1;
  -webkit-transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  transition: opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

.backdrop-leave {
  opacity: 0;
  -webkit-transition: opacity 0.28s cubic-bezier(0.32, 0.72, 0, 1);
  transition: opacity 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}

.sheet-content {
  -webkit-transform: translateY(100%) translateZ(0);
  transform: translateY(100%) translateZ(0);
  opacity: 0;
}

.sheet-enter {
  -webkit-transform: translateY(100%) translateZ(0);
  transform: translateY(100%) translateZ(0);
  opacity: 0;
}

.sheet-open {
  -webkit-transform: translateY(0) translateZ(0);
  transform: translateY(0) translateZ(0);
  opacity: 1;
  -webkit-transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

.sheet-leave {
  -webkit-transform: translateY(40%) translateZ(0);
  transform: translateY(40%) translateZ(0);
  opacity: 0;
  -webkit-transition: transform 0.28s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  transition: transform 0.28s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
</style>