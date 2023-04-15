<template>
  <Modal
    modal-id="groupIntroSendModal"
    :is-open="isOpen"
    @close-modal="closeRegModal"
  >
    <div slot="body" class="group-modal-container">
      <div class="modal-left">
        <div class="modal-background-gra animation-first"></div>
        <img
          class="modal-background-image"
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/2-floor.png"
        />
        <div class="modal-swiper">
          <div class="swiper-wrapper">
            <div v-for="slide in regSlide" :key="slide.id" class="swiper-slide">
              <p class="swiper-title" v-html="slide.title"></p>
              <picture>
                <source :srcset="slide.emojiWebpUrl" type="image/webp" />
                <img class="swiper-emoji" :src="slide.emojiPngUrl" />
              </picture>
              <div class="swiper-tags">
                <span
                  v-for="(tag, index) in slide.tags"
                  :key="index"
                  class="swiper-tag"
                  >{{ tag }}</span
                >
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="modal-right">
        <i class="modal-close" @click="closeRegModal"></i>
        <p class="modal-title">무료체험 신청서</p>
        <p class="modal-subtitle">
          아래 신청서를 작성해주시면 원데이 체험을 무상으로 제공해드립니다.<br />•건강
          복지를 담당하시는 분(인사/총무, 조직문화, 보건 담당, 경영진 등)이
          신청해주셔야 하며, 수업 받아보실 분이 5명 이상인 경우 진행 가능합니다.
        </p>
        <div>
          <form class="modal-form">
            <div class="form-block">
              <p class="block-title">기업/단체명</p>
              <v-tooltip
                v-model="isGroupNameTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="groupName"
                    ref="groupName"
                    v-model="form.groupName"
                    type="text"
                    class="block-input"
                    placeholder="입력해주세요"
                    @keyup="isGroupNameTooltip = false"
                    @blur="isGroupNameTooltip = false"
                  />
                </template>
                <span>기업/단체명을 확인해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title">
                회사 주소 (홈핏 수업 진행을 받으실 상세 주소)
              </p>
              <v-tooltip
                v-model="isGroupAddressTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="groupAddress"
                    ref="groupAddress"
                    v-model="form.groupAddress"
                    type="text"
                    class="block-input"
                    placeholder="입력해주세요"
                    @keyup="isGroupAddressTooltip = false"
                    @blur="isGroupAddressTooltip = false"
                  />
                </template>
                <span>회사 주소를 확인해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title">부서명/직함</p>
              <v-tooltip
                v-model="isDepartmentTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="department"
                    ref="department"
                    v-model="form.department"
                    type="text"
                    class="block-input"
                    placeholder="인사팀 대리"
                    @keyup="isDepartmentTooltip = false"
                    @blur="isDepartmentTooltip = false"
                  />
                </template>
                <span>부서명/직함을 입력해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title">성함</p>
              <v-tooltip
                v-model="isNameTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="name"
                    ref="name"
                    v-model="form.name"
                    type="text"
                    class="block-input"
                    placeholder="입력해주세요"
                    @keyup="isNameTooltip = false"
                    @blur="isNameTooltip = false"
                  />
                </template>
                <span>성함을 확인해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title">연락처</p>
              <v-tooltip
                v-model="isTelTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="tel"
                    ref="tel"
                    v-model="form.tel"
                    type="tel"
                    class="block-input"
                    placeholder="숫자만 입력해주세요"
                    @keyup="isTelTooltip = false"
                    @blur="isTelTooltip = false"
                  />
                </template>
                <span>연락처를 확인해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title">회사 이메일</p>
              <v-tooltip
                v-model="isEmailTooltip"
                bottom
                attach=".form-block"
                color="#F06292"
                :left="true"
                :close-delay="2"
              >
                <template #activator="{ attrs }">
                  <input
                    v-bind="attrs"
                    id="email"
                    ref="email"
                    v-model="form.email"
                    type="text"
                    class="block-input"
                    placeholder="입력해주세요"
                    @keyup="isEmailTooltip = false"
                    @blur="isEmailTooltip = false"
                  />
                </template>
                <span>회사 이메일을 확인해주세요.</span>
              </v-tooltip>
            </div>
            <div class="form-block">
              <p class="block-title block-intro-title">
                관심 프로그램 <i @click="toggleRegProgramIntroModal(true)">?</i>
              </p>
              <div class="block-field">
                <label @click="handlerClickProgramCheckbox">
                  <input
                    v-model="form.program"
                    type="checkbox"
                    value="1"
                  /><i></i><span>1:1 개인 맞춤 프로그램</span>
                </label>
                <label @click="handlerClickProgramCheckbox">
                  <input
                    v-model="form.program"
                    type="checkbox"
                    value="2"
                  /><i></i><span>1:N 단체레슨 프로그램</span>
                </label>
                <label>
                  <input
                    v-model="form.isProgramNotSelect"
                    type="radio"
                    :value="true"
                  /><i></i><span>미정</span>
                </label>
              </div>
            </div>
            <div class="form-block">
              <p class="block-title">특별히 궁금한 내용 있으신가요?</p>
              <textarea
                v-model="form.contents"
                class="block-textarea"
                placeholder="입력해주세요"
              ></textarea>
            </div>
          </form>
          <div
            class="modal-captions button-pb"
          >
            <p class="modal-caption">
              · 제출 시 개인정보 수집에 동의한 것으로 간주합니다.
            </p>
            <p class="modal-caption">· 기업 유선 상담 : 010-7569-8253</p>
          </div>
          <p
            class="modal-button"
            :class="{ 'button--on': computedRegSuccess }"
            @click="handlerClickRegButton"
          >
            제출하기
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import Swiper from 'swiper/bundle'
import { isEmpty, filter } from 'lodash'
import Modal from '~/components/common/CommonModalAutoSize'
import regSlide from '~/assets/js/group/regSlide'
import commonMixins from '~/assets/js/commonMixins'
import '~/assets/css/swiper.min.css'
import helpers from '~/assets/js/helpers'
export default {
  name: 'GroupRegModal',
  components: {
    Modal,
  },
  mixins: [regSlide, commonMixins],
  props: {
    isOpen: { type: Boolean, default: false },
  },
  data: () => ({
    isGroupAddressTooltip: false,
    isEmailTooltip: false,
    isTelTooltip: false,
    isGroupNameTooltip: false,
    isDepartmentTooltip: false,
    isNameTooltip: false,
    swiper: null,
    form: {
      encryptedId: '',
      email: '',
      tel: '',
      groupName: '',
      department: '',
      name: '',
      program: [],
      isProgramNotSelect: false,
      contents: '',
      groupAddress: '',
    },
  }),
  computed: {
    computedRegSuccess() {
      return (
        this.form.email !== '' &&
        this.checkValidateEmail(this.form.email) &&
        this.form.tel !== '' &&
        this.form.groupName !== '' &&
        this.form.department !== '' &&
        this.form.name !== '' &&
        !isEmpty(this.form.program)
      )
    },
  },
  watch: {
    'form.isProgramNotSelect': {
      deep: true,
      handler(value) {
        if (value === true) this.form.program = ['미정']
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      const e = helpers.getQueryParameter().e
      const t = helpers.getQueryParameter().t
      const d = helpers.getQueryParameter().d
      this.form.email = isEmpty(e) ? '' : e
      this.form.tel = isEmpty(t) ? '' : t
      this.form.department = isEmpty(d) ? '' : d
      this.initializeSwiper()
    })
  },
  methods: {
    ...mapActions('group', ['closeRegModal', 'toggleLoading']),
    requestCoachList() {
      this.toggleLoading(true)
      axios
        .post('/api/groupSuggest/join/', {
          _method: 'post',
          encryptedId: this.form.encryptedId,
          data_type: 1,
          manager_email: this.form.email,
          manager_phone: this.form.tel,
          corporate_name: this.form.groupName,
          address: this.form.groupAddress,
          department: this.form.department,
          manager_name: this.form.name,
          program_types: this.form.program,
          memo: this.form.contents,
        })
        .then(() => {
          alert('감사합니다.\n빠르게 연락드리겠습니다.')
          this.$router.replace('/f/group/trial_complete/').catch(() => {})
        })
        .catch(() => {
          alert(
            '상담 신청에 실패했습니다.\n잠시 후 다시 시도해주세요.\n해당 에러가 지속해서 발생하면 고객센터로 문의해주세요!\ntel. 02-6958-8253'
          )
        })
        .finally(() => {
          this.toggleLoading(false)
        })
    },
    initializeSwiper() {
      this.swiper = new Swiper('.modal-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        observer: true,
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    handlerClickRegButton() {
      if (!this.computedRegSuccess) {
        if (this.form.groupName === '') {
          this.isGroupNameTooltip = true
          this.$refs.groupName.focus()
        } else if (this.form.groupAddress === '') {
          this.isGroupAddressTooltip = true
          this.$refs.groupAddress.focus()
        } else if (this.form.department === '') {
          this.isDepartmentTooltip = true
          this.$refs.department.focus()
        } else if (this.form.name === '') {
          this.isNameTooltip = true
          this.$refs.name.focus()
        } else if (this.form.tel === '') {
          this.isTelTooltip = true
          this.$refs.tel.focus()
        } else if (
          this.form.email === '' ||
          !this.checkValidateEmail(this.form.email)
        ) {
          this.isEmailTooltip = true
          this.$refs.email.focus()
        } else if (isEmpty(this.form.program)) {
          alert('관심 프로그램을 선택해주세요.')
        }

        return false
      }
      this.requestCoachList()
    },
    handlerClickProgramCheckbox() {
      this.form.program = filter(this.form.program, (p) => p !== '미정')
      this.form.isProgramNotSelect = false
    },
    toggleRegProgramIntroModal(val) {
      this.$emit('toggle-reg-program-intro-modal', val)
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
.modal-background-gra {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-size: 200%;
  border-radius: 12px 0 0 12px;
  &.animation-first {
    animation: backgroundAnimation 3s linear infinite alternate;
    background-image: linear-gradient(to right, #6400c8 0%, #ff7d00 100%);
    will-change: auto;
  }
}
.modal-background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 12px 0 0 12px;
}
.modal-swiper {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  .swiper-pagination {
    margin-bottom: 60px;
    &::v-deep {
      .swiper-container-horizontal
        > .swiper-pagination-bullets
        .swiper-pagination-bullet {
        background-color: #ffffff;
        opacity: 0.4;
      }
    }
  }
}
.swiper-slide {
  @include flexBox(column, center, center);
  .swiper-title {
    width: 100%;
    font-size: 24px;
    font-weight: $bold;
    text-align: center;
    color: #ffffff;
  }
  .swiper-emoji {
    width: 160px !important;
    height: 160px !important;
    margin: 12px 0;
    object-fit: contain;
  }
  .swiper-tags {
    width: 200px;
    @include flexBox(row, center, center);
    flex-wrap: wrap;
    gap: 6px;
    .swiper-tag {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      padding: 0 9px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      color: #ffffff;
    }
  }
}
@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
