<template>
	<div class="work">
		<div class="section-header">
			<div class="section-header__primary">Заполните Ваш профиль максимально подробно</div>
			<div class="section-header__secondary">Заполнение профиля влияет на Ваш рейтинг, а так же поможет найти коллег и единомышенников.</div>
		</div>
		<div class="work__tabs">
			<v-tabbing-menu class="work__tab-menu" tabs-group="work"  :items="['Резюме', 'Вакансии', 'Работодатели', 'Фриланс', 'Рынок труда']"/>
			<v-tabbing-area tabs-group="work" :tab="1">
				<v-resume class="work__tab"/>
			</v-tabbing-area>
			<v-tabbing-area tabs-group="work" :tab="2">
				<v-vacancies class="work__tab"/>
			</v-tabbing-area>
			<v-tabbing-area tabs-group="work" :tab="3">
				<div class="work__tab">Работодатели</div>
			</v-tabbing-area>
			<v-tabbing-area tabs-group="work" :tab="4">
				<div class="work__tab">Фриланс</div>
			</v-tabbing-area>
			<v-tabbing-area tabs-group="work" :tab="5">
				<div class="work__tab">Рынок труда</div>
			</v-tabbing-area>
		</div>
	</div>
</template>

<script>
	import vResume from "~/components/social/work/vResume/vResume";
	import vVacancies from "~/components/social/work/vVacancies/vVacancies";

	export default {
		layout: 'social',
		components: {
			vResume,
			vVacancies
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style src="assets/styles/pages/social/work/work.scss" lang="scss" scoped/>
