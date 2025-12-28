<script setup>
  import { ref } from 'vue'
  
  const tags = ['전체', '확정', '대기 중', '즐겨찾기', '내가 만든', '참여한']
  const selectedTag = ref('전체')
  
  const selectTag = (tag) => {
    selectedTag.value = tag
  }
</script>

<template>
  <div class="mb-4 overflow-x-auto scrollbar-hide">
    <div class="flex gap-2 pb-2">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="selectTag(tag)"
        class="flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors"
        :class="selectedTag === tag 
          ? 'bg-[#ABC0D1]/30 border border-[#ABC0D1] text-[#5A7A9A] font-semibold' 
          : 'bg-[#F3F4F6] text-gray-600'"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>