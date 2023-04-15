<template>
  <div>
    <div
      class="channel-talk que_btn"
      @click="handlerClickChannelTalkButton"
    ></div>
    <GroupHeaderWhite :is-header-show="isHeaderShow && !isSideMenu" />
    <div id="groupPage" :class="{ 'side-open-page': isSideMenu }">
      <GroupSectionTop />
      <GroupSectionExperience />
      <GroupSectionCards :group-lesson-cards="groupLessonCards" />
      <GroupSectionChat />
      <GroupSectionProgram />
      <GroupSectionSystem />
      <GroupSectionIndicators />
      <GroupSectionReview />
      <GroupSectionImprovement />
      <GroupSectionInterview />
      <GroupSectionExpert />
      <GroupSectionFaq />
      <GroupSectionPrice />
      <GroupSectionBottom />
      <div class="bg-muk" @click="toggleSideMenu(false)"></div>
    </div>
    <GroupIntroSendModal
      v-if="isIntroSendModal"
      :is-open="isIntroSendModal"
      @toggle-intro-send-either="toggleIntroSendEither"
    />
    <GroupRegModal
      v-if="isRegModal"
      :is-open="isRegModal"
      @toggle-reg-program-intro-modal="toggleRegProgramIntroModal"
    />
    <CommonEmojiEither
      v-if="isIntroSendEither"
      :config="introSendConfig"
      :is-button-column="true"
    />
    <GroupRegProgramIntroModal
      v-if="isRegProgramIntroModal"
      @close-modal="toggleRegProgramIntroModal(false)"
    />
    <LoadingModal v-if="isLoading" />
    <GroupSideMenuMobile />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
