<template>
	<div :tabsgroup="tabsGroup" class="tab-menu" ref="tab-menu">
		<div class="tab-menu__inner">
			<div v-for="(item, index) in items" v-on:click="pickItem(index + 1)" :ref="index+1" class="tab-menu__item" >
				<span class="tab-menu__item-content">{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			tabsGroup:  {type: String, required: true},
			items:      {type: Array,  required: true}
		},
		data() {
			return {
				activeItem: undefined,
			}
		},
		methods: {
			pickItem(index) {
				this.activeItem = index;
				this.$bus.$emit('tab-menu--' + this.tabsGroup, index);
			}
		},
		mounted() {
			this.activeItem = typeof this.$cookies.get('tabs') !== 'object' ? 1 : (typeof this.$cookies.get('tabs')[this.tabsGroup] === 'undefined' ? 1 : this.$cookies.get('tabs')[this.tabsGroup]);
		},
		watch: {
			activeItem(newValue, oldValue) {
				if (oldValue) {
					this.$refs[oldValue][0].removeAttribute('active');
				}
				this.$refs[newValue][0].setAttribute('active','');
				let tabsCookies = this.$cookies.get('tabs') === undefined ? {} : this.$cookies.get('tabs');
				tabsCookies[this.tabsGroup] = newValue;
				this.$cookies.set('tabs', tabsCookies);

				// this.$store.commit('vTabbingMenu/switchItem', {tabsGroup: this.tabsGroup, activeTab: newValue});
			}
		}
	}
</script>

<style src="assets/styles/general/vTabbingMenu/vTabbingMenu.scss" lang="scss" scoped/>