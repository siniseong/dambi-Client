import { ref, onUnmounted } from 'vue'

export function useCountdown(initialCount = 3) {
  const countdown = ref(initialCount)
  let interval = null

  const start = (onComplete) => {
    countdown.value = initialCount
    interval = setInterval(() => {
      countdown.value--
      if (countdown.value <= 0) {
        stop()
        onComplete?.()
      }
    }, 1000)
  }

  const stop = () => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  const reset = () => {
    stop()
    countdown.value = initialCount
  }

  onUnmounted(() => stop())

  return {
    countdown,
    start,
    stop,
    reset
  }
}