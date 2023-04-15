<template>
  <Modal :header-show="false" @click-backdrop="closeModal">
    <div slot="body" class="reg-program-container">
      <div class="modal-close" @click="closeModal"></div>
      <div class="program-title">
        <i class="title-icon icon--individual"></i>
        1:1 개인 맞춤 프로그램
      </div>
      <p class="program-content">
        물리치료사, 도수치료 전문가가 피로가 쌓인 부위는 풀어주고, 잘못된 자세는
        바로잡아주는 맞춤케어를 진행합니다. (2~5인 제공 / 인당 25~30분 씩 진행)
      </p>
      <div class="program-title">
        <i class="title-icon icon--group"></i>
        1:N 단체 레슨 프로그램
      </div>
      <p class="program-content">
        홈핏의 검증된 운동 전문가가 스트레칭, 체력증진, 리프레쉬 등 기업의
        니즈에 맞춘 단체 운동 프로그램을 진행합니다. (4~25명 참여 가능 / 단체 당
        60분 진행)
      </p>
      <p class="program-caption">
        필요한 마사지베드, 매트, 소도구는 모두 무상대여 해드립니다.💪🏻
      </p>
    </div>
  </Modal>
</template>
<script>
import Modal from '~/components/common/CommonModalW700'
export default {
  name: 'GroupRegProgramIntroModal',
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/_index.scss';
.reg-program-container {
  padding: 40px !important;
  .modal-close {
    display: block;
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
    @include defaultIcon(
      'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/close-black.svg'
    );
  }
  .program-title {
    @include flexBox(row, flex-start, center);
    gap: 12px;
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: $bold;
    .title-icon {
      width: 36px;
      height: 36px;
      background-color: #f5f5f5;
      border-radius: 12px;
      background-size: 24px !important;
      &.icon--individual {
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/invalid-emoji.png'
        );
      }
      &.icon--group {
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/group/coass-emoji.png'
        );
      }
    }
  }
  .program-content {
    margin-bottom: 24px;
  }
  .program-caption {
    font-size: 14px;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 9px 22px 9px 12px;
  }
}
</style>
