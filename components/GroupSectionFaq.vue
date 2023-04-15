<template>
  <div id="groupSectionFaq" class="group-section">
    <div class="section-faq-container group-auto-size">
      <p class="faq-section-title">많은 기업 담당자들이 궁금해<br />하셨어요</p>
      <p class="faq-section-subtitle">자주 묻는 질문(FAQ)을 확인해보세요.</p>
      <div class="faq-list">
        <div
          v-for="f in faq"
          :key="f.id"
          class="faq-item"
          @click="handlerClickFaqItem(f)"
        >
          <p class="faq-question">Q. {{ f.question }}</p>
          <p
            class="faq-answer"
            :class="{ 'faq--on': f.isOpen }"
            v-html="f.answer"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { map } from 'lodash'
import faqList from '~/assets/js/group/faqList'
export default {
  name: 'GroupSectionFaq',
  mixins: [faqList],
  methods: {
    handlerClickFaqItem({ id, isOpen }) {
      this.faq = map(this.faq, (f) =>
        f.id === id ? { ...f, isOpen: !isOpen } : { ...f, isOpen: false }
      )
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionFaq {
  padding: 120px 0;
}
.faq-section-title {
  font-size: 36px;
  font-weight: $bold;
  br {
    display: none;
  }
}
.faq-section-subtitle {
  font-size: 20px;
  font-weight: $medium;
  padding: 12px 0 40px;
  border-bottom: 2px solid #000000;
}
.faq-item {
  border-bottom: 1px solid #e1e1e1;
  cursor: pointer;
  .faq-question {
    font-size: 20px;
    font-weight: $medium;
    padding: 36px 0;
  }
  .faq-answer {
    line-height: 24px;
    padding-bottom: 0;
    max-height: 0;
    transition: all 0.3s ease-out;
    will-change: auto;
    overflow: hidden;
    &.faq--on {
      max-height: 500px;
      padding-bottom: 24px;
      transition: all 0.3s ease-in;
    }
  }
}
@media all and (max-width: 1023px) {
  #groupSectionFaq {
    padding: 60px 0;
  }
  .faq-section-title {
    font-size: 24px;
    br {
      display: block;
    }
  }
  .faq-section-subtitle {
    font-size: 16px;
    font-weight: $regular;
    padding: 12px 0 40px;
  }
  .faq-item {
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    .faq-question {
      font-size: 16px;
      padding: 24px 0;
    }
    .faq-answer {
      font-size: 16px;
      line-height: 20px;
      padding-bottom: 0;
      word-break: keep-all;
    }
  }
}
</style>