import axios from 'axios'
import GroupSectionTop from '~/components/group/GroupSectionTop'
import GroupRegModal from '~/components/group/modal/GroupRegModal'
import GroupRegProgramIntroModal from '~/components/group/modal/GroupRegProgramIntroModal'
import GroupIntroSendModal from '~/components/group/modal/GroupIntroSendModal'
import GroupSideMenuMobile from '~/components/group/GroupSideMenuMobile'
import GroupHeaderWhite from '~/components/group/GroupHeaderWhite'
import GroupSectionCards from '~/components/group/GroupSectionCards'
import GroupSectionChat from '~/components/group/GroupSectionChat'
import GroupSectionProgram from '~/components/group/GroupSectionProgram'
import GroupSectionSystem from '~/components/group/GroupSectionSystem'
import GroupSectionIndicators from '~/components/group/GroupSectionIndicators'
import GroupSectionReview from '~/components/group/GroupSectionReview'
import GroupSectionImprovement from '~/components/group/GroupSectionImprovement'
import GroupSectionInterview from '~/components/group/GroupSectionInterview'
import GroupSectionExpert from '~/components/group/GroupSectionExpert'
import GroupSectionFaq from '~/components/group/GroupSectionFaq'
import GroupSectionPrice from '~/components/group/GroupSectionPrice'
import GroupSectionExperience from '~/components/group/GroupSectionExperience'
import GroupSectionBottom from '~/components/group/GroupSectionBottom'
import helpers from '~/assets/js/helpers'
export default {
  name: 'GroupPage',
  components: {
    GroupSectionTop,
    GroupRegModal,
    GroupRegProgramIntroModal,
    LoadingModal: () => import('~/components/common/LoadingModal'),
    GroupIntroSendModal,
    GroupSideMenuMobile,
    GroupHeaderWhite,
    GroupSectionCards,
    GroupSectionChat,
    GroupSectionProgram,
    GroupSectionSystem,
    GroupSectionIndicators,
    GroupSectionReview,
    GroupSectionImprovement,
    GroupSectionInterview,
    GroupSectionExpert,
    GroupSectionFaq,
    GroupSectionPrice,
    GroupSectionExperience,
    GroupSectionBottom,
    CommonEmojiEither: () => import('~/components/common/CommonEmojiEither'),
  },
  props: {
    isIntroSendModal: { type: Boolean, default: false },
    isRegModal: { type: Boolean, default: false },
    isIntroSendEitherOpen: { type: Boolean, default: false },
  },
  data: () => ({
    isHeaderShow: false,
    isIntroSendEither: false,
    isRegProgramIntroModal: false,
    introSendConfig: {},
    beforeEmail: '',
    beforeTel: '',
    beforeDepartment: '',
    groupLessonCards: [],
  }),
  computed: {
    ...mapState('group', ['isLoading', 'isSideMenu']),
  },
  created() {
    this.fetcB2bhLessonTypes()
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handlerScrollEvent, {
        passive: true,
      })
      window.addEventListener('resize', this.handlerResizeEvent, {
        passive: true,
      })

      setTimeout(() => {
        window.ChannelIO('boot', {
          pluginKey: '53a60258-6cf5-4846-9848-becfb024e3ba',
          memberId: window.homefit?.user?.encryptedId,
          customLauncherSelector: '.que_btn',
          hideChannelButtonOnBoot: false,
        })
      }, 300)

      if (this.isIntroSendEitherOpen === true) {
        const e = helpers.getQueryParameter().e
        const t = helpers.getQueryParameter().t
        const d = helpers.getQueryParameter().d
        this.beforeEmail = isEmpty(e) ? '' : e
        this.beforeTel = isEmpty(t) ? '' : t
        this.beforeDepartment = isEmpty(d) ? '' : d
        this.toggleIntroSendEither(true)
      }
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handlerScrollEvent)
    window.removeEventListener('resize', this.handlerResizeEvent)

    window.ChannelIO('boot', {
      pluginKey: '53a60258-6cf5-4846-9848-becfb024e3ba',
      memberId: window.homefit?.user?.encryptedId,
      customLauncherSelector: '.que_btn',
      hideChannelButtonOnBoot: true,
    })
  },
  methods: {
    ...mapActions('group', ['toggleSideMenu']),
    async fetcB2bhLessonTypes() {
      await axios
        .post('/api/b2b/lessonTypes/', {
          _method: 'get',
        })
        .then((response) => {
          this.groupLessonCards = response.data.indexForOfficePage
        })
    },
    toggleHeaderOpen(val) {
      this.isHeaderShow = val
    },
    toggleIntroSendEither(val) {
      this.introSendConfig = {
        emoji: '🥳',
        title: '소개서 메일 발송 완료!',
        content:
          '추가로 오피스 프로그램을<br>무료로 받아보실 수 있게 도와드릴까요?',
        left: {
          content: '무료체험 신청',
          callback: () => {
            this.handlerClickOpenRegModal()
          },
        },
        right: {
          content: '소개서 먼저 검토하고 연락할게요',
          callback: () => {
            this.handlerClickIntroSendComplete()
          },
        },
      }
      this.isIntroSendEither = val
    },
    toggleRegProgramIntroModal(val) {
      this.isRegProgramIntroModal = val
    },
    handlerScrollEvent() {
      const isScrollPositionBottomSection =
        window.innerHeight + window.scrollY >
        document.querySelector('#groupSectionBottom').offsetTop
      this.toggleHeaderOpen(
        window.scrollY > 0 && !isScrollPositionBottomSection
      )
      document.querySelector('#ch-plugin').style.display =
        window.scrollY > 0 ? 'block' : 'none'
    },
    handlerResizeEvent() {
      if (window.innerWidth >= 1024) {
        this.toggleSideMenu(false)
      }
    },
    handlerClickChannelTalkButton() {
      setTimeout(() => {
        window.scrollTo({ top: 10 })
      }, 100)
    },
    handlerClickOpenRegModal() {
      this.$router
        .replace(
          `/f/group/trial/?e=${this.beforeEmail}&t=${this.beforeTel}&d=${this.beforeDepartment}`
        )
        .catch(() => {})
    },
    handlerClickIntroSendComplete() {
      this.$router.replace('/f/group/').catch(() => {})
    },
  },
}
</script>
<style scoped lang="scss">
@import '~/assets/scss/group/index.scss';
#groupPage {
  overflow-x: hidden;
}
.channel-talk {
  opacity: 0;
  visibility: hidden;
  transition: opacity, visibility 0.3s ease;
  z-index: 9;
  &.show {
    opacity: 1;
    visibility: visible;
  }
}
@media all and (max-width: 1023px) {
  #groupPage {
    overflow-x: hidden;
    transform: translateX(0);
    transition: transform 0.3s ease;
    will-change: auto;
    &.side-open-page {
      transform: translateX(-300px);
      .bg-muk {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }
}
</style>
<style lang="scss">
body {
  overflow-x: hidden !important;
}
.ch-body-block-scrolling.ch-iphone-block-scrolling {
  position: unset !important;
  width: auto !important;
  height: auto !important;
  overflow-x: hidden !important;
  overflow-y: unset !important;
  z-index: 1 !important;
}
</style>
