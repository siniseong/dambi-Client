<script setup>
  import { useRouter } from 'vue-router'
  import AppLayout from '../components/AppLayout.vue'
  import PageHeader from '../components/PageHeader.vue'
  
  const router = useRouter()
  const question = '매운 맛과 순한 맛 중, 어느 쪽이 더 좋으세요?'
  </script>
  
  <template>
    <AppLayout>
      <PageHeader title="음식 맞춤 추천 취향 분석"/>
      <div class="flex-1 flex flex-col justify-center">
          <div class="text-gray-900 text-3xl font-bold">
            <p>
              {{ question }}
            </p>
          </div>
        </div>
    </AppLayout>
  </template>