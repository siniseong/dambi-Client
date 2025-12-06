import { ref } from 'vue'

export function useTypewriter() {
  const typeText = async (text, targetRef, speed = 100) => {
    for (const char of [...text]) {
      targetRef.value += char
      await new Promise(resolve => setTimeout(resolve, speed))
    }
  }

  return { typeText }
}
