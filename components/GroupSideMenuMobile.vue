<template>
  <div id="groupSideMenuMobile" :class="{ 'side-open': isSideMenu }">
    <div class="side-close">
      <i @click="toggleSideMenu(false)"></i>
    </div>
    <a class="side-menu" @click="handlerClickMoveToHome"> 홈으로 </a>
    <a class="side-menu" @click="handlerClickOpenIntroSendModal">
      소개서 받기
    </a>
    <p class="side-button" @click="handlerClickOpenRegModal">무료체험 신청</p>
    <p class="side-bottom">© 2023 HOMEFIT</p>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'GroupSideMenuMoble',
  computed: {
    ...mapState('group', ['isSideMenu']),
  },
  methods: {
    ...mapActions('group', [
      'toggleSideMenu',
      'moveToScrollTop',
      'openIntroSendModal',
      'openRegModal',
    ]),
    handlerClickMoveToHome() {
      location.href = '/f/'
    },
    handlerClickOpenIntroSendModal() {
      this.toggleSideMenu(false)
      this.openIntroSendModal()
    },
    handlerClickOpenRegModal() {
      this.toggleSideMenu(false)
      this.openRegModal()
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSideMenuMobile {
  display: none;
}
@media all and (max-width: 1023px) {
  #groupSideMenuMobile {
    display: block;
    width: 300px;
    height: calc(var(--vh, 1vh) * 100);
    @include flexBox(column, flex-start, center);
    position: fixed;
    top: 0;
    right: 0;
    background-color: #000000;
    z-index: 12;
    transform: translateX(300px);
    transition: transform 0.3s ease;
    will-change: auto;
    &.side-open {
      transform: translateX(0);
    }
  }
  .side-close {
    width: 100%;
    padding: 15px 24px 12px;
    @include flexBox(row, flex-end, center);
    i {
      display: block;
      width: 24px;
      height: 24px;
      @include defaultIcon(
        'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/close-white.svg'
      );
      cursor: pointer;
    }
  }
  .side-menu {
    width: 100%;
    padding: 14px 0;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    & + .side-menu {
      margin-top: 5px;
    }
  }
  .side-button {
    width: 156px;
    height: 42px;
    border-radius: 12px;
    @include flexBox(row, center, center);
    background-image: linear-gradient(105deg, #6400c8, #ff7d00);
    cursor: pointer;
    color: #ffffff;
    font-weight: $medium;
    margin-top: 8px;
  }
  .side-bottom {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    font-weight: $medium;
    color: #555555;
    text-align: center;
  }
}
</style>
