<template lang="html">
  <div class="profile__portfolio_images slider">
    <button type="button" :class="[slidesLeft === 0 ? 'slider__button-unactive' : '', 'slider__button slider__button-left']" @click="moveRight">
      <svg preserveAspectRatio="none" data-bbox="76.224 19.871 47.552 160.259" viewBox="76.224 19.871 47.552 160.259" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img">
        <g>
          <path d="M121.135 180.13a2.643 2.643 0 0 1-2.324-1.379l-42.264-77.488a2.637 2.637 0 0 1 0-2.53l42.263-77.485a2.646 2.646 0 0 1 3.586-1.056 2.642 2.642 0 0 1 1.056 3.586l-41.575 76.22 41.575 76.222c.7 1.28.227 2.886-1.056 3.586-.4.221-.833.324-1.261.324z"></path>
        </g>
      </svg>
    </button>

    <div class="slider__conatiner">
      <div class="slider__conatiner_images" :style="{ width: 220 * portfolio.length + 'px', marginLeft: marginLeft + 'px' }">
        <div
          v-for="(item, index) in portfolio"
          :class="[folder === index ? 'slider__conatiner_image-current' : '', 'slider__conatiner_image']"
          :style="{ backgroundImage: `url('${item.image}')` }"
          @click="changeFolder(index)"
        ></div>
      </div>
    </div>
    <button type="button" :class="[slidesLeft === portfolio.length - 5 ? 'slider__button-unactive' : '', 'slider__button slider__button-right']" @click="moveLeft">
      <svg preserveAspectRatio="none" data-bbox="76.224 19.871 47.552 160.259" viewBox="76.224 19.871 47.552 160.259" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img">
          <g>
            <path d="M121.135 180.13a2.643 2.643 0 0 1-2.324-1.379l-42.264-77.488a2.637 2.637 0 0 1 0-2.53l42.263-77.485a2.646 2.646 0 0 1 3.586-1.056 2.642 2.642 0 0 1 1.056 3.586l-41.575 76.22 41.575 76.222c.7 1.28.227 2.886-1.056 3.586-.4.221-.833.324-1.261.324z"></path>
          </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['folder', 'portfolio'],
  data() {
    return {
      slidesLeft: 0,
      marginLeft: 0
    }
  },
  watch: {
    slidesLeft () {
      this.marginLeft = -220 * this.slidesLeft - (this.slidesLeft === this.portfolio.length - 5 ? 61 : 0)
    }
  },
  methods: {
    changeFolder(index) {
      this.$emit('change-folder', index)
    },
    moveRight() {
      if (this.slidesLeft > 0) {
        this.slidesLeft--
      }
    },
    moveLeft() {
      if (this.slidesLeft < this.portfolio.length -5) {
        this.slidesLeft++
      }
    }
  }
}
</script>

<style src="~/assets/styles/pages/social/profile/vProfileSlider.scss" lang="scss" scoped/>
