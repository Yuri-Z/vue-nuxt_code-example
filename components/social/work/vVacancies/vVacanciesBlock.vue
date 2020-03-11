<template>
	<div class="col-33">
		<div class="vacancies-block">
			<div class="vacancies-block__title">
				{{ vacancy.title }}
				<span :class="[vacancy.title.length >= 34 ? 'vacancies-block__title-counter-long' : '', 'vacancies-block__title-counter']">{{ vacancy.count }}</span>
			</div>
			<ul class="vacancies-block__list">
				<li class="vacancies-block__list-item" v-for="(category, index) in vacancy.categories" :key="index">
					<a :href="category.url" class="vacancies-block__list-link">{{ category.title }}</a>
				</li>
			</ul>
			<a href="#" class="vacancies-block__link">Показать все категории</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			vacancy: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style src="assets/styles/pages/social/work/vacancies/vacancies-block.scss" lang="scss" scoped/>
