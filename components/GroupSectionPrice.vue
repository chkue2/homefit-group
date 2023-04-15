<template>
  <div id="groupSectionPrice" class="group-section">
    <div class="group-auto-size section-price-container">
      <GroupProgramTabs :tab="tab" @click-tab="handlerClickTab" />
      <GroupCarePrice v-if="tab === 'care'" />
      <GroupLessonPrice v-if="tab === 'lesson'" />
    </div>
  </div>
</template>
<script>
import GroupProgramTabs from '~/components/group/GroupProgramTabs'
import GroupCarePrice from '~/components/group/price/GroupCarePrice'
import GroupLessonPrice from '~/components/group/price/GroupLessonPrice'
export default {
  name: 'GroupSectionPrice',
  components: {
    GroupProgramTabs,
    GroupCarePrice,
    GroupLessonPrice,
  },
  data: () => ({
    tab: 'care',
  }),
  methods: {
    handlerClickTab(tab) {
      this.tab = tab
    },
  },
}
</script>
<style scope lang="scss">
@import '~/assets/scss/group/index.scss';
#groupSectionPrice {
  padding: 120px 0;
  background-color: #f8f8f8;
}
@media all and (max-width: 1023px) {
  #groupSectionPrice {
    padding: 60px 0;
  }
}
</style>
