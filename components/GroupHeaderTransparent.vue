<template>
  <div class="group-auto-size group-header-transparent">
    <img
      class="group-header-logo"
      src="https://dcse8twossp9.cloudfront.net/static/img/icon/logo-height-30.svg"
      @click="moveToScrollTop"
    />
    <a class="group-header-home" href="/">홈으로</a>
    <i class="group-header-menu" @click="toggleSideMenu(true)"></i>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'GroupHeaderTransparent',
  methods: {
    ...mapActions('group', ['moveToScrollTop', 'toggleSideMenu']),
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
.group-header-transparent {
  width: 100%;
  height: 80px;
  @include flexBox(row, space-between, center);
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  z-index: 9;
}
.group-header-logo {
  width: 132px;
  height: 24px;
  cursor: pointer;
}
.group-header-home {
  font-weight: $medium;
  color: #ffffff;
  cursor: pointer;
}
.group-header-menu {
  width: 24px;
  height: 24px;
  @include defaultIcon(
    'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/menu-white.svg'
  );
  cursor: pointer;
  display: none;
}
@media all and (max-width: 1023px) {
  .group-header-transparent {
    height: 54px;
  }
  .group-header-home {
    display: none;
  }
  .group-header-menu {
    display: block;
  }
}
</style>
