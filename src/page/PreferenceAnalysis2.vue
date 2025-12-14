<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AnalysisPage from '../components/page/AnalysisPage.vue'

const router = useRouter()
const selectedIndex = ref(null)

const options = [
  '매운 음식을 전혀 못 먹어요',
  '조금 매운 정도는 괜찮아요',
  '보통 매운 정도를 좋아해요',
  '아주 매운 음식을 좋아해요'
]

const handleNext = (index) => {
  console.log('Selected:', index, options[index])
}
</script><template>
  <AnalysisPage
    page-title="음식 맞춤 추천 취향 분석"
    :question-number="2"
    question-text="항목에서 매운 음식에 대한 선호도를 골라주세요."
    :options="options"
    :current-page="2"
    :total-pages="2"
    v-model="selectedIndex"
    @next="handleNext"
  />
</template>