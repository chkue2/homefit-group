<template>
  <div id="groupSectionChat" class="group-section">
    <div class="group-auto-size section-chat-container">
      <div class="section-chat-header">
        <div class="chat-header-block">
          <img
            class="chat-icon"
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/arrow-back-black.svg"
          />
          <p class="chat-icon chat-icon--hidden icon--pc"></p>
        </div>

        <p class="chat-title">홈핏 기업 상담</p>
        <div class="chat-header-block">
          <img
            class="chat-icon"
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/search.svg"
          />
          <img
            class="chat-icon icon--pc"
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/menu-black.svg"
          />
        </div>
      </div>
      <div class="section-chat-contents">
        <div class="chat-contents-left">
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/chat-1.webp
              "
              type="image/webp"
            />
            <img
              class="chat-profile"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/chat-1.png"
            />
          </picture>
          <div class="chat-block">
            <p class="chat-name">홈핏 오피스 매니저</p>
            <p class="chat-content content--left">
              홈핏을 찾아주신 담당자님, <b>혹시 어떤 고민을 하고 계신가요?</b>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="0"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            안마의자, 헬스장 할인권 NO! <b>색다른 복지플랜</b>을 찾고 있어요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="150"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            <b>임직원들이 진짜 원하는 건강한</b> 복지를 해 주고 싶어요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            자세가 안 좋은 임직원을 위한 <b>근골격계 질환 예방 프로그램</b>을
            원해요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="450"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            깊은 심리 상담보다 마음의 부담이 덜한,
            <b>가볍게 힐링 할 수 있는 복지</b>를 원해요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            <b>임직원들과 함께 사내에서 참여</b>가 가능한 프로그램이 필요해요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="750"
          class="chat-contents-right"
        >
          <p class="chat-content content--right">
            <b>요즘 MZ세대 직원들이 좋아할</b>복지 프로그램을 찾고 있어요.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="900"
          class="chat-contents-left"
        >
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/chat-1.webp
              "
              type="image/webp"
            />
            <img
              class="chat-profile"
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/chat-1.png"
            />
          </picture>
          <div class="chat-block">
            <p class="chat-name">홈핏 오피스 매니저</p>
            <p class="chat-content content--left">
              지금이 바로 <b>홈핏 오피스 프로그램을 만나야 할 때!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'GroupSectionChat',
  mounted() {
    this.$nextTick(() => {
      AOS.init()
    })
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionChat {
  background-color: #b4cddc;
}
.section-chat-container {
  margin: 0 auto;
}
.section-chat-header {
  width: 100%;
  height: 80px;
  @include flexBox(row, space-between, center);
}
.chat-header-block {
  @include flexBox(row, center, center);
  gap: 12px;
}
.chat-title {
  flex: 1;
  font-size: 20px;
  text-align: center;
  font-weight: $bold;
}
.chat-icon {
  width: 36px;
  height: 36px;
  &.chat-icon--hidden {
    opacity: 0;
    visibility: hidden;
  }
  &.icon--pc {
    display: block;
  }
}
.section-chat-contents {
  @include flexBox(column);
  gap: 12px;
  padding: 120px 0;
}
.chat-contents-left {
  width: 100%;
  @include flexBox(row, flex-start, flex-start);
  gap: 12px;
}
.chat-contents-right {
  width: 100%;
  @include flexBox(row, flex-end, flex-start);
}
.chat-profile {
  width: 60px;
  height: 60px;
}
.chat-block {
  flex: 1;
  @include flexBox(column);
}
.chat-name {
  padding: 8px 0;
  color: #555555;
}
.chat-content {
  display: inline-block;
  max-width: 75%;
  padding: 18px 24px;
  font-size: 20px;
  line-height: 36px;
  &.content--left {
    background-color: #ffffff;
    border-radius: 0 36px 36px 36px;
  }
  &.content--right {
    background-color: #ffe600;
    border-radius: 36px 36px 0 36px;
  }
  b {
    font-weight: $medium;
  }
}
@media all and (max-width: 1023px) {
  .section-chat-header {
    width: 100%;
    height: auto;
    padding-top: 15px;
    padding-bottom: 40px;
    @include flexBox(row, space-between, center);
  }
  .chat-header-block {
    @include flexBox(row, center, center);
    gap: 12px;
  }
  .chat-title {
    flex: 1;
    font-size: 16px;
    font-weight: $medium;
  }
  .chat-icon {
    width: 24px;
    height: 24px;
    &.icon--pc {
      display: none;
    }
  }
  .section-chat-contents {
    gap: 8px;
    padding: 0 0 60px;
  }
  .chat-contents-left {
    gap: 8px;
  }
  .chat-profile {
    width: 34px;
    height: 34px;
  }
  .chat-name {
    padding: 2px 0 4px;
    font-size: 12px;
  }
  .chat-content {
    display: inline-block;
    max-width: 75%;
    padding: 8px;
    font-size: 15px;
    line-height: normal;
    color: #555555;
    position: relative;
    &::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 12px;
      top: 2px;
      position: absolute;
    }
    &.content--left {
      border-radius: 12px;
      &::before {
        left: -2px;
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/chat-bubble-left-white.svg'
        );
      }
    }
    &.content--right {
      border-radius: 12px;
      &::before {
        right: -2px;
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/chat-bubble-right-yellow.svg'
        );
      }
    }
    b {
      color: #000000;
    }
  }
}
</style>
