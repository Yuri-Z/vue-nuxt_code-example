<template><div class="tabbing-area" :active="isActive"><slot/></div></template>

<script>
	export default {
		props: {
			tab:        {type: Number, required: true},
			tabsGroup:  {type: String, required: true},
		},
		data() {
			return {
				// Если записи для конкретного меню нет, то активный пункт будет 1. Иначе беру номер пункта из куки
				activeItem: typeof this.$cookies.get('tabs') !== 'object' ? 1 : (typeof this.$cookies.get('tabs')[this.tabsGroup] === 'undefined' ? 1 : this.$cookies.get('tabs')[this.tabsGroup]),
			}
		},
		computed: {
			isActive() {return this.activeItem === this.tab ? '' : false}
		},
		mounted() {
			this.$bus.$on('tab-menu--' + this.tabsGroup, (index) => {
				this.activeItem = index;
			})
		}
	}
</script>

<style lang="scss" scoped>
	.tabbing-area {
		display: none;

		&[active] {
			display: flex;
		}
	}
</style>