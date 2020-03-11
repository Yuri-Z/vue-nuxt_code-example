<template>
	<div class="selection-menu__item" :key="activeItemChange" :active="activeCheck()">
		<label class="selection-menu__label">
			<input class="selection-menu__input" :name="group" :value="label" :type="type" v-model="activeItem"/>
			<span :class="'selection-menu__pseudo-input selection-menu__pseudo-input_' + type">
				<span class="selection-menu__pseudo-input-inner">
					<i class="fas fa-check" v-if="activeItem === true"></i>
				</span>
			</span>
			<span class="selection-menu__inner-label" v-if="label">{{label}}</span>
		</label>
		<div class="selection-menu__description" v-if="description">{{description}}</div>
	</div>
</template>

<script>
	export default {
		name: 'v-selection-menu-item',
		props: {
			type:    {type: String, required: true},
			group:   {type: String, required: true},
			label:   {type: String},
			default: {type: Boolean, default: false},
			description: {type: String, default: ''}
		},
		data() {
			return {
				check: undefined,
				activeItem: undefined
			}
		},
		methods: {
			activeCheck() {
				switch (this.type) {
					case 'radio': {
						return this.activeItem === this.label ? '' : false;
					}
					case 'checkbox': {
						return this.activeItem ? '' : false;
					}
				}
			},
		},
		computed: {
			activeItemChange() {
				this.activeItem = this.$store.getters['vSelectionMenu/getActiveTab'](this.group);
			}
		},
		created() {
			if (this.type === 'radio' && this.check === undefined && this.default === true) {
				this.$store.commit('vSelectionMenu/switchItem', {group: this.group, item: this.label});
			}
		},
		watch: {
			activeItem(newValue) {
				if (this.type === 'radio') {
					this.$store.commit('vSelectionMenu/switchItem', {group: this.group, item: newValue});
					this.$bus.$emit('selection-menu-item--' + this.type, newValue)
				}
			}
		}
	}
</script>

<style src="assets/styles/general/vSelectionMenu/vSelectionMenuItem.scss" lang="scss" scoped/>