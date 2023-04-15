<template>
  <div id="groupHeaderWhite" :class="{ show: isHeaderShow }">
    <div class="group-auto-size group-header-white">
      <img
        class="group-header-logo"
        src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/logo-black.svg"
        @click="moveToScrollTop"
      />
      <div class="group-header-right pc">
        <a class="group-header-home" href="/">홈으로</a>
        <div class="group-header-line"></div>
        <p
          class="group-header-button button--white"
          @click="openIntroSendModal"
        >
          소개서 받기
        </p>
        <p class="group-header-button button--gra" @click="openRegModal">
          무료체험 신청
        </p>
      </div>
      <div class="group-header-right mo">
        <p class="group-header-button button--gra" @click="openRegModal">
          무료체험
        </p>
        <i class="group-header-menu" @click="toggleSideMenu(true)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'GroupHeaderTransparent',
  props: {
    isHeaderShow: { type: Boolean, default: false },
  },
  methods: {
    ...mapActions('group', [
      'openIntroSendModal',
      'moveToScrollTop',
      'openRegModal',
      'toggleSideMenu',
    ]),
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupHeaderWhite {
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  margin: 0 auto;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
  will-change: scroll-position;
  &.show {
    visibility: visible;
    opacity: 1;
  }
}
.group-header-white {
  height: 100%;
  @include flexBox(row, space-between, center);
}
.group-header-logo {
  width: 132px;
  height: 24px;
  cursor: pointer;
}
.group-header-right {
  @include flexBox(row, flex-end, center);
  &.pc {
    display: flex;
  }
  &.mo {
    display: none;
  }
}
.group-header-home {
  font-weight: $medium;
  cursor: pointer;
}
.group-header-line {
  width: 2px;
  height: 20px;
  background-color: #e1e1e1;
  margin: 0 24px;
}
.group-header-button {
  width: 160px;
  height: 48px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: $medium;
  @include flexBox(row, center, center);
  &.button--white {
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    margin-right: 12px;
  }
  &.button--gra {
    background-image: linear-gradient(107deg, #6400c8, #ff7d00);
    color: #ffffff;
  }
}
.group-header-menu {
  display: block;
  width: 24px;
  height: 24px;
  @include defaultIcon(
    'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/menu-black.svg'
  );
  cursor: pointer;
  margin-left: 12px;
}
@media all and (max-width: 1023px) {
  #groupHeaderWhite {
    height: 54px;
  }
  .group-header-right {
    &.pc {
      display: none;
    }
    &.mo {
      display: flex;
    }
  }
  .group-header-button {
    width: 104px;
    height: 32px;
    font-size: 14px;
  }
}
</style>
