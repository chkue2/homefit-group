<template>
  <div id="groupSectionImprovement" class="group-section">
    <div class="group-auto-size">
      <p class="improvement-title">
        홈핏 도입으로 더 적극적으로 <br />업무 환경을 개선해보세요.
      </p>
      <p class="improvement-caption">
        <strong>*대기업 L사</strong> 홈핏 도입 후 3년간의 지표 변화
      </p>
    </div>
    <div class="section-improvement-container">
      <div class="improvement-box improvement-left">
        <p class="improvement-box-title">생산성은 높이고,</p>
        <picture>
          <source
            srcset="
              https://dcse8twossp9.cloudfront.net/static/img/v2/group/up-arrow-mobile.png
            "
            media="(max-width: 1023px)"
          />
          <img
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/up-arrow-pc.png"
            class="improvement-box-background"
          />
        </picture>
        <div class="improvement-info">
          <div
            class="improvement-info-item item--violet"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p class="improvement-info-item-title">매출액</p>
            <p class="improvement-info-item-circle">
              <span>1,800억↑</span>
            </p>
            <p class="improvement-info-item-caption caption--small">
              도입 전 4,137억
            </p>
            <p class="improvement-info-item-caption">도입 후 5,978억</p>
          </div>
          <div
            class="improvement-info-item item--violet"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <p class="improvement-info-item-title">영업이익</p>
            <p class="improvement-info-item-circle">
              <span>1,000억↑</span>
            </p>
            <p class="improvement-info-item-caption caption--small">
              도입 전 275억
            </p>
            <p class="improvement-info-item-caption">도입 후 1,320억</p>
          </div>
          <div
            class="improvement-info-item item--green"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <p class="improvement-info-item-title">
              인당 매출액<br /><strong>(영업이익)</strong>
            </p>
            <p class="improvement-info-item-circle">
              <span>3.3배↑</span>
            </p>
            <p class="improvement-info-item-caption caption--small">
              도입 전 0.23억
            </p>
            <p class="improvement-info-item-caption">도입 후 0.76억</p>
          </div>
        </div>
      </div>
      <div class="improvement-box improvement-right">
        <p class="improvement-box-subtitle">
          퇴사율 동종업계 최하위 기록 (상위 1% 수준)
        </p>
        <p class="improvement-box-title">퇴사율은 낮추세요.</p>
        <picture>
          <source
            srcset="
              https://dcse8twossp9.cloudfront.net/static/img/v2/group/down-arrow-mobile.png
            "
            media="(max-width: 1023px)"
          />
          <img
            src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/down-arrow-pc.png"
            class="improvement-box-background"
          />
        </picture>
        <div class="improvement-info">
          <div
            class="improvement-info-item item--yellow"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p class="improvement-info-item-title">퇴사율</p>
            <p class="improvement-info-item-circle">
              <span>15.5%p↓</span>
            </p>
            <p class="improvement-info-item-caption caption--small">
              도입 전 32.6%
            </p>
            <p class="improvement-info-item-caption">도입 후 17.1%</p>
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
  name: 'GroupSectionImprovement',
  mounted() {
    this.$nextTick(() => {
      AOS.init()
    })
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/_index.scss';
#groupSectionImprovement {
  padding: 120px 0;
}
.improvement-title {
  font-size: 36px;
  font-weight: $bold;
  br {
    display: none;
  }
}
.improvement-caption {
  margin: 12px 0 40px;
  font-size: 14px;
  color: #7d7d7d;
  font-weight: $regular;
}
.section-improvement-container {
  @include flexBox();
  .improvement-box {
    flex: 1;
    height: 600px;
    position: relative;
    .improvement-box-title {
      font-size: 36px;
      font-weight: $bold;
    }
    picture {
      position: absolute;
      z-index: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .improvement-info {
      @include flexBox(row, flex-start, center);
      gap: 20px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      .improvement-info-item {
        @include flexBox(column, center, center);
        .improvement-info-item-title {
          height: 40px;
          text-align: center;
          line-height: 1.2;
          font-weight: $medium;
          margin-bottom: 8px;
          @include flexBox(column, center, center);
          strong {
            font-size: 14px;
          }
        }
        .improvement-info-item-circle {
          width: 136px;
          height: 136px;
          border-radius: 50%;
          margin-bottom: 24px;
          @include flexBox(row, center, center);
          span {
            font-size: 24px;
            font-weight: $bold;
          }
        }
        .improvement-info-item-caption.caption--small {
          font-size: 14px;
        }
        &.item--violet {
          .improvement-info-item-circle {
            background-color: rgba(100, 0, 240, 0.9);
            span {
              color: #ffffff;
            }
          }
          .improvement-info-item-caption {
            color: #6400f0;
            &.caption--small {
              color: #000000;
            }
          }
        }
        &.item--green {
          .improvement-info-item-circle {
            background-color: rgba(0, 230, 170, 0.9);
            span {
              color: #ffffff;
            }
          }
          .improvement-info-item-caption {
            color: #00e6aa;
            &.caption--small {
              color: #000000;
            }
          }
        }
        &.item--yellow {
          .improvement-info-item-title {
            color: #ffffff;
          }
          .improvement-info-item-circle {
            background-color: rgba(255, 255, 255, 0.9);
            span {
              color: #000000;
            }
          }
          .improvement-info-item-caption {
            color: #ffff00;
            &.caption--small {
              color: #ffffff;
            }
          }
        }
      }
    }
    &.improvement-left {
      @include flexBox(column, flex-start, flex-end);
      background-color: #f5f5f5;
      .improvement-box-title {
        width: 100%;
        max-width: 512px;
        padding-top: 44px;
        padding-left: 24px;
      }
      picture {
        width: auto;
        height: 420px;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
      }
      .improvement-info {
        right: 40px;
      }
    }
    &.improvement-right {
      @include flexBox(column, flex-end, flex-start);
      background-color: #232323;
      .improvement-box-title {
        padding-left: 40px;
        padding-bottom: 40px;
        color: #ffffff;
      }
      .improvement-box-subtitle {
        font-size: 14px;
        color: #ffffff;
        padding-left: 40px;
        padding-bottom: 8px;
      }
      picture {
        width: auto;
        height: 360px;
        top: 0;
        left: 0;
      }
      .improvement-info {
        left: 40px;
      }
    }
  }
}

@media all and (max-width: 1023px) {
  #groupSectionImprovement {
    padding: 60px 0;
  }
  .improvement-title {
    font-size: 24px;
    br {
      display: block;
    }
  }
  .improvement-caption {
    font-weight: $light;
    strong {
      font-weight: $regular;
    }
  }
  .section-improvement-container {
    @include flexBox(column);
    .improvement-box {
      flex: unset;
      width: 100%;
      height: 360px;
      position: relative;
      .improvement-box-title {
        font-size: 20px;
        font-weight: $medium;
        position: relative;
        z-index: 2;
      }
      .improvement-info {
        @include flexBox(row, flex-start, center);
        gap: 12px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        overflow-x: auto;
        .improvement-info-item {
          flex: 0 0 auto;
          @include flexBox(column, center, center);
          .improvement-info-item-title {
            height: 35px;
            font-size: 14px;
            margin-bottom: 8px;
            strong {
              font-size: 13px;
            }
          }
          .improvement-info-item-circle {
            width: 140px;
            height: 140px;
            margin-bottom: 12px;
            span {
              font-size: 20px;
            }
          }
          .improvement-info-item-caption {
            font-size: 14px;
          }
          .improvement-info-item-caption.caption--small {
            font-size: 13px;
          }
        }
      }
      &.improvement-left {
        @include flexBox(column, flex-start, flex-start);
        background-color: #f5f5f5;
        overflow: hidden;
        .improvement-box-title {
          width: 100%;
          max-width: unset;
          padding-top: 24px;
          padding-left: 24px;
        }
        picture {
          width: 518px;
          height: 336px;
          top: unset;
          bottom: 0;
          right: 24px;
          transform: unset;
        }
        .improvement-info {
          right: unset;
          left: 0;
          width: 100%;
          padding: 24px;
        }
      }
      &.improvement-right {
        @include flexBox(column-reverse, space-between, flex-start);
        .improvement-box-title {
          padding-left: 24px;
          padding-bottom: 0;
          padding-top: 24px;
        }
        .improvement-box-subtitle {
          color: #7d7d7d;
          padding-left: 24px;
          padding-bottom: 12px;
        }
        picture {
          width: 340px;
          height: 252px;
        }
        .improvement-info {
          left: 24px;
        }
      }
    }
  }
}
</style>
