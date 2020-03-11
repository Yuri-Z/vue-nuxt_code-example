<template>
  <div class="profile__block">
    <p class="profile__block-title">{{ title }}</p>

    <slot name="content"/>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style src="~/assets/styles/pages/social/profile/profileBlock.scss" lang="scss" scoped/>
