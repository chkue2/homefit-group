<template>
  <div class="group-care-card">
    <p class="card-section-title">
      개개인을 위한 세심한 맞춤케어가 가능한 <br />1:1 프로그램입니다
    </p>
    <p class="card-section-subtitle">
      마사지베드 혹은 매트를 놓을 최소한의 공간만 필요하며 준비물은 계약기간
      동안 무상 대여해드립니다.
    </p>
    <div class="card-wrapper">
      <div class="card-list">
        <div class="card-container">
          <p class="card-emoji">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/care-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/care-emoji.png"
              />
            </picture>
          </p>
          <p class="card-title">근골격계 케어</p>
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-program-1-1.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-program-1-1.jpg"
            />
          </picture>
          <p class="card-content">
            업무를 하는 동안 피로도가 높아진 부위는 스트레칭, 이완해주고 잘못된
            자세를 바로잡아주는 맞춤 케어를 진행합니다.
          </p>
          <div class="tag-content">
            <p>
              <b>전문가:</b> 물리치료사, 스포츠의학 전공자, 도수치료 전문가 등
            </p>
            <p><b>준비물:</b> 마사지베드, 근골격케어 도구 등</p>
          </div>
        </div>
        <div class="card-container">
          <p class="card-emoji">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji.png"
              />
            </picture>
          </p>
          <p class="card-title">힐링 테라피</p>
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-program-2-1.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-program-2-1.jpg"
            />
          </picture>
          <p class="card-content">
            긴장된 몸과 마음을 사운드(싱잉볼), 향(아로마) 등을 활용하여 편안하게
            풀어주고 마음 챙김을 위한 힐링의 시간을 갖습니다.
          </p>
          <div class="tag-content">
            <p><b>전문가:</b> 테라피 자격증, 명상 관련 자격증 보유 전문가 등</p>
            <p><b>준비물:</b> 매트, 싱잉볼, 아로마 등 테라피 도구</p>
          </div>
        </div>
      </div>
      <div class="card-tags">
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/clock-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/clock-emoji.png"
            />
          </picture>
          인당 25분 (상담+관리)</span
        >
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/wrestling-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/wrestling-emoji.png"
            />
          </picture>
          수업 형태: 1:1 맞춤</span
        >
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/building-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/building-emoji.png"
            />
          </picture>
          충분한 공간 없어도 OK!</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import '~/assets/css/swiper.min.css'
export default {
  name: 'GroupCareCard',
  data: () => ({
    swiper: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.initializeSwiper()
    })
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper('.review-container', {
        slidesPerView: 'auto',
        spaceBetween: 24,
      })
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/cards.scss';
</style>
