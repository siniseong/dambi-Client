<script setup>
import { watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// ESC 키로 닫기
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleEsc)
    document.body.style.overflow = ''
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
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex justify-center">
        <!-- 전체 화면: 아래 100% → 위로 갈수록 연해지지만 30%까지만 -->
        <div 
          class="absolute inset-0 bg-[linear-gradient(to_top,rgb(0,0,0)_0%,rgb(0,0,0)_30%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0.6)_65%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.3)_100%)]"
          @click="handleBackdropClick"
        />
        
        <!-- 콘텐츠 -->
        <div 
          class="relative w-full max-w-[430px] flex flex-col justify-end px-6 pb-8 pointer-events-none"
        >
          <div class="pointer-events-auto" @click.stop>
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* 전체 페이드 + 슬라이드 */
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

