<template>
	<div class="social-sidebar">
		<div class="social-sidebar__user">
			<div class="social-sidebar__avatar-frame">
				<v-profile-avatar/>
			</div>
			<div class="social-sidebar__name" v-if="this.$auth.loggedIn">
				<div class="name">{{ this.$auth.user.fullname }}</div>
			</div>
      <div class="social-sidebar__name" v-else>
        <div class="name">Гость</div>
      </div>
			<div class="social-sidebar__user-settings">
				<i class="fas fa-ellipsis-v"/>
			</div>
		</div>
		<div class="social-sidebar__menu">
			<div class="social-sidebar__item" :class="{'social-sidebar__item_gap': item.gap}" v-for="item in items">
				<nuxt-link v-if="!item.gap" :to="item.href ? item.href : false" class="social-sidebar__item-link" :active="activeHrefCheck(item.href)">
					<div class="social-sidebar__item-icon"><i :class="item.icon"/></div>
					<div class="social-sidebar__item-title">
						{{ item.title }}
					</div>
					<div class="social-sidebar__item-notifications" v-if="item.href === '/social/messages'">3</div>
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
				items: [
					{icon: 'fal fa-tv',             title: 'Профиль', href: '/social/profile'},
					{icon: 'fal fa-cabinet-filing', title: 'Cabinet', href: '/social/cabinet'},
					{icon: 'fal fa-chart-bar',      title: 'Рейтинг', href: '/social/rating'},
					{icon: 'fal fa-cog',            title: 'Панель управления', href: '/social/settings'},
					{gap: true},
					{icon: 'fal fa-users',          title: 'Контакты', href: '/social/contacts'},
					{icon: 'fal fa-envelope',       title: 'Сообщения', href: '/social/messages'},
					{icon: 'fal fa-user-friends',   title: 'Группы', href: '/social/groups'},
					{icon: 'fal fa-gopuram',        title: 'Компании', href: '/social/companies'},
					{icon: 'fal fa-briefcase',      title: 'Работа', href: '/social/work'},
					{gap: true},
					{icon: 'fal fa-telescope',      title: 'Новости', href: '/social/news',},
					{icon: 'fal fa-play-circle',    title: 'Видео', href: '/social/video'},
					{icon: 'fal fa-pencil',         title: 'Образование', href: '/social/education'},
					{icon: 'fal fa-users-class',    title: 'Мероприятия', href: '/social/events'},
					{icon: 'fal fa-book',           title: 'Книги', href: '/social/books'},
				],
				names: [
					['Белоусов', 'Май', 'Проклович'],
					['Степанов', 'Леонтий', 'Евсеевич'],
					['Гришин', 'Осип', 'Авдеевич'],
					['Бобров', 'Виссарион', 'Андреевич'],
					['Молчанов', 'Любовь', 'Куприянович'],
					['Королёв', 'Тарас', 'Феликсович'],
					['Зимин', 'Валентин', 'Платонович'],
					['Фокин', 'Альберт', 'Фролович'],
					['Гущин', 'Ираклий', 'Владимирович'],
					['Фомичёв', 'Соломон', 'Святославович'],
					['Шарапов', 'Алексей', 'Семёнович'],
					['Павлов', 'Павел', 'Адольфович'],
					['Беспалов', 'Марк', 'Русланович'],
					['Белов', 'Панкрат', 'Эльдарович'],
					['Бирюков', 'Гарри', 'Максович'],
					['Борисов', 'Зиновий', 'Геннадьевич'],
					['Матвеев', 'Нелли', 'Вениаминович'],
					['Никифоров', 'Нисон', 'Юрьевич'],
					['Колобов', 'Виталий', 'Германович'],
					['Попов', 'Августин', 'Яковович'],
					['Евсеев', 'Вальтер', 'Яковович'],
					['Уваров', 'Аким', 'Валентинович'],
					['Иванов', 'Владлен', 'Натанович'],
					['Соболев', 'Давид', 'Иринеевич'],
					['Архипов', 'Вилен', 'Эдуардович'],
					['Денисов', 'Юрий', 'Степанович'],
					['Никифоров', 'Адриан', 'Русланович'],
					['Цветков', 'Любовь', 'Иванович'],
					['Мартынов', 'Ермак', 'Созонович'],
					['Соболев', 'Бронислав', 'Платонович'],
					['Юдин', 'Гордий', 'Рудольфович'],
					['Русаков', 'Любовь', 'Мэлорович'],
					['Евдокимов', 'Виссарион', 'Геннадьевич'],
					['Стрелков', 'Мечислав', 'Пётрович'],
					['Журавлёв', 'Кассиан', 'Павлович'],
					['Суханов', 'Петр', 'Протасьевич'],
					['Панфилов', 'Ермолай', 'Максович'],
					['Некрасов', 'Илларион', 'Ростиславович'],
					['Павлов', 'Евгений', 'Давидович'],
					['Блохин', 'Корнелий', 'Владимирович'],
					['Симонов', 'Мстислав', 'Петрович'],
					['Комаров', 'Пантелеймон', 'Яковович'],
					['Мельников', 'Фрол', 'Арсеньевич'],
					['Соболев', 'Людвиг', 'Геннадьевич'],
					['Рябов', 'Терентий', 'Эдуардович'],
					['Егоров', 'Вячеслав', 'Богуславович'],
					['Соболев', 'Анатолий', 'Витальевич'],
					['Журавлёв', 'Натан', 'Проклович'],
					['Лихачёв', 'Леонард', 'Васильевич'],
					['Лобанов', 'Аверкий', 'Павлович'],
				]
			}
		},
		mounted() {
			this.nuxt = $nuxt; // Костыль для того, чтобы vue не использовал $nuxt до того, как смонтируется до конца.
		},
		methods: {
			activeHrefCheck(href) {
				if (this.nuxt) {
					return this.nuxt.$route.path.indexOf(href) === 0 ? '' : false;
				}
			}
		}
	}
</script>

<style src="assets/styles/pages/social/_partials/sidebar.scss" lang="scss" scoped/>
