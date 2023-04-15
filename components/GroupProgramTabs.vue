<template>
  <div class="group-program-tabs">
    <p
      class="program-tab tab-violet"
      :class="{ 'tab--on': tab === 'care' }"
      @click="handlerClickTab('care')"
    >
      1:1 맞춤 케어
    </p>
    <p
      class="program-tab tab-green"
      :class="{ 'tab--on': tab === 'lesson' }"
      @click="handlerClickTab('lesson')"
    >
      1:N 단체 레슨
    </p>
  </div>
</template>
<script>
export default {
  name: 'GroupProgramTabs',
  props: {
    tab: { type: String, default: 'care' },
  },
  methods: {
    handlerClickTab(tab) {
      this.$emit('click-tab', tab)
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
</style>
