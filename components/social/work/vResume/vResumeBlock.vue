<template>
	<div class="resume-block resume-border">
		<div class="resume-block__header" v-if="$slots.title || $slots.titleDescription">
			<div class="resume-block__title" v-if="$slots.title">
				<slot name="title"/>
			</div>
			<div class="resume-block__title-description" v-if="$slots.titleDescription">
				<slot name="titleDescription"/>
			</div>
		</div>
		<div class="resume-block__body" v-if="$slots.body">
			<slot name="body"/>
		</div>
		<div class="resume-block__footer" v-if="$slots.footer">
			<slot name="footer"/>
		</div>
	</div>
</template>

<script>
	export default {

		mounted() {
			// console.log('Слоты', this.$slots);
		}
	}
</script>