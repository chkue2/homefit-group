<template>
  <Modal @click-backdrop="closeGroupRegModal">
    <div slot="body">
      <p class="title">
        입력하신 신청 정보를 바탕으로,<br />맞춤 견적을 드립니다.
      </p>
      <div class="form">
        <div class="form__item">
          <p class="item__title">기업/단체명</p>
          <input
            id="company"
            ref="company"
            v-model="form.company"
            name="company"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div class="form__item">
          <p class="item__title">부서명/직급</p>
          <input
            id="team"
            ref="team"
            v-model="form.team"
            name="team"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div class="form__item">
          <p class="item__title">성명</p>
          <input
            id="name"
            ref="name"
            v-model="form.name"
            name="name"
            type="text"
            placeholder="입력해주세요"
          />
        </div>
        <div class="form__item">
          <p class="item__title">이메일</p>
          <input
            id="email"
            ref="email"
            v-model="form.email"
            name="email"
            type="email"
            placeholder="입력해주세요"
          />
        </div>
        <div class="form__item">
          <p class="item__title">연락처</p>
          <input
            id="tel"
            ref="tel"
            v-model="form.tel"
            name="tel"
            type="tel"
            placeholder="입력해주세요"
            @input="changeTell"
          />
        </div>
        <div class="form__item">
          <p class="item__title">신청 프로그램</p>
          <select v-model="form.program">
            <option value="1" selected>1:1 맞춤케어</option>
            <option value="2">단체 레슨 (4인 이상)</option>
          </select>
        </div>
        <div class="form__item">
          <p class="item__title">특별히 궁금한 내용 있으신가요?</p>
          <textarea
            v-model="form.contents"
            placeholder="입력해주세요"
          ></textarea>
        </div>
        <div class="form__item mt">
          <p class="item__title">홈핏 인지 경로</p>
          <select v-model="form.know">
            <option value="" disabled selected hidden>선택해주세요</option>
            <option value="직접검색">직접검색</option>
            <option value="지인 소개">지인 소개</option>
            <option value="인스타그램">인스타그램</option>
            <option value="페이스북">페이스북</option>
            <option value="스포드림">네이버 카페</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <div class="form__info">
          · 기업 신청을 통해 개인정보 수집에 동의한 것으로 간주합니다.<br />
          · 기업 신청을 위해 작성하신 신청정보는, 상담 종료 후 파기됩니다.<br />
          · 기업 유선 상담 : 02-6958-8253
        </div>
        <div class="form__button">
          <p
            id="afterExpandForm"
            :class="{ on: computedSuccessGroupReg }"
            @click="requestGroupReg"
          >
            견적 문의
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script>
import axios from 'axios'
import { replace } from 'lodash'
import Modal from '~/components/common/CommonModal'
export default {
  name: 'GroupRegModal',
  components: {
    Modal,
  },
  props: {
    emailInput: { type: String, default: '' },
  },
  data() {
    return {
      form: {
        company: '',
        team: '',
        position: '',
        name: '',
        email: '',
        tel: '',
        program: '1',
        contents: '',
        know: '',
        parking: '',
      },
    }
  },
  computed: {
    computedSuccessGroupReg() {
      return (
        this.form.company !== '' &&
        this.form.name !== '' &&
        this.form.email !== '' &&
        this.form.tel !== '' &&
        this.form.program !== '' &&
        this.form.know !== ''
      )
    },
  },
  created() {
    this.form.email = this.emailInput
  },
  methods: {
    changeTell(e) {
      const pattern = '[^0-9]'
      this.form.tel = replace(e.target.value, new RegExp(pattern, 'g'), '')
    },
    closeGroupRegModal() {
      this.$emit('close-group-reg-modal')
    },
    requestGroupReg() {
      if (!this.computedSuccessGroupReg) {
        if (this.form.company === '') {
          alert('기업/단체명을 입력해주세요.')
          this.$refs.company.focus()
        } else if (this.form.name === '') {
          alert('성명을 입력해주세요.')
          this.$refs.name.focus()
        } else if (this.form.email === '') {
          alert('이메일을 입력해주세요.')
          this.$refs.email.focus()
        } else if (this.form.tel === '') {
          alert('연락처를 입력해주세요.')
          this.$refs.tel.focus()
        } else if (this.form.know === '') {
          alert('홈핏 인지 경로를 선택해주세요.')
        }
        return false
      }
      axios
        .post('/api/groupSuggest/join/', {
          _method: 'post',
          data_type: 1,
          corporate_name: this.form.company,
          manager_email: this.form.email,
          program_type: this.form.program,
          department: this.form.team,
          manager_responsibility: this.form.position,
          manager_name: this.form.name,
          manager_phone: this.form.tel,
          memo: this.form.contents,
          funnel_channel: this.form.know,
          funnel_etc: '',
        })
        .then(() => {
          alert('기업/단체 신청이 완료되었습니다!\n곧 연락드리겠습니다.')
          this.$router.replace('/f/group/complete/').catch(() => {
            this.closeGroupRegModal()
          })
        })
        .catch(() => {
          alert('오류입니다 별도의 문의 경로로 문의 부탁드립니다.')
        })
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/group_reg_modal.scss';
</style>
