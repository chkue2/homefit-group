<template>
  <Modal
    modal-id="groupIntroSendModal"
    :is-open="isOpen"
    @close-modal="closeIntroSendModal"
  >
    <div slot="body" class="group-modal-container">
      <div class="modal-left">
        <img
          src="https://dcse8twossp9.cloudfront.net/static/img/v2/group/send-intro.jpg"
        />
      </div>
      <div class="modal-right">
        <i class="modal-close" @click="closeIntroSendModal"></i>
        <p class="modal-title">소개서 받기</p>
        <p class="modal-subtitle">
          아래 항목을 입력해주시면 소개서를 보내드리겠습니다.
        </p>
        <form class="modal-form">
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
                  type="email"
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
              <span>부서명/직함을 확인해주세요.</span>
            </v-tooltip>
          </div>
          <div class="form-block">
            <p class="block-title">미팅 가능 여부</p>
            <select
              v-model="form.meeting"
              class="block-select"
              :class="{ 'select-empty': form.meeting === '' }"
            >
              <option value="" selected disabled>
                미팅 가능 여부를 선택해주세요.
              </option>
              <option value="가능">짧게 미팅 (대면/비대면) 가능해요!🙋🏻‍♀️</option>
              <option value="불가능">미팅은 힘들어요.</option>
            </select>
          </div>
        </form>
        <div class="modal-captions button-pb">
          <p class="modal-caption caption--medium">
            · 미팅에 참여하는 기업에 한하여 "홈핏 오피스 프로그램 원데이
            무료체험권을 100% 지급"합니다
          </p>
          <p class="modal-caption">
            · 제출 시 개인정보 수집에 동의한 것으로 간주합니다.
          </p>
          <p class="modal-caption">· 기업 유선 상담 : 010-7569-8253</p>
        </div>
        <p
          class="modal-button"
          :class="{ 'button--on': computedFormCheck }"
          @click="handlerClickSendButton"
        >
          제출하기
        </p>
      </div>
    </div>
  </Modal>
</template>
<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import Modal from '~/components/common/CommonModalAutoSize'
import commonMixins from '~/assets/js/commonMixins'
export default {
  name: 'GroupIntroSendModal',
  components: {
    Modal,
  },
  mixins: [commonMixins],
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isGroupNameTooltip: false,
    isDepartmentTooltip: false,
    isNameTooltip: false,
    isEmailTooltip: false,
    isTelTooltip: false,
    form: {
      groupName: '',
      department: '',
      name: '',
      email: '',
      tel: '',
      meeting: '',
    },
  }),
  computed: {
    computedFormCheck() {
      return (
        this.form.email !== '' &&
        this.checkValidateEmail(this.form.email) &&
        this.form.tel !== '' &&
        this.form.department !== '' &&
        this.form.meeting !== ''
      )
    },
  },
  methods: {
    ...mapActions('group', ['closeIntroSendModal', 'toggleLoading']),
    reqeustIntroSend() {
      this.toggleLoading(true)
      axios
        .post('/api/groupSuggest/coachList/', {
          _method: 'post',
          data: {
            corporate_name: this.form.groupName,
            manager_email: this.form.email,
            manager_name: this.form.name,
            manager_phone: this.form.tel,
            department: this.form.department,
            meeting: this.form.meeting,
          },
        })
        .then(() => {
          this.$router
            .replace(
              `/f/group/introduction_complete/?e=${this.form.email}&t=${this.form.tel}&d=${this.form.department}`
            )
            .catch(() => {})
        })
        .catch(() => {
          alert(
            '제안서를 불러오지 못했습니다.\n잠시 후 다시 시도해주세요.\n해당 에러가 지속해서 발생하면 고객센터로 문의해주세요!\ntel. 02-6958-8253'
          )
        })
        .finally(() => {
          this.toggleLoading(false)
        })
    },
    handlerClickSendButton() {
      if (this.computedFormCheck === false) {
        if (
          this.form.email === '' ||
          !this.checkValidateEmail(this.form.email)
        ) {
          this.isEmailTooltip = true
          this.$refs.email.focus()
        } else if (this.form.tel === '') {
          this.isTelTooltip = true
          this.$refs.tel.focus()
        } else if (this.form.department === '') {
          this.isDepartmentTooltip = true
          this.$refs.department.focus()
        } else if (this.form.meeting === '') {
          alert('미팅 가능 여부를 선택해주세요.')
        }
        return false
      }
      this.reqeustIntroSend()
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
.modal-left {
  img {
    border-radius: 12px 0 0 12px;
  }
}
</style>
