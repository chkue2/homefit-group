<template>
  <div id="groupSectionCards" class="group-section">
    <div class="group-auto-size section-cards-container">
      <GroupProgramTabs :tab="tab" @click-tab="handlerClickTab" />
      <GroupCareCard v-if="tab === 'care'" />
      <GroupLessonCard
        v-if="tab === 'lesson'"
        :group-lesson-cards="groupLessonCards"
      />
      <a
        target="_blank"
        class="experience-button button--pc"
        :class="{ 'button--lesson': tab === 'lesson' }"
        @click="openTrialModal"
        >무료 체험 신청</a
      >
    </div>
  </div>
</template>
<script>
import GroupProgramTabs from '~/components/group/GroupProgramTabs'
import GroupCareCard from '~/components/group/cards/GroupCareCard'
import GroupLessonCard from '~/components/group/cards/GroupLessonCard'
export default {
  name: 'GroupSectionCards',
  components: {
    GroupProgramTabs,
    GroupCareCard,
    GroupLessonCard,
  },
  props: {
    groupLessonCards: { type: Array, default: () => [] },
  },
  data: () => ({
    tab: 'care',
  }),
  methods: {
    handlerClickTab(tab) {
      this.tab = tab
    },
    openTrialModal() {
      this.$router.replace('/f/group/trial/')
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionCards {
  padding: 120px 0;
  background-color: #f8f8f8;
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
    margin-top: 40px;
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
    &.button--lesson {
      background-color: $group-green;
    }
  }
}
@media all and (max-width: 1023px) {
  #groupSectionCards {
    padding: 60px 0;
    .experience-button {
      width: 130px;
      height: 42px;
      font-size: 16px;
      margin-top: 24px;
      &::after {
        content: '';
        width: 16px;
        height: 16px;
        @include defaultIcon(
          'https://dcse8twossp9.cloudfront.net/static/img/v2/icon/arrow-right-white.svg'
        );
      }
    }
  }
}
</style>
