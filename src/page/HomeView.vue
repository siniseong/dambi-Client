<script setup>
  import { ref } from 'vue'
  import AppLayout from '../components/AppLayout.vue'
  import PlusIcon from '../components/icons/PlusIcon.vue'
  import BookmarkIcon from '../components/icons/BookmarkIcon.vue'
  import ChevronRightIcon from '../components/icons/ChevronRightIcon.vue'
  import AdSense from '../components/home/AdSense.vue'
  import Tag from '../components/home/Tag.vue'
  import tagImg from '../assets/tag.png'

  const viewMode = ref('list')
  const isBookmarked = ref(false)
  
</script>

<template>
  <AppLayout>
    <div class="flex-1 flex flex-col">
      <div class="w-full max-w-[500px] mx-auto">
        <div class="mt-6 mb-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <button
                @click="viewMode = 'list'"
                class="text-2xl font-semibold"
                :class="viewMode === 'list' 
                  ? 'text-black font-bold' 
                  : 'text-gray-400'"
              >
                리스트
              </button>
              <button
                @click="viewMode = 'calendar'"
                class="text-2xl font-semibold"
                :class="viewMode === 'calendar' 
                  ? 'text-black font-bold' 
                  : 'text-gray-400'"
              >
                캘린더
              </button>
            </div>
            <button class="text-gray-700">
              <PlusIcon />
            </button>
          </div>
        </div>

        <div class="mb-3">
          <div class="bg-[#F3F4F6] p-3 rounded-xl h-11 flex items-center overflow-hidden">
            <div class="flex items-center justify-between w-full gap-2">
              <div class="flex items-center gap-2">
                <p class="text-black text-sm font-medium flex items-center gap-1">
                  <img :src="tagImg" alt="tag" class="w-6 h-6" />
                  <span class="font-poppins font-semibold">D-8</span>
                  <span class="text-black ml-1">아뮤즈 개발팀 회식 + 연구실</span>
                </p>
              </div>
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <AdSense />
        <Tag />

        <!-- <div class="mb-4">
          <div class="bg-[#F3F4F6] p-5 rounded-2xl">
            <div class="flex items-center justify-between">
              <div class="flex-1">

                <div class="flex items-center justify-between mt-2">
                  <h3 class="text-black text-2xl font-bold daegu-font leading-none">3학년 4반 마지막 회식</h3>
                  <button 
                    @click="isBookmarked = !isBookmarked"
                    class="text-black ml-2"
                  >
                    <BookmarkIcon :isFilled="isBookmarked" />
                  </button>
                </div>
                <div class="space-y-1">
                  <div class="text-gray-900 text-sm">• 장소 : 베이스이즈나이스(마포구 도화동)</div>
                  <div class="text-gray-900 text-sm">• 시간: 8월 2일 (토) PM 1:00</div>
                  <div class="text-gray-900 text-sm">• 인원 : 총 5명 모집</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.daegu-font {
  font-family: 'SlowGothic', sans-serif;
  font-weight: normal;
}

</style>