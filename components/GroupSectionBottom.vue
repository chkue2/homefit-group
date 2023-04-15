<template>
  <div id="groupSectionBottom" class="group-section group-h-100">
    <GroupHeaderTransparent />
    <div class="group-auto-size section-bottom-container">
      <p class="bottom-title">
        임직원을 위한<br class="mo" />
        압도적 건강 복지,<br />홈핏과 함께 하세요!
      </p>
      <div class="bottom-buttons">
        <p class="bottom-button button--white" @click="openIntroSendModal">
          소개서 받기
        </p>
        <div class="bottom-button button--gra" @click="openRegModal">
          무료체험 신청
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import GroupHeaderTransparent from '~/components/group/GroupHeaderTransparent'
export default {
  name: 'GroupSectionBottom',
  components: {
    GroupHeaderTransparent,
  },
  methods: {
    ...mapActions('group', ['openIntroSendModal', 'openRegModal']),
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionBottom {
  @include defaultIcon(
    'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-bottom-1.jpg'
  );
}
.section-bottom-container {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include flexBox(column, center, center);
}
.bottom-title {
  font-size: 48px;
  font-weight: $bold;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
  .mo {
    display: none;
  }
}
.bottom-buttons {
  @include flexBox(row, center, center);
  gap: 12px;
  .bottom-button {
    width: 240px;
    height: 60px;
    @include flexBox(row, center, center);
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
      color: #000000;
    }
    &.button--gra {
      background-image: linear-gradient(104deg, #6400c8, #ff7d00);
      color: #ffffff;
    }
  }
}
@media all and (max-width: 1023px) {
  #groupSectionBottom {
    @include defaultIcon(
      'https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-bottom-mo-1.jpg'
    );
    background-position-x: center;
    background-position-y: bottom;
  }
  .section-bottom-container {
    position: unset;
    transform: unset;
    padding: 0 24px;
    align-items: flex-start;
    margin-top: 16px;
  }
  .bottom-title {
    font-size: 27px;
    text-align: left;
    margin-bottom: 12px;
    .mo {
      display: block;
    }
  }
  .bottom-buttons {
    @include flexBox(row, center, center);
    gap: 12px;
    .bottom-button {
      width: auto;
      height: 42px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      padding: 14px;
      font-size: 16px;
    }
  }
}
</style>
