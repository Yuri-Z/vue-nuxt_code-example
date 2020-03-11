<template>
	<div class="skill-bubble">
		<div class="skill-bubble__title">
			{{title}}
		</div>
		<div class="skill-bubble__level">
			{{level}}%
		</div>
		<div class="skill-bubble__delete">
			<i class="fal fa-times"></i>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true
			},
			level: {
				type: Number,
				required: true
			},
		}
	}
</script>

<style src="assets/styles/pages/social/work/resume/skill-bubble.scss" lang="scss" scoped/>