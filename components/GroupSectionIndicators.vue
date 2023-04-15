<template>
  <div id="groupSectionIndicators" class="group-section">
    <div class="group-auto-size section-indicators-container">
      <p class="indicators-title pc">
        업무 능률에 악영향을 미치는<br /><b>근골격계 질환 및 스트레스성 질환</b>
      </p>
      <p class="indicators-title mo">
        업무 능률에 악영향을 미치는<br /><b>근골격계 및 스트레스성 질환</b>
      </p>
      <p class="indicators-subtitle">
        임직원의 70%는 직장병에 시달리고 있으며, 직장병은 26%의 업무 능력 상실을
        가져옵니다.
      </p>
      <div class="indicators-cards">
        <div class="indicators-card" data-aos="fade-up" data-aos-duration="500">
          <p class="indicators-card-title">
            임직원의 보편적<br /><b>직장병 비율 70%</b>
          </p>
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-01-mobile.svg
              "
              media="(max-width: 1023px)"
            />
            <img
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-01-pc.svg"
              class="card-image"
            />
          </picture>
        </div>
        <div
          class="indicators-card"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <p class="indicators-card-title">
            직장병의 <b>업무 능력<br />상실율 26%</b>
          </p>
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-02-mobile.svg
              "
              media="(max-width: 1023px)"
            />
            <img
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-02-pc.svg"
              class="card-image"
            />
          </picture>
        </div>
      </div>
      <p class="indicators-caption">
        <strong>*직장병:</strong> 거북목, 목/허리 디스크, 스트레스 질환 등
      </p>
      <p class="indicators-title pb">
        사내 건강 프로그램 도입으로<br /><b>기업 생산성을 높일 수 있습니다.</b>
      </p>
      <div class="indicators-cards">
        <div
          class="indicators-card card-column"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div>
            <p class="indicators-card-title">투자 대비 <b>수익율 3.6배</b></p>
            <p class="indicators-card-subtitle">
              임직원 건강관리에 $1 투자하면, <br class="mo" />생산성 향상 등으로
              <br class="pc" />회사에 돌아오는 이득 $3.6
            </p>
          </div>
          <picture>
            <source
              srcset="
                https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-03-2-mobile.svg
              "
              media="(max-width: 1023px)"
            />
            <img
              src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-03-2-pc.svg"
              class="card-image"
            />
          </picture>
        </div>
        <div
          class="indicators-card card-column card-background"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          <div>
            <p class="indicators-card-title">
              <b>순매출 40% ↑<br />영업이익 300% ↑</b>
            </p>
            <p class="indicators-card-subtitle pl">
              사내 건강 프로그램 도입으로 <br class="mo" />매출과
              <br class="pc" />영업이익 증가한 사례
            </p>
          </div>
        </div>
      </div>
      <p class="indicators-caption mb-0">
        <strong>* 미국 하버드대 경영대학원 연구결과</strong>
      </p>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: 'GroupSectionIndicators',
  mounted() {
    this.$nextTick(() => {
      AOS.init()
    })
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/_index.scss';
#groupSectionIndicators {
  padding: 120px 0;
}
.indicators-title {
  font-size: 36px;
  b {
    font-weight: $bold;
  }
  &.pc {
    display: block;
  }
  &.mo {
    display: none;
  }
  &.pb {
    padding-bottom: 40px;
  }
}
.indicators-subtitle {
  font-size: 20px;
  font-weight: $medium;
  margin: 12px 0 40px;
}
.indicators-cards {
  @include flexBox();
  gap: 40px;
  .indicators-card {
    width: 468px;
    height: 300px;
    padding: 24px;
    border-radius: 12px;
    background-color: #f5f5f5;
    @include flexBox(row, space-between, flex-start);
    gap: 32px;
    &.card-column {
      flex-direction: column;
      gap: unset;
      picture {
        width: 100%;
        height: auto;
        .card-image {
          width: 100%;
          height: 100%;
        }
      }
    }
    & > div {
      width: 100%;
    }
  }
  .indicators-card-title {
    flex: 1;
    font-size: 24px;
    line-height: 1.3;
    b {
      font-weight: $bold;
    }
  }
  .indicators-card-subtitle {
    margin-top: 12px;
    &.pl {
      padding-left: 24px;
    }
    .mo {
      display: none;
    }
    .pc {
      display: block;
    }
  }
  .card-image {
    width: auto;
    height: 100%;
  }
  .card-background {
    @include defaultIcon(
      'https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-04-pc.png'
    );
    padding: 0;
    .indicators-card-title {
      padding: 24px 0 0 24px;
    }
  }
}
.indicators-caption {
  margin: 40px 0 120px;
  font-size: 14px;
  color: #7d7d7d;
  font-weight: $regular;
  &.mb-0 {
    margin-bottom: 0;
  }
}
@media all and (max-width: 1023px) {
  #groupSectionIndicators {
    padding: 60px 0;
  }
  .indicators-title {
    font-size: 24px;
    &.pc {
      display: none;
    }
    &.mo {
      display: block;
    }
  }
  .indicators-subtitle {
    font-size: 16px;
    font-weight: $regular;
    br {
      display: none;
    }
  }
  .indicators-cards {
    gap: 12px;
    overflow-x: auto;
    white-space: nowrap;
    .indicators-card {
      flex: 0 0 auto;
      width: 220px;
      height: 220px;
      padding: 12px;
      border-radius: 12px;
      background-color: #f5f5f5;
      @include flexBox(column, space-between, flex-end);
      gap: 16px;
      &.card-column {
        gap: unset;
      }
    }
    .indicators-card-title {
      flex: unset;
      font-size: 16px;
      line-height: 1.3;
      width: 100%;
      text-align: left;
      b {
        font-weight: $bold;
      }
    }
    .indicators-card-subtitle {
      margin-top: 4px;
      font-size: 14px;
      white-space: normal;
      word-break: keep-all;
      &.pl {
        padding-left: 12px;
      }
      .mo {
        display: block;
      }
      .pc {
        display: none;
      }
    }
    .card-image {
      width: 100px;
      height: auto;
    }
    .card-background {
      @include defaultIcon(
        'https://dcse8twossp9.cloudfront.net/static/img/v2/group/graph-04-mobile.png'
      );
      background-size: contain;
      background-position: bottom;
      padding: 0;
      .indicators-card-title {
        padding: 12px 0 0 12px;
      }
    }
  }
  .indicators-caption {
    font-weight: $light;
    margin: 12px 0 60px;
    strong {
      font-weight: $regular;
    }
    &.mb-0 {
      margin-bottom: 0;
    }
  }
}
</style>
