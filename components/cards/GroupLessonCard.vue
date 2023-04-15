<template>
  <div class="group-lesson-card">
    <p class="card-section-title">
      전체 임직원의 유대감을 강화할 수 있는 <br />프로그램입니다.
    </p>
    <p class="card-section-subtitle">
      각 기업별 사무실 환경에 최적화된 공간 맞춤형 프로그램을 제안해 드립니다.
    </p>
    <div class="card-wrapper">
      <div class="card-list list-flex">
        <div
          v-for="(card, index) in groupLessonCards"
          :key="index"
          class="card-container"
        >
          <p class="card-emoji">
            {{ card.emoji }}
          </p>
          <p class="card-title">{{ card.name }}</p>
          <img :src="card.image_url" alt class="card-image" />
          <p class="card-content">
            {{ card.description }}
          </p>
          <p class="card-tags-text">
            {{ card.tag }}
          </p>
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
          60분 수업</span
        >
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/group-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/group-emoji.png"
            />
          </picture>
          4~25인 단체</span
        >
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/length-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/length-emoji.png"
            />
          </picture>
          공간 맞춤형 프로그램</span
        >
        <span class="card-tag">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/computer-emoji.webp
              "
              type="image/webp"
            />
            <img
              class="card-image"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/computer-emoji.png"
            />
          </picture>
          비대면 수업 가능</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupLessonCard',
  props: {
    groupLessonCards: { type: Array, default: () => [] },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/cards.scss';
.card-image {
  height: 200px;
}
.card-emoji {
  font-size: 52px;
  line-height: 52px;
}
</style>
