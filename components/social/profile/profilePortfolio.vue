<template lang="html">
  <div class="profile__portfolio">
    <div class="profile__portfolio_header">
      <p class="profile__portfolio_header-title">Портфолио</p>
      <p class="profile__portfolio_header-subtitle">{{ portfolio[currentFolder].title }}</p>
    </div>

    <v-profile-slider :folder="currentFolder" @change-folder="changeFolder" :portfolio="portfolio"/>

    <div class="portfolio">
      <div class="portfolio__image">
        <img :src="portfolio[currentFolder].examples[currentExample].image" width="100%">
      </div>

      <div class="portfolio__body" ref="portfolioBody">
        <div class="portfolio__content" ref="portfolioContent">
          <div class="portfolio__content_text" v-for="(example, index) in portfolio[currentFolder].examples" ref="portfolioText">
            <p
              :class="[(index === currentExample || index === prevExample) ? 'portfolio__content_title-current' : '', 'portfolio__content_title']"
              :style="{top: calcTop(index) + 'px'}"
            >{{ example.title }}</p>
            <p
              :class="[
                (index === currentExample || index === prevExample) ?
                  example.title.length > 52 ? 'portfolio__content_desc-current-big' : 'portfolio__content_desc-current'
                : '',
                'portfolio__content_desc'
              ]"
            >{{ example.desc }}</p>
          </div>
        </div>
      </div>

      <v-scroll :position="scroll.position" :height="scroll.height"/>
    </div>
  </div>
</template>

<script>
import vScroll from "~/components/general/vScroll";
import vProfileSlider from "~/components/social/profile/vProfileSlider";

export default {
  props: ['portfolio'],
  components: {
    vScroll,
    vProfileSlider
  },
  data () {
    return {
      currentFolder: 0,
      currentWork: 0,
      currentExample: 0,
      scrollTop: 0,
      prevExample: -1,
      blockHeight: [],
      scroll: {
        position: 0,
        height: 100
      }
    }
  },
  mounted () {
    this.$refs.portfolioBody.addEventListener('scroll', this.handleScroll)
    this.changeScrollHeight()
    this.setBlockHeight()
  },
  beforeDestroy() {
    this.$refs.portfolioBody.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      this.scrollTop = event.target.scrollTop
      this.scroll.position = this.scrollTop / (event.target.scrollHeight - event.target.clientHeight) * 100

      if (this.scrollTop >= this.blockHeight[this.currentExample] && this.portfolio[this.currentFolder].examples.length - 1 > this.currentExample) {
        this.currentExample++
      } else if (this.scrollTop <= this.blockHeight[this.currentExample - 1] && this.currentExample > 0) {
        this.currentExample--
      }

      if (this.scrollTop >= (this.blockHeight[this.currentExample] - 60) && this.prevExample < this.currentExample) {
        this.prevExample++
      } else if (this.scrollTop <= (this.blockHeight[this.currentExample] - 60) && this.prevExample >= this.currentExample) {
        this.prevExample--
      }
    },
    changeWork(index) {
      this.currentWork = index
    },
    changeFolder(index) {
      this.currentFolder = index
      this.scroll.position = 0
      this.currentExample = 0
      this.prevExample = -1
      this.$refs.portfolioBody.scrollTo(0,0)
      this.$nextTick(() => {
        this.changeScrollHeight()
        this.setBlockHeight()
      })      
    },
    changeScrollHeight() {
      this.scroll.height = this.$refs.portfolioBody.offsetHeight * 100 / this.$refs.portfolioContent.offsetHeight

      if (this.scroll.height > 100) {
        this.scroll.height = 100
      }
    },
    setBlockHeight() {
      let height = 0

      this.blockHeight = this.$refs.portfolioText.map((item, index) => {
        height += this.$refs.portfolioText[index].offsetHeight

        return height
      })
    },
    calcTop(index) {
      if (index === this.prevExample && this.prevExample === this.currentExample) {
        return this.blockHeight[this.currentExample] - this.scrollTop + 21
      }

      if (index < this.currentExample) {
        return 0
      }

      return 80
    }
  }
}
</script>

<style src="~/assets/styles/pages/social/profile/profilePortfolio.scss" lang="scss" scoped/>
