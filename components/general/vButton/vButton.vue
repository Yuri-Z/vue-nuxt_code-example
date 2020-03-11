<template>
	<div :class="'button button_' + type">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		props: {
			type: {
				required: true
			}
		}
	}
</script>

<style src="assets/styles/general/vButton/vButton.scss" lang="scss" scoped/>