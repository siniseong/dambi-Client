import { onMounted } from 'vue'

export function useKakaoShare() {
  onMounted(() => {
    const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
    
    if (window.Kakao && !window.Kakao.isInitialized() && kakaoKey) {
      window.Kakao.init(kakaoKey);
    }
  })

  const shareKakao = ({ title, description, imageUrl, buttons }) => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: imageUrl || 'https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: buttons || [
        {
          title: '추천 받으러 가기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  }

  return {
    shareKakao
  }
}