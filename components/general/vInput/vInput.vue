<template>
	<div :class="'input-wrapper input-wrapper_' + type" :style="style">
	<!--Текст и цифры-->
		<div	v-if="type === 'text' || type === 'number'"
		        class="input" :class="'input_' + type"
				contenteditable="true"
				@input.prevent="update($event)"
		        @click="getCaretPosition"
				ref="field"
		        @keydown.enter.prevent
		/>

	<!--Кнопка-->
		<div	v-else-if="type === 'add'"
		        class="input" :class="'input_' + type"
				@click="add"
				ref="field"
				@keydown.enter.prevent
		><i class="fal fa-plus"></i></div>

	<!--Селект-->
		<div	v-else-if="type === 'select'" tabindex="-1"
		        class="input" :class="'input_' + type"
		        @click="dropdown()"
		        @blur="dropdown(false)"
		        ref="field"
		>
			<span class="input__dropdown-title">{{content}}</span>
			<div class="input__segment">
				<i class="fas fa-chevron-down"></i>
			</div>
			<div class="input__dropdown" :active="dropdownCheck">
				<div class="input__dropdown-item" :active="activeItemCheck(index, activeItem)" v-for="(item, index) in dropdownList" v-on:click="switchItem(index)">{{item}}</div>
			</div>
		</div>
	<!--Рэнж-->
		<div v-else-if="type === 'range'" class="input" :class="'input_' + type + ' input_marker_' + markerPosition">
			<input ref="field" type="range" v-model="content">
			<div class="input__range-level input__range-level_low">
				<div class="input__range-level-text">low</div>
			</div>
			<div class="input__range-level input__range-level_medium">
				<div class="input__range-level-text">medium</div>
			</div>
			<div class="input__range-level input__range-level_high">
				<div class="input__range-level-text">high</div>
			</div>
			<div class="input__range-line"></div>
		</div>
		<div class="input-placeholder" v-if="!content.length && placeholder">{{placeholder}}</div>
	</div>
</template>

<script>
	export default {
		props: {
			type: {type: String, required: true}, // number, text, select
			symbolLimit: {type: Number, default: 0}, // 0 - no limit
			allowLineBreak: {type: Boolean, default: false},
			placeholder: {type: String, default: ''},

			width: {type: Number, default: 0},
			height: {type: Number, default: 0},

			markerPosition: {type:String, default: 'top'},

			title: {
				type: String
			},
			dropdownList: {
				type: Array,
				default: () => []
			},
			dropdownDirection: {
				type: String,
			},
			defaultItem: {
				type: Number,
				default: 0
			}

		},
		data() {
			return {
				content: '',
				storage: '',

				sel: undefined,
				caretPosition: 0,
				savedSelection: [],

				activeItem: this.defaultItem,
				dropdownTitle: this.title,

				dropdownOpened: false
			}
		},
		computed: {
			dropdownCheck() {
				return this.dropdownOpened ? '' : false;
			},
			style() {
				let style = (this.width > 0 ? 'width:' + this.width + 'px;' : '') + (this.height > 0 ? 'height:' + this.height + 'px;' : '');
				return style.length > 0 ? style : false;

			}
		},
		mounted() {
			if (this.type === 'range') this.content = 50;

			this.sel = window.getSelection();

			if (this.type === 'select' && this.dropdownList.length) {
				this.content = this.dropdownList[this.activeItem];
			}
		},
		methods: {
			getCaretPosition() {
				this.savedSelection = this.sel.getRangeAt(0);
				// this.caretPosition = this.sel.focusOffset;
			},
			update(event) {
				let textLength = event.target.innerText.length;

				switch (event.inputType) {
					// case 'insertText': {
					// 	if (this.symbolLimit === 0 || textLength <= this.symbolLimit) {
					// 		this.content = event.target.innerText;
					// 	} else {
					// 		this.$refs.field.innerText = this.content;
					// 		this.sel.collapse(this.$refs.field, 1);
					// 	}
					// 	break;
					// }
					case 'insertFromPaste': {
						navigator.clipboard.readText()
							.then(paste => {
								paste = paste.replace(/<[^>]+>/g,'').replace(new RegExp('\n', 'g'), '');

								if (this.symbolLimit === 0 || textLength + paste.length <= this.symbolLimit) {
									event.target.innerText = this.content.slice(0, this.caretPosition) + paste + this.content.slice(this.caretPosition, this.content.length);
								} else {

								}
							});
						break;
					}
					default: {
						if (this.symbolLimit === 0 || textLength <= this.symbolLimit) {
							this.content = event.target.innerText;
						} else {
							this.$refs.field.innerText = this.content;
							this.sel.collapse(this.$refs.field, 1);
						}
						break;
					}
				}

				// this.getCaretPosition();

				// this.sel.removeAllRanges();
				// this.sel.addRange(this.savedSelection);
			},
			add() {

			},
			dropdown(i = undefined) {
				if (typeof i === 'undefined') {
					this.dropdownOpened = !this.dropdownOpened
				} else {
					this.dropdownOpened = i;
				}
			},
			switchItem(index) {
				this.activeItem = index;
				this.content = this.dropdownList[index];
			},
			activeItemCheck(index, activeItem) {
				if (index === activeItem) return '' //Если индекс и выбранный элемент совпадают, то  мы присваиваем атрибуту пустую строку т.е. включаем его
			}
		},
		watch: {
			content(newValue) {
			},
			dropdownOpened(newValue) {
				if(newValue === false) {
					this.$refs.field.blur();
				}
			}
		}
	}
</script>

<style src="assets/styles/general/vInput/vInput.scss" lang="scss"/>
