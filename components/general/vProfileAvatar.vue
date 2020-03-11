<template>
	<div class="avatar-frame">
		<div class="profile-avatar">
			<img src="~/static/avatar.png" class="profile-avatar__image" alt="" ref="image">
			<svg class="profile-avatar__inner-circle" width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(110,110)">
					<circle r="100" class="circle-base"/>
					<g><circle r="100" class="circle-progress" :style="'stroke-dasharray: ' + fullCircleLength + '; stroke-dashoffset: ' + fill.computed.inner"/></g>
				</g>
			</svg>
			<svg class="profile-avatar__outer-circle" width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
				<g transform="translate(110,110)">
					<circle r="100" class="circle-base"/>
					<g><circle r="100" class="circle-progress" :style="'stroke-dasharray: ' + fullCircleLength + '; stroke-dashoffset: ' + fill.computed.outer"/></g>
				</g>
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
		},
		data() {
			return {
				fullCircleLength: Math.PI * 2 * 100, // полная длина окружности
				fill: {             // Данные для заполнения кругов вокруг аватарки
					input: {        // Значение в процентах. Отображает заполненнть круга. Приходит из БД
						inner: 0,   // Парные значения для внутреннего и внешнего кольца соответственно.
						outer: 0
					},
					computed: {     // Длина части окружности в реальных единицах измерения, которая соответствует процентному значению из предыдущей переменной
						inner: 628, // При перезагрузке страницы равен 628, т.е. круг пустой
						outer: 628
					}
				},
				time: 1 // продолжительсность заполнения в секундах
			}
		},
		methods: {
			compute(circle, value) {
				this.fill.computed[circle] = (this.fullCircleLength - (this.fullCircleLength * value / 100));
			}
		},
		mounted() {
			this.fill.input.inner = 85;
			this.fill.input.outer = 65;

			setTimeout(() => {
				this.compute('inner', this.fill.input.inner);
				this.compute('outer', this.fill.input.outer)
			}, 300)
		}
	}
</script>

<style src="~/assets/styles/general/vProfileAvatar/vProfileAvatar.scss" lang="scss" scoped/>
