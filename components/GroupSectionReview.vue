<template>
  <div id="groupSectionReview" class="group-section">
    <div class="group-auto-size section-review-container">
      <p class="review-section-title">
        임직원 98% 이상이 추천하는 <br />압도적 복지
        <picture>
          <source
            srcset="
              https://dcse8twossp9.cloudfront.net/static/img/v2/icon/ohoh-mo-2.svg
            "
            media="all and (max-width: 1023px)"
          />
          <img
            class="review-icon"
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/ohoh-2.svg"
          />
        </picture>
      </p>
      <div class="review-container swiper-no-swiping">
        <div class="swiper-wrapper">
          <div
            v-for="review in reviews"
            :key="review.id"
            class="swiper-slide review-box swiper-no-swiping"
            :class="review.theme"
          >
            <div class="review-top">
              <p class="review-type">{{ review.type }} 후기</p>
              <p class="review-content">
                {{ review.content }}
              </p>
            </div>
            <div class="review-bottom">
              <picture>
                <source :srcset="review.iconWebpUrl" type="image/webp" />

                <img class="review-logo" :src="review.iconPngUrl" />
              </picture>
              <p class="review-name">{{ review.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="review-play-button" tabindex="0">
        <i
          :class="isSwiperPlay ? 'button--pause' : 'button--play'"
          @click="handlerClickSwiperPalyAndPause"
        ></i>
      </div>
      <div class="review-partner-list">
        <div class="partner-bg"></div>
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="partner-logo"
        >
          <img :alt="partner.name" :src="partner.url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle'
import partnerList from '~/assets/js/group/partnerList'
import reviewList from '~/assets/js/group/reviewList'
import '~/assets/css/swiper.min.css'
export default {
  name: 'GroupSectionReview',
  mixins: [partnerList, reviewList],
  data: () => ({
    isSwiperPlay: true,
    swiper: null,
  }),
  mounted() {
    this.$nextTick(() => {
      this.initializeSwiper()
      this.handlerResizeEvent()
      document
        .querySelector('.review-container')
        .addEventListener('mouseover', this.stopSwiperAutoPlay, {
          passive: true,
        })
      document
        .querySelector('.review-container')
        .addEventListener(
          'mousedown',
          this.startSwiperAutoPlayAndRemoveMouseOver,
          { passive: true }
        )
      document
        .querySelector('.review-container')
        .addEventListener('mouseup', this.stopSwiperAutoPlayAndAddMouseOver, {
          passive: true,
        })
      window.addEventListener('resize', this.handlerResizeEvent, {
        passive: true,
      })
    })
  },
  beforeDestroy() {
    document
      .querySelector('.review-container')
      .removeEventListener('mouseover', this.stopSwiperAutoPlay)
    document
      .querySelector('.review-container')
      .removeEventListener('mouseout', this.startSwiperAutoPlay)
    document
      .querySelector('.review-container')
      .removeEventListener(
        'mousedown',
        this.startSwiperAutoPlayAndRemoveMouseOver
      )
    document
      .querySelector('.review-container')
      .removeEventListener('mouseup', this.stopSwiperAutoPlayAndAddMouseOver)
    window.removeEventListener('resize', this.handlerResizeEvent)
  },
  methods: {
    initializeSwiper() {
      this.swiper = new Swiper('.review-container', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        observer: true,
        loop: true,
        speed: 3000,
        allowTouchMove: false,
        noSwipingClass: 'swiper-no-swiping',
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
        },
      })
    },
    stopSwiperAutoPlay() {
      this.swiper.autoplay.stop()
      this.isSwiperPlay = false
    },
    startSwiperAutoPlay() {
      this.swiper.autoplay.start()
      this.isSwiperPlay = true
    },
    startSwiperAutoPlayAndRemoveMouseOver() {
      document
        .querySelector('.review-container')
        .removeEventListener('mouseover', this.stopSwiperAutoPlay)
      this.startSwiperAutoPlay()
    },
    stopSwiperAutoPlayAndAddMouseOver() {
      document
        .querySelector('.review-container')
        .addEventListener('mouseover', this.stopSwiperAutoPlay)
      this.stopSwiperAutoPlay()
    },
    handlerClickSwiperPalyAndPause() {
      if (this.swiper.autoplay.running) {
        this.stopSwiperAutoPlay()
      } else {
        this.startSwiperAutoPlay()
      }
    },
    handlerResizeEvent() {
      if (window.innerWidth > 1023) {
        document
          .querySelector('.review-container')
          .addEventListener('mouseout', this.startSwiperAutoPlay, {
            passive: true,
          })
      } else {
        document
          .querySelector('.review-container')
          .removeEventListener('mouseout', this.startSwiperAutoPlay)
      }
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/review.scss';
.review-play-button {
  display: none;
}
@media all and (max-width: 1023px) {
  .review-play-button {
    display: block;
    margin: 12px 0 40px;
    i {
      display: block;
      width: 40px;
      height: 40px;
      cursor: pointer;
      &.button--pause {
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/pause-circle-black.svg'
        );
      }
      &.button--play {
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/play-circle-black.svg'
        );
      }
    }
  }
}
</style>
