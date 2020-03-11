<template>
	<div>
		<v-main-header/>
		<div class="social">
			<v-social-sidebar/>
			<nuxt class="content"/>
		</div>
	</div>
</template>

<script>
	import vMainHeader from "~/components/general/Header/vMainHeader";
	import vSocialSidebar from "~/components/social/_partials/vSocialSidebar";
	export default {
		components: {
			vSocialSidebar,
			vMainHeader,
		}
	}
</script>

<style scoped>
	.social {
		display: flex;
	}
	.content {
		width: 100%;
		margin: 80px;
	}
</style>