<template>
  <div id="groupSectionSystem" class="group-section">
    <div class="group-auto-size section-system-container">
      <p class="system-title">
        담당자 및 임직원 모두를 위한 <br />편리한 시스템
      </p>
      <p class="system-subtitle">Total Health-care System</p>
      <p class="system-content">
        임직원은 예약 시스템을 통해 수업을 직접 예약/관리할 수 있으며,
        <br />관리자는 임직원의 수업 진행 현황 및 통계를 실시간으로 확인할 수
        있습니다.
      </p>
      <picture>
        <source
          srcset="
            https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-system.webp
          "
          type="image/webp"
        />
        <img
          class="system-image"
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/group-system.png"
          alt=""
        />
      </picture>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupSectionSystem',
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionSystem {
  padding: 120px 0;
  background-color: #232323;
}
.system-title {
  font-size: 36px;
  font-weight: $bold;
  color: #ffffff;
  br {
    display: none;
  }
}
.system-subtitle {
  font-size: 36px;
  font-weight: $bold;
  color: #ffc800;
}
.system-content {
  font-size: 20px;
  font-weight: $medium;
  color: #ffffff;
  margin: 12px 0 40px;
  br {
    display: block;
  }
}
.system-image {
  width: 100%;
  height: auto;
}
@media all and (max-width: 1023px) {
  #groupSectionSystem {
    padding: 60px 0;
  }
  .system-title {
    font-size: 24px;
    word-break: keep-all;
    br {
      display: block;
    }
  }
  .system-subtitle {
    font-size: 24px;
  }
  .system-content {
    font-size: 16px;
    font-weight: $regular;
    margin: 12px 0 40px;
    br {
      display: none;
    }
  }
  .system-image {
    width: unset;
    min-width: 986px;
    height: auto;
    animation: imageAnimation 6s ease-in-out infinite forwards;
    will-change: auto;
  }
}
@keyframes imageAnimation {
  0% {
    transform: translateX(0);
  }
  30%,
  50% {
    transform: translateX(calc(100vw - 1048px));
  }
  80% {
    transform: translateX(0);
  }
}
</style>
