<template lang="html">
  <div class="scrollbar">
    <div class="scrollbar_arrow scrollbar_arrow-up"></div>
    <div class="scrollbar__block">
      <div
        class="scrollbar__block_scroll"
        :style="{
          height: height + '%',
          top: position  + '%',
          transform: `translateY(-${position}%)`
        }"
        ></div>
    </div>
    <div class="scrollbar_arrow scrollbar_arrow-down"></div>
  </div>
</template>

<script>
export default {
  props: ['position', 'height']
}
</script>

<style lang="scss" scoped>
  .scrollbar {
    position: absolute;
    right: 0;
    border-left: 1px solid #e8e6e6;
    width: 20px;
    height: 100%;
    top: 0;
    background: white;
    padding-top: 15px;
    padding-bottom: 15px;
    pointer-events: none;
    z-index: 10;

    &__block {
      position: relative;
      height: 100%;

      &_scroll {
        width: 20px;
        border-left: 6px solid white;
        border-right: 8px solid white;
        height: 100%;
        background: #acddf7;
        margin: auto;
        position: absolute;;
        top: 0;
        transform: translateY(0);
        z-index: 10;
        cursor: pointer;
      }
    }

    &_arrow {
      position: absolute;
      right: 4px;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;

      &-up {
        top: 2px;
        border-bottom: 9px solid #acddf7;
      }

      &-down {
        bottom: 2px;
        border-top: 9px solid #acddf7;
      }
    }
  }
</style>
