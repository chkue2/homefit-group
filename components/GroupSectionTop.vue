<template>
  <div id="groupSectionTop" class="group-section group-h-100">
    <GroupHeaderTransparent />
    <div class="top-bg-muk"></div>
    <video class="top-video" autoplay muted loop playsinline preload="auto">
      <source
        src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-mo-video-3.mp4"
      />
    </video>
    <div class="group-auto-size section-top-container">
      <div class="top-contents">
        <p class="top-subtitle">
          압도적 복지의 시작! <br />홈핏 오피스 프로그램
        </p>
        <p class="top-title">우리는 오롯이 임직원의<br />건강만을 생각합니다</p>
      </div>
      <div class="top-buttons">
        <p class="top-button button--white" @click="openIntroSendModal">
          소개서 받기
        </p>
        <p class="top-button button--gra" @click="openRegModal">
          무료체험 신청
        </p>
      </div>
      <p class="top-caption">· 기업 유선 상담 : 010-7569-8253</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import GroupHeaderTransparent from '~/components/group/GroupHeaderTransparent'
export default {
  name: 'GroupSectionTop',
  components: {
    GroupHeaderTransparent,
  },
  data: () => ({
    isMobile: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.isMobile = window.innerWidth < 1024
      this.initVideoSrc()
      window.addEventListener('resize', this.handlerResizeEvent)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handlerResizeEvent)
  },
  methods: {
    ...mapActions('group', ['openIntroSendModal', 'openRegModal']),
    initVideoSrc() {
      const target = document.querySelector('.top-video')
      if (window.innerWidth >= 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-pc-video-2.mp4'
      } else if (window.innerWidth < 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-mo-video-3.mp4'
      }
    },
    handlerResizeEvent() {
      const target = document.querySelector('.top-video')
      if (this.isMobile && window.innerWidth >= 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-pc-video-2.mp4'
        this.isMobile = false
      } else if (!this.isMobile && window.innerWidth < 1024) {
        target.src =
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-mo-video-3.mp4'
        this.isMobile = true
      }
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
.top-bg-muk {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.top-video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  object-fit: cover;
}
.section-top-container {
  padding-top: 240px;
  padding-bottom: 240px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
  margin: 0 auto;
  height: calc(100vh - 80px);
}
.top-contents {
  @include flexBox(column);
}
.top-subtitle {
  font-size: 24px;
  font-weight: $medium;
  color: #ffffff;
  margin-bottom: 24px;
  br {
    display: none;
  }
}
.top-title {
  font-size: 48px;
  font-weight: $bold;
  color: #ffffff;
  line-height: normal;
}
.top-buttons {
  @include flexBox();
  gap: 12px;
}
.top-button {
  width: 240px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border-radius: 12px;
  font-size: 20px;
  font-weight: $medium;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  &.button--white {
    background-color: #ffffff;
  }
  &.button--gra {
    background-image: linear-gradient(104deg, #6400c8, #ff7d00);
    color: #ffffff;
  }
}
p.top-caption {
  color: #ffffff;
  margin-top: -16px;
  font-weight: $medium;
}
@media all and (max-height: 900px) {
  .section-top-container {
    height: auto;
  }
}
@media all and (max-width: 1023px) {
  .top-bg-muk {
    display: none;
  }
  .top-video {
    height: 100%;
    top: unset;
    bottom: 0;
  }
  .section-top-container {
    height: calc(100vh - 54px);
    padding-top: 18px;
    padding-bottom: 0;
    align-content: flex-start;
    justify-content: flex-end;
    padding-bottom: calc(
      100vh - (var(--vh, 1vh) * 100) + env(safe-area-inset-bottom) +
        env(safe-area-inset-top) + 24px
    );
    position: relative;
    z-index: 3;
    margin: 0 auto;
    transition: padding-bottom 0.3s ease-out;
    will-change: scroll-position;
    gap: 0;
  }
  .top-contents {
    @include flexBox(column);
  }
  .top-subtitle {
    font-size: 20px;
    font-weight: $regular;
    margin-bottom: 4px;
    br {
      display: block;
    }
  }
  .top-title {
    font-size: 27px;
    margin-bottom: 12px;
  }
  .top-buttons {
    @include flexBox();
    gap: 8px;
  }
  .top-button {
    width: auto;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    padding: 0 14px;
  }
  p.top-caption {
    color: #ffffff;
    margin-top: 8px;
    font-weight: $regular;
    font-size: 14px;
  }
}
</style>
