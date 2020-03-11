<template>
	<div class="header-menu">
		<div class="header-menu__inner" tabindex="-1">
			<div class="header-menu__item-wrapper" v-for="item in hrefs" :active="activeItemCheck(item.href)">
				<nuxt-link class="header-menu__item" :to="item.href" tabindex="-1">
					<span>{{item.title}}</span>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nuxt: undefined,
				hrefs: [
					{href: '/education', title: 'Образование'},
					{href: '/social', title: 'Социальная сеть'},
					{href: '/profPost', title: 'Prof-post'},
					{href: '/crm', title: 'CRM'},
				]
			}
		},
		mounted() {
			this.nuxt = $nuxt; // Костыль для того, чтобы vue не использовал $nuxt до того, как смонтируется до конца.
		},
		methods: {
			activeItemCheck(href) {
				if (this.nuxt) {
					return this.nuxt.$route.path.indexOf(href) === 0 ? '' : false;
				}
			}
		},
	}
</script>

<style src="~/assets/styles/general/Header/header-menu.scss" lang="scss" scoped/>