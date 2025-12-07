export function useTypewriter() {
  const typeText = async (text, targetRef, speed = 100) => {
    targetRef.value = ''
    for (let i = 0; i < text.length; i++) {
      targetRef.value += text[i]
      await new Promise(resolve => setTimeout(resolve, speed))
    }
  }

  return {
    typeText
  }
}