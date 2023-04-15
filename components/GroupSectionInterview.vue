<template>
  <div id="groupSectionInterview" class="group-section">
    <div class="group-auto-size section-review-container">
      <p class="review-section-title">오직, 임직원의 건강만 <br />생각합니다</p>
      <div class="review-interview">
        <iframe
          src="https://www.youtube.com/embed/_lUUD43kfak"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupSectionInterview',
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionInterview {
  padding: 120px 0;
  background-color: #ffffff;
}
.review-section-title {
  font-size: 36px;
  font-weight: $bold;
  margin-bottom: 40px;
  position: relative;
  br {
    display: none;
  }
}
.review-interview {
  width: 100%;
  padding-bottom: 56.6%;
  position: relative;
  border-radius: 12px;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
  }
}
@media all and (max-width: 1023px) {
  #groupSectionInterview {
    padding: 60px 0;
  }
  .review-section-title {
    font-size: 24px;
    margin-bottom: 40px;
    position: relative;
    br {
      display: block;
    }
  }
  .review-interview {
    padding-bottom: 100%;
  }
}
</style>
