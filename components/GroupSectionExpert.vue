<template>
  <div id="groupSectionExpert" class="group-section">
    <div class="section-expert-container">
      <p class="group-auto-size expert-title">
        최고의 효과를 만들 수 있는 <br />최고의 전문가들과 함께합니다
      </p>
      <p class="group-auto-size expert-subtitle">
        전국 1,500여명의 홈핏 코치와 전국 어디서나! <br />전 직원에게 형평성
        있는 복지 혜택을 제공해보세요.
      </p>
      <div
        v-for="(list, index) in expertList"
        :id="`expertList0${index + 1}`"
        :key="index"
        class="expert-list swiper-no-swiping"
      >
        <div class="swiper-wrapper">
          <div
            v-for="expert in list"
            :key="expert.id"
            class="swiper-slide swiper-no-swiping"
          >
            <picture>
              <source :srcset="expert.webpUrl" type="image/webp" />
              <img class="expert-image" :src="expert.jpgUrl" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import '~/assets/css/swiper.min.css'
import expertList from '~/assets/js/group/expertList'
export default {
  name: 'GroupSectionExpert',
  mixins: [expertList],
  data: () => ({
    swiper01: null,
    swiper02: null,
    swiper03: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.initializeSwiper()
    })
  },
  methods: {
    initializeSwiper() {
      this.swiper01 = new Swiper('#expertList01', {
        slidesPerView: 'auto',
        spaceBetween: 2,
        loop: true,
        autoplay: {
          reverseDirection: false,
          disableOnInteraction: false,
          delay: 1,
        },
        speed: 2000,
        observeParents: true,
        centeredSlides: true,
        noSwipingClass: 'swiper-no-swiping',
      })
      this.swiper02 = new Swiper('#expertList02', {
        slidesPerView: 'auto',
        spaceBetween: 2,
        loop: true,
        autoplay: {
          reverseDirection: true,
          disableOnInteraction: false,
          delay: 1,
        },
        speed: 2000,
        observeParents: true,
        centeredSlides: true,
        noSwipingClass: 'swiper-no-swiping',
      })
      this.swiper03 = new Swiper('#expertList03', {
        slidesPerView: 'auto',
        spaceBetween: 2,
        loop: true,
        autoplay: {
          reverseDirection: false,
          disableOnInteraction: false,
          delay: 1,
        },
        speed: 2000,
        observeParents: true,
        centeredSlides: true,
        noSwipingClass: 'swiper-no-swiping',
      })
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionExpert {
  padding: 120px 0;
}
.expert-title {
  font-size: 36px;
  font-weight: $bold;
  br {
    display: none;
  }
}
.expert-subtitle {
  font-size: 20px;
  font-weight: $medium;
  padding-top: 12px;
  padding-bottom: 40px;
  br {
    display: none;
  }
}
.expert-list {
  & + .expert-list {
    margin-top: 2px;
  }
  .swiper-slide {
    width: 300px;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
@media all and (max-width: 1023px) {
  #groupSectionExpert {
    padding: 60px 0;
  }
  .expert-title {
    font-size: 24px;
    br {
      display: block;
    }
  }
  .expert-subtitle {
    font-size: 16px;
    font-weight: $regular;
    padding-top: 12px;
    padding-bottom: 40px;
    br {
      display: block;
    }
  }
  .expert-list {
    .swiper-slide {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
