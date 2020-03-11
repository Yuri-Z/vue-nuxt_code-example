<template>
	<div class="profile">
		<div class="row">
			<div class="col-50">
				<div class="profile__main-row">
					<img class="profile__main-img" src="/avatar.png" alt="">
					<div class="profile__main-block">
						<div class="profile__main-profession">Программист</div>
						<div class="m-auto ml-0">
							<p class="profile__main-name">Виктор</p>
							<p class="profile__main-surname">Кузнецов</p>
						</div>
						<div class="profile__main-bar">
							<img src="/progress-bar.webp" class="profile__main-bar_image" alt="">
							<span  class="profile__main-bar_number">76</span>
						</div>
					</div>
				</div>
			</div>
			<div class="col-50">
				<div class="profile__contacts">
					<a href="tel:89233678987" class="profile__contacts-phone">8 923 367 89 87</a>
					<a href="mailto:vitysha@cabinet.one" class="profile__contacts-email">vitysha@cabinet.one</a>
					<a class="profile__contacts-link" href="#">
						+ Cобеседование в  сети Cabinet
						<span class="profile__contacts-question">?</span>
					</a>
				</div>
			</div>
		</div>
		<div v-if="!error && !loading">
			<div class="profile__table">
				<p class="profile__table-string">{{ profile.info.family.join(', ') }}</p>
				<p class="profile__table-string">{{ profile.info.city.join(', ') }}</p>

				<profile-table :info="profile.info"/>
			</div>

			<profile-block title="Желаемая должность и зарплата">
				<template v-slot:content>
					<ul class="profile__block-list" v-for="(position, index) in profile.positions" :key="index">
						<p class="profile__block-list_title">{{ position.title }}</p>
						<li class="profile__block-list_item" v-for="(item, index) in position.list" :key="index">{{ item }}</li>
					</ul>
				</template>
			</profile-block>

			<div v-show="typeof profile.about_me !== 'undefined'" class="profile__clear-block profile__clear-block_about-me">
				<p class="profile__clear-block_title">О себе</p>
				<ul class="profile__clear-block-list">
					<li class="profile__clear-block-list_item" v-for="(item, index) in profile.about_me" :key="index">
						<span class="profile__clear-block_about-me-text">{{ item }}</span>
					</li>
				</ul>
			</div>

			<profile-block title="Опыт работ">
				<template v-slot:content>
					<div class="profile__block-experiences">
						<div class="row" v-for="(experience, index) in profile.experiences" :key="index">
							<div class="col-25">
								<p class="profile__block-experiences_title">{{ experience.company }}</p>
								<p class="profile__block-experiences_time">{{ experience.time }}</p>
								<p class="profile__block-experiences_another-time">{{ experience.another_time }}</p>
							</div>
							<div class="col-50">
								<p class="profile__block-experiences_position">{{ experience.position }}</p>
								<p class="profile__block-experiences_desc">{{ experience.desc }}</p>
							</div>
						</div>
						<p class="profile__block_work-time">6 лет 8 месяцев</p>
					</div>
				</template>
			</profile-block>

			<profile-block title="Ключевые навыки">
				<template v-slot:content>
					<div class="profile__block-skills">
						<div class="scale profile__block-skills_scale">
							<div class="row profile__block-skills_scale-row">
								<div class="offset-25 col-33">
									<div class="scale-row">
										<span class="scale-pipeline scale-pipeline_0">|</span>
										<span class="scale-pipeline">|</span>
										<span class="scale-pipeline scale-pipeline_50">|</span>
										<span class="scale-pipeline">|</span>
										<span class="scale-pipeline scale-pipeline_max">|</span>
									</div>
								</div>
							</div>
						</div>
						<div class="row profile__block-skills_row" v-for="(skill, index) in profile.skills" :key="index">
							<div class="col-25">
								<p class="profile__block-skills_title">{{ skill.title }}</p>
							</div>
							<div class="col-33">
								<div class="progress green">
									<span class="progress-span" :style="{width: +skill.level + '%'}"></span>
								</div>
							</div>
						</div>
					</div>
				</template>
			</profile-block>

			<profile-block title="Образование и повышение квалификации">
				<template v-slot:content>
					<ul class="profile__block-list" v-for="(education, index) in profile.educations" :key="index">
						<p class="profile__block-list_title">{{ education.title }}</p>
						<li class="profile__block-list_item">{{ education.list[0] }}</li>
						<p class="profile__block-list_desc">{{ education.list[1] }}</p>
					</ul>
				</template>
			</profile-block>

			<div class="profile__clear-block">
				<p class="profile__clear-block_title">Знание языков</p>

				<div class="profile__clear-block_languages">
					<div class="row profile__clear-block_languages-row" v-for="(language, item) in profile.languages">
						<div class="col-23">
							<img :src="language.image" class="profile__clear-block_languages-image" alt="">
						</div>
						<div class="col-50">
							<div class="row row-column h-100">
								<p class="profile__clear-block_languages-title">{{ language.title }}</p>
								<div class="profile__clear-block_languages-level progress" v-if="!isNaN(+language.level)">
									<span class="progress-span" :style="{width: +language.level + '%'}"></span>
								</div>
								<p class="profile__clear-block_languages-level" v-else>{{ language.level }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<profile-portfolio :portfolio="profile.portfolio"/>

			<div class="profile__clear-block profile__clear-block_hobbies">
				<p class="profile__clear-block_title">Хобби</p>
				<ul class="profile__clear-block-list" v-for="(hobbie, index) in profile.hobbies" :key="index">
					<li class="profile__clear-block-list_item" v-for="(item, index) in hobbie.list" :key="index">{{ item }}</li>
				</ul>
			</div>

			<div class="profile__clear-block">
				<p class="profile__clear-block_title">Водительское удостоверение и авто</p>
				<ul class="profile__clear-block-list">
					<li class="profile__clear-block-list_item" v-for="(auto, index) in profile.autos" :key="index">{{ auto }}</li>
				</ul>
			</div>

			<profile-socials :socials="profile.socials"/>

			<div class="profile__clear-block">
				<p class="profile__clear-block_title">Разрешение на работу</p>
				<ul class="profile__clear-block-list">
					<li class="profile__clear-block-list_item" v-for="(city, index) in profile.cites" :key="index">{{ city }}</li>
				</ul>
			</div>

		</div>
		<div v-else>
			{{ error }}
		</div>
	</div>
</template>

<script>
	import profileTable from "~/components/social/profile/profileTable"
	import profileBlock from "~/components/social/profile/profileBlock"
	import profilePortfolio from "~/components/social/profile/profilePortfolio"
	import profileSocials from "~/components/social/profile/profileSocials"

	export default {
		layout: 'social',
		components: {
			profileTable,
			profileBlock,
			profilePortfolio,
			profileSocials
		},
		data() {
			return {
				profile: [],
				error: '',
				loading: true
			}
		},
		mounted () {
			this.getProfile()
		},
		methods: {
			getProfile () {
				this.$axios.get(`http://${process.env.CDN}/profile`)
					.then(res => {this.profile = res.data, this.loading = false})
					.catch(error => this.error = 'Отсутствует соединение с сервером')
			}
		}
	}
</script>

<style src="~/assets/styles/pages/social/profile/profile.scss" lang="scss" scoped/>
