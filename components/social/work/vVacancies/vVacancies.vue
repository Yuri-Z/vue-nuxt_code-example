<template>
	<div class="vacancies">
		<p class="vacancies__title">Помогу Вам найти работу</p>
		<div class="vacancies__search">
			<input class="vacancies__search-input" type="text" name="" placeholder="Поиск вакансий" value="">
			<button class="vacancies__search-button" type="button" name="button">Hайти</button>
		</div>
		<div class="vacancies__container">
			<div class="row justify-content-space-beetwen" v-if="!error">
				<v-vacancies-block v-for="(vacancy, index) in vacancies" :key="index" :vacancy="vacancy"/>
			</div>
			<div v-else>
				{{ error }}
			</div>
		</div>
	</div>
</template>

<script>
	import vVacanciesBlock from "~/components/social/work/vVacancies/vVacanciesBlock"

	export default {
		components: {
			vVacanciesBlock
		},
		data() {
			return {
				vacancies: {},
				error: ''
			}
		},
		mounted () {
			this.getVacancies()
		},
		methods: {
			getVacancies () {
				this.$axios.get(`http://${process.env.CDN}/vacancies`)
					.then(res => {this.vacancies = res.data})
					.catch(error => this.error = 'Отсутствует соединение с сервером')
			}
		}
	}
</script>

<style src="assets/styles/pages/social/work/vacancies/vacancies.scss" lang="scss" scoped/>
