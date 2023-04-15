<template>
  <GroupPage
    :is-intro-send-modal="parameter === 'introduction'"
    :is-intro-send-either-open="parameter === 'introduction_complete'"
    :is-reg-modal="parameter === 'trial'"
  />
</template>
<script>
import GroupPage from '~/components/group/GroupPage'
export default {
  name: 'GroupPageNotParameter',
  components: {
    GroupPage,
  },
  asyncData({ params }) {
    return {
      parameter: params.parameter,
    }
  },
}
</script>
