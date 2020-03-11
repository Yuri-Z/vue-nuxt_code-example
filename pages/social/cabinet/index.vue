<template>
	<div class="cabinet" style="font-size: 14px; color: #000000">
		cabinet
	</div>
</template>

<script>
	import vSocialSidebar from "~/components/social/_partials/vSocialSidebar";
	export default {
		layout: 'social',
		components: {
			vSocialSidebar
		}
	}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/general/variables.scss";
    .cabinet {
	    font-family: $san-francisco-pro;
    }
</style>