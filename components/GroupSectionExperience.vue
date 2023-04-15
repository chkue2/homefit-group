<template>
  <div
    id="groupSectionExperience"
    class="group-section"
    :class="`experience-${type}`"
  >
    <div class="group-auto-size section-experience-container">
      <div class="experience-left">
        <p class="experience-title">
          정식 도입 전에 원데이로<br />체험해보세요
        </p>
        <a
          target="_blank"
          class="experience-button button--pc"
          @click="openTrialModal"
          >무료 체험 신청</a
        >
      </div>
      <div class="experience-right">
        <div class="experience-program">
          <p class="program-text" :class="{ 'text--on': type === 'care' }">
            1:1 맞춤 케어
          </p>
          <p class="program-onoff" @click="handlerClickProgramSwitch">
            <i></i>
          </p>
          <p class="program-text" :class="{ 'text--on': type === 'lesson' }">
            1:N 단체 레슨
          </p>
        </div>
        <div class="experience-intro pc">
          <p class="experience-title">
            아래 프로그램의 무료 체험 신청이 가능합니다.
          </p>
          <div v-if="type === 'care'" class="experience-tags">
            <p class="experience-tag">
              <picture>
                <source
                  srcset="
                    https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/care-emoji.webp
                  "
                  type="image/webp"
                />
                <img
                  class="card-image"
                  src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/care-emoji.png"
                /> </picture
              >근골격계 케어
            </p>
            <p class="experience-tag">
              <picture>
                <source
                  srcset="
                    https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji.webp
                  "
                  type="image/webp"
                />
                <img
                  class="card-image"
                  src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji.png"
                /> </picture
              >힐링 테라피
            </p>
          </div>
          <div v-if="type !== 'care'" class="experience-tags">
            <p class="experience-tag">
              <picture>
                <source
                  srcset="
                    https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/stretching-emoji.webp
                  "
                  type="image/webp"
                />
                <img
                  class="card-image"
                  src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/stretching-emoji.png"
                /> </picture
              >스트레칭&피로회복
            </p>
            <p class="experience-tag">
              <picture>
                <source
                  srcset="
                    https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/lunge-emoji.webp
                  "
                  type="image/webp"
                />
                <img
                  class="card-image"
                  src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/lunge-emoji.png"
                /> </picture
              >다이어트&근력향상&체력증진
            </p>
            <p class="experience-tag">
              <picture>
                <source
                  srcset="
                    https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji-02.webp
                  "
                  type="image/webp"
                />
                <img
                  class="card-image"
                  src="https://dcse8twossp9.cloudfront.net/static/img/v2/emoji/medi-emoji-02.png"
                /> </picture
              >리프레쉬&마인드케어
            </p>
          </div>
        </div>
        <div v-if="type === 'care'" class="experience-intro mo">
          <p class="experience-column">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/group/care-box-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/care-box-emoji.png"
              /> </picture
            >근골격계 케어
          </p>
          <p class="experience-column">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/group/medi-box-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/medi-box-emoji.png"
              /> </picture
            >힐링 테라피
          </p>
        </div>
        <div v-if="type !== 'care'" class="experience-intro mo">
          <p class="experience-column">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/group/stretching-box-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/stretching-box-emoji.png"
              /> </picture
            >스트레칭&피로회복
          </p>
          <p class="experience-column">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/group/lunge-box-emoji.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/lunge-box-emoji.png"
              /> </picture
            >다이어트&근력향상&체력증진
          </p>
          <p class="experience-column">
            <picture>
              <source
                srcset="
                  https://dcse8twossp9.cloudfront.net/static/img/v2/group/medi-box-emoji-02.webp
                "
                type="image/webp"
              />
              <img
                class="card-image"
                src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/medi-box-emoji-02.png"
              /> </picture
            >리프레쉬&마인드케어
          </p>
        </div>
        <p class="experience-intro-caption">
          *아래 프로그램의 무료 체험 신청이 가능합니다.
        </p>
        <a
          target="_blank"
          class="experience-button button--mo"
          @click="openTrialModal"
          >무료 체험 신청</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupSectionExperience',
  data: () => ({
    type: 'care',
  }),
  computed: {
    computedIntroText() {
      return this.type === 'care'
        ? '근골격계 케어💆‍♀️, 힐링 테라피🧘‍♀️ 프로그램 모두 원데이 체험이 가능합니다.'
        : '스트레칭&피로회복🧍‍♀️, 다이어트&근력향상&체력증진🏃‍♀️, 리프레쉬&마인드케어🧘‍♀️ 프로그램 모두 원데이 체험이 가능합니다.'
    },
  },
  methods: {
    handlerClickProgramSwitch() {
      this.type = this.type === 'care' ? 'lesson' : 'care'
    },
    openTrialModal() {
      this.$router.replace('/f/group/trial/')
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionExperience {
  padding: 120px 0 120px;
}
.section-experience-container {
  @include flexBox(row, space-between, flex-start);
  gap: 135px;
}
.experience-right {
  flex: 1;
}
.experience-title {
  font-size: 36px;
  font-weight: $bold;
}
.experience-caption {
  font-size: 14px;
  color: #7d7d7d;
  margin: 12px 0 40px;
}
.experience-button {
  @include flexBox(row, center, center);
  width: 180px;
  height: 60px;
  gap: 2px;
  background-color: $group-violet;
  border-radius: 12px;
  font-size: 20px;
  font-weight: $medium;
  color: #ffffff;
  transition: all 0.3s ease;
  will-change: auto;
  margin-top: 70px;
  &:hover {
    color: #ffffff;
    opacity: 0.8;
  }
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    @include defaultIcon(
      'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/arrow-right-white.svg'
    );
  }
  &.button--pc {
    display: flex;
  }
  &.button--mo {
    display: none;
  }
}
.experience-program {
  @include flexBox(row, flex-start, center);
  gap: 6px;
  margin-bottom: 12px;
}
.program-text {
  font-size: 20px;
  &.text--on {
    font-weight: $medium;
  }
}
.program-onoff {
  width: 36px;
  height: 24px;
  position: relative;
  border-radius: 12px;
  background-color: $group-violet;
  cursor: pointer;
  transition: background-color 0.3s ease;
  will-change: auto;
  i {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    position: absolute;
    top: 50%;
    transform: translate(2px, -50%);
    background-color: #ffffff;
    transition: transform 0.3s ease;
    will-change: auto;
  }
}
.experience-intro {
  padding: 24px;
  border-radius: 12px;
  background-color: #f5f5f5;
  font-size: 18px;
  word-break: keep-all;
  flex-direction: column;
  &.pc {
    display: flex;
  }
  &.mo {
    display: none;
  }
  .experience-title {
    font-size: 18px;
    margin-bottom: 8px;
  }
  .experience-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .experience-tag {
    display: inline-flex;
    padding: 6px 8px 6px 6px;
    border-radius: 8px;
    gap: 4px;
    background-color: #ffffff;
    font-weight: $medium;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
.experience-intro-caption {
  display: none;
}
.experience-lesson {
  .experience-button {
    background-color: $group-green;
  }
  .program-onoff {
    background-color: $group-green;
    i {
      transform: translate(14px, -50%);
    }
  }
}
@media all and (max-width: 1023px) {
  #groupSectionExperience {
    padding: 60px 0 60px;
  }
  .section-experience-container {
    @include flexBox(column, space-between, flex-start);
    gap: 40px;
  }
  .experience-right {
    width: 100%;
    flex: unset;
  }
  .experience-left {
    width: 100%;
  }
  .experience-title {
    font-size: 24px;
  }
  .experience-caption {
    margin: 12px 0 0;
  }
  .experience-button {
    width: 130px;
    height: 42px;
    font-size: 16px;
    &::after {
      content: '';
      width: 16px;
      height: 16px;
      @include defaultIcon(
        'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/arrow-right-white.svg'
      );
    }
    &.button--pc {
      display: none;
    }
    &.button--mo {
      display: flex;
      margin-top: 40px;
    }
  }
  .experience-program {
    @include flexBox(row, flex-start, flex-start);
    gap: 8px;
    margin-bottom: 12px;
  }
  .program-text {
    font-size: 18px;
  }
  .experience-intro {
    padding: 12px;
    gap: 8px;
    &.pc {
      display: none;
    }
    &.mo {
      display: flex;
    }
    .experience-column {
      @include flexBox(row, flex-start, center);
      gap: 8px;
      font-weight: $medium;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  .experience-intro-caption {
    display: block;
    margin-top: 8px;
    font-size: 14px;
  }
}
</style>
