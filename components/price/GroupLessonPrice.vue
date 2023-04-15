<template>
  <div id="groupCarePrice">
    <p class="price-title">오피스 프로그램 비용을 <br />알아보세요</p>
    <div class="price-grid">
      <div class="price-card card-border border--green">
        <p class="card-title">정규 복지 플랜</p>
        <p class="card-subtitle">
          정규 복지로 채택 후, 장기적으로 꾸준히<br />오피스 프로그램을 원하는
          기업에 적합
        </p>
        <div class="card-contents">
          <p class="card-price">105,000<span class="small">/회</span></p>
          <p class="card-discount">-33%</p>
        </div>
        <img
          class="card-best"
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/icon/diagonal-best-re.svg"
          alt
        />
      </div>
      <div class="price-card">
        <p class="card-title">단기 플랜 <strong>(1회 체험/횟수권)</strong></p>
        <p class="card-subtitle">
          정규 복지 도입 전, 원데이 혹은 단기간<br />오피스 프로그램을 원하는
          기업에 적합
        </p>
        <div class="card-contents">
          <p class="card-price fs-24">별도 협의</p>
        </div>
      </div>
    </div>
    <p class="price-caption">
      · 정규 복지 플랜은 해당 월에 진행한 수업이 후불 청구됩니다.
    </p>
    <p class="price-caption">
      · 서비스 이외 지역인 경우 교통비가 추가될 수 있습니다.
    </p>
    <p class="price-caption">
      · 구체적인 기업별 맞춤 견적서는
      <a href="https://homefit.channel.io/support-bots/58829" target="_blank"
        >담당 매니저와의 상담</a
      >
      후 전달드립니다.
    </p>
  </div>
</template>
<script>
export default {
  name: 'GroupCarePrice',
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/price.scss';
</style>
