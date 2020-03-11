<template>
	<div class="resume">
		<div class="resume__view">
			<i class="icon-list" @click="changeView('list')" :active="currentView ? '' : false"/>
			<i class="icon-tile" @click="changeView('tile')" :active="currentView ? false : ''"/>
		</div>
		<div class="resume__list" v-if="currentView">
			<div class="resume__rectangle resume__rectangle_horizontal resume-border">
				<div class="resume__rectangle-title">Статус в профессиональной сети *</div>
				<div class="resume__rectangle-menu">
					<div class="resume__rectangle-item">
						<div class="resume__rectangle-radio">
							<v-selection-menu-item
									type="radio"
									group="lfw"
									label="Я в поиске работы"
									:default="true"
									description="Если Вы в поиске работы, данные о Вашей профессиональной деятельности будут доступны работодателям. Заполните ваше резюме."
							/>
						</div>
<!--						<div class="resume__rectangle-description">Если Вы в поиске работы, данные о Вашей профессиональной деятельности будут доступны работодателям. Заполните ваше резюме.</div>-->
					</div>
					<div class="resume__rectangle-item">
						<div class="resume__rectangle-radio">
							<v-selection-menu-item
									type="radio"
									group="lfw"
									label="Я не ищу работу"
							/>
						</div>
						<div class="resume__rectangle-description">Если Вы не в поиске работы, Ваше резюме будет сохранено в архиве. В любой нужный момент Вы сможете его разархивировать.</div>
					</div>
				</div>
			</div>
			<v-resume-block>
				<template v-slot:title>Основная информация</template>
				<template v-slot:body>
					<div class="resume-block__line">
						<div class="resume-block__label">Дата рождения</div>
						<div class="resume-block__birthday-date resume-block__right-column line-of-inputs">
							<v-input class="birthday-date__day" type="number" placeholder="День"/>
							<v-input class="birthday-date__month" type="select" placeholder="Месяц" :dropdown-list="months"/>
							<v-input class="birthday-date__year" type="number" placeholder="Год"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Пол</div>
						<div class="resume-block__sex-selection resume-block__right-column">
							<v-selection-menu-item type="radio" group="sex" label="Мужчина" :default="true"/>
							<v-selection-menu-item type="radio" group="sex" label="Женщина"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Гражданство</div>
						<div class="resume-block__citizenship resume-block__right-column line-of-inputs">
							<v-input class="resume-block__input-text resume-block__citizenship-current" type="text"/>
							<v-input class="resume-block__input-add" type="add"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Город</div>
						<div class="resume-block__city resume-block__right-column line-of-inputs">
							<v-input class="resume-block__input-200" type="select"/>
						</div>
					</div>
				</template>
				<template v-slot:footer>
					<v-selection-menu-item type="checkbox" label="Использовать данные профиля" group="useProfileData"/>
				</template>
			</v-resume-block> <!--Основная информация-->
			<v-resume-block id="#gear cash">
				<template v-slot:title>
					Профессиональная область
				</template>
				<template v-slot:body>
					<div class="resume-block__line">
						<div class="resume-block__label">Сфера профессиональной <br> деятельности *</div>
						<div class="resume-block__professional-activity resume-block__right-column">
							<v-button type="2">Выбрать</v-button>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Желаемая должность *</div>
						<div class="resume-block__purpose-post resume-block__right-column line-of-inputs">
							<v-input class="w-200px" type="text"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Компетенции</div>
						<div class="resume-block__competencies resume-block__right-column line-of-inputs">
							<v-input class="resume-block__input-200" type="text"/>
							<v-input class="resume-block__input-add" type="add"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Желаемая заработная плата</div>
						<div class="resume-block__right-column flex">
							<div class="resume-block__desired-salary-amount line-of-inputs">
								<v-input class="w-125px" type="text"/>
							</div>
							<div class="resume-block__desired-salary-currency line-of-inputs">
								<v-input class="w-50px" type="select"/>
							</div>
						</div>
					</div>
				</template>
				<template v-slot:footer>
					+ Добавить дополнительное поле "О себе"
				</template>
			</v-resume-block> <!--Профессиональная область-->
			<v-resume-block id="#case">
				<template v-slot:title>
					Опыт работы
				</template>
				<template v-slot:body>
					<div class="resume-block__line">
						<div class="resume-block__label">Организация</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-200px" type="text"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Город</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-200px" type="text"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Период работы</div>
						<div class="resume-block__right-column flex aic gap-h-8px">
							<div class="line-of-inputs">
								<v-input class="w-100px" type="select" :dropdown-list="months" placeholder="Месяц"/>
								<v-input class="w-75px" type="text" placeholder="Год"/>
							</div>
							<span>до</span>
							<div class="line-of-inputs">
								<v-input class="w-100px" type="select" :dropdown-list="months" placeholder="Месяц"/>
								<v-input class="w-75px" type="text" placeholder="Год"/>
							</div>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Должность</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-200px" type="text" placeholder="Должность"/>
						</div>
					</div>
					<div class="resume-block__line h-150px aifs">
						<div class="resume-block__label">Обязанности</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px h-150px" type="text"/>
						</div>
					</div>
				</template>
				<template v-slot:footer>
					+ Добавить место работы
				</template>
			</v-resume-block> <!--Опыт работы-->
			<v-resume-block class="resume-block_header-underlined" id="#wrench">
				<template v-slot:title>Ключевые навыки</template>
				<template v-slot:titleDescription>Опишите умения которые могут быть важными для работодателя</template>
				<template v-slot:body>
					<div class="resume-block__line">
						<div class="line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Стратегическое планирование"/>
						</div>
						<v-input type="range" class="resume-block__right-half w-400px" />
					</div>
					<div class="resume-block__line">
						<div class="line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Организаторские способности"/>
						</div>
						<v-input type="range" class="resume-block__right-half w-400px" />
					</div>
					<div class="resume-block__line">
						<div class="line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Управление проектами"/>
						</div>
						<v-input type="range" class="resume-block__right-half w-400px" />
					</div>
				</template>
				<template v-slot:footer>+ Добавить навык</template>
			</v-resume-block> <!--Ключевые навыки-->
			<v-resume-block id="#graduation-cap">
				<template v-slot:title>Образование, повышение квалификации</template>
				<template v-slot:body>
					<div class="resume-block__line">
						<div class="resume-block__label">Уровень *</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Высшее"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Учебное заведение</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Учебное заведение"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Факультет</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Факультет"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Специальзация</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Специализация"/>
						</div>
					</div>
					<div class="resume-block__line">
						<div class="resume-block__label">Год окончания</div>
						<div class="resume-block__right-column line-of-inputs">
							<v-input class="w-400px" type="text" placeholder="Год окончания"/>
						</div>
					</div>
				</template>
				<template v-slot:footer>
					+ Добавить еще одно место обучения
				</template>
			</v-resume-block> <!--Образование-->
			<div class="resume__row" id="#family">
				<div class="resume__col-50">
					<v-resume-block>
						<template v-slot:title>Семейное положение</template>
						<template v-slot:body>
							<div class="row">
								<div class="col-50 gap-v-32px">
									<v-selection-menu-item
											type="radio"
											group="married"
											label="Замужем / Женат"
											:default="true"
									/>
									<v-selection-menu-item
											type="radio"
											group="married"
											label="Не замужем / Не женат"
									/>
								</div>
								<div class="col-50 gap-v-32px">
									<v-selection-menu-item
											type="radio"
											group="children"
											label="Есть дети"
											:default="true"
									/>
									<v-selection-menu-item
											type="radio"
											group="children"
											label="Нет детей"
									/>
								</div>
							</div>
						</template>
					</v-resume-block>
				</div>
				<div class="resume__col-50">
					<v-resume-block>
						<template v-slot:title>График работы *</template>
						<template v-slot:body>
							<div class="row">
								<div class="col-50 gap-v-32px">
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Полный день"
											:default="true"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Удаленная работа"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Вахта"
									/>
								</div>
								<div class="col-50 gap-v-32px">
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Фриланс"
											:default="true"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Гибкий"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="schedule"
											label="Сменный"
									/>
								</div>
							</div>
						</template>
					</v-resume-block>
				</div>
			</div> <!--Семейное положение и График работы-->
			<v-resume-block id="#map-position">
				<template v-slot:title>Готовность к командировкам</template>
				<template v-slot:body>
					<div class="gap-v-32px">
						<div class="row">
							<div class="col-50">
								<v-selection-menu-item
										type="radio"
										group="business-trip-readiness"
										label="Готов"
										description="Какое допустимое время командировки для Вас приемлемо?"
										:default="true"
								/>
							</div>
							<div class="col-50">
								<v-selection-menu-item
										type="radio"
										group="business-trip-readiness"
										label="Не готов"
										description="Для многих работодателей является очень важным фактором готовность соискателя к командировкам."
								/>
							</div>
						</div>
						<div class="row">
							<div class="col-50 gap-v-32px">
								<v-selection-menu-item
										type="checkbox"
										group="business-trip-duration"
										label="Менее месяца"
										:default="true"
								/>
								<v-selection-menu-item
										type="checkbox"
										group="business-trip-duration"
										label="От месяца до полугода"
								/>
								<v-selection-menu-item
										type="checkbox"
										group="business-trip-duration"
										label="Готов к переезду"
								/>
							</div>
						</div>
					</div>
				</template>
				<template v-slot:footer></template>
			</v-resume-block> <!--Готовность к командировкам-->
			<div class="resume__row" id="#kite">
				<div class="resume__col-50">
					<v-resume-block>
						<template v-slot:title>Занятость</template>
						<template v-slot:body>
							<div class="row">
								<div class="col-50 gap-v-32px p-0">
									<v-selection-menu-item
											type="checkbox"
											group="employment"
											label="Полная занятость"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="employment"
											label="Частичная занятость"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="employment"
											label="Проектная деятельность"
									/>
								</div>
								<div class="col-50 gap-v-32px">
									<v-selection-menu-item
											type="checkbox"
											group="employment"
											label="Стажировка"
									/>
									<v-selection-menu-item
											type="checkbox"
											group="employment"
											label="Волнтерство"
									/>
								</div>
							</div>
						</template>
					</v-resume-block>
				</div>
				<div class="resume__col-50">
					<v-resume-block>
						<template v-slot:title>Хобби</template>
						<template v-slot:body>
							<div class="gap-v-8px">
<!--								<div class="resume-block__line">-->
<!--								</div>-->

								<div class="resume-block__label">Расскажите о вашем хобби</div>
								<div class="row col">
									<div class="line-of-inputs p-h-8px">
										<v-input type="text" placeholder="Ваше любимое занятие в свободное время" :width="393" :height="130"/>
									</div>
								</div>
							</div>
						</template>
					</v-resume-block>
				</div>
			</div> <!--Занятость и Хобби-->
			<v-resume-block class="resume-block_header-underlined" id="#document">
				<template v-slot:title>Портфолио</template>
				<template v-slot:titleDescription>Опубликуйте фотографии Ваших работ, и видо-материалы которые демонстрируют Вашу деятельность</template>
				<template v-slot:body>
					<v-tabbing-menu class="portfolio-menu" :items="['Новая папка', '+']" tabs-group="portfolio"/>
					<v-tabbing-area :tab="1" tabs-group="portfolio">
						bla
					</v-tabbing-area>
					<v-tabbing-area :tab="2" tabs-group="portfolio">
						bla bla
					</v-tabbing-area>
				</template>
				<template v-slot:footer></template>
			</v-resume-block> <!--Портфолио-->

			<v-resume-block id="#phone">
				<template v-slot:title>Предпочтительный вид связи</template>
				<template v-slot:body>
					<div class="row col-50">
						<div class="resume-block__line">
							<v-selection-menu-item
									type="radio"
									group="communication"
									label="Эл почта"
									:default="true"
							/>
							<div class="line-of-inputs abs-right">
								<v-input type="text" placeholder="Email" :width="192"/>
							</div>
						</div>
						<div class="resume-block__line">
							<v-selection-menu-item
									type="radio"
									group="communication"
									label="Мобильный телефон"
							/>
							<div class="line-of-inputs abs-right">
								<v-input type="text" placeholder="+7(923) 387 47 63" :width="192"/>
							</div>
						</div>
						<div class="resume-block__line">
							<v-selection-menu-item
									type="radio"
									group="communication"
									label="Только отклики в сети Cabinet"
							/>
						</div>
					</div>
				</template>
			</v-resume-block> <!--Предпочтитиельный вид связи-->
			<v-resume-block id="#globe">
				<template v-slot:title>Владение языками</template>
				<template v-slot:body>
					<div class="row">
						<div class="col-50">
						<div class="resume-block__line row">
							<div class="resume-block__label col-50">Родной язык</div>
							<div class="line-of-inputs col-50">
								<v-input type="select" :dropdown-list="languages" :width="192"/>
							</div>
						</div>
						<div class="resume-block__line row aifs" style="height: auto">
							<div class="resume-block__label col-50">Иностранные языки</div>
							<div class="col-50 gap-v-32px">
								<div>
									<div class="line-of-inputs">
										<v-input type="text" :dropdown-list="languages" :width="192"/>
										<v-input type="add" :width="34"/>
									</div>
									<v-input type="range" marker-position="bottom"/>
								</div>
							</div>
						</div>
						</div>
						<div class="col-50">
							<div class="flex flex-wrap">
								<v-skill-bubble title="Английский"  :level="70" />
								<v-skill-bubble title="Испанский"   :level="3"  />
								<v-skill-bubble title="Белорусский" :level="49" />
								<v-skill-bubble title="Олбанский"   :level="98"/>
								<v-skill-bubble title="Немецкий"    :level="36" />
							</div>
						</div>
					</div>
				</template>
			</v-resume-block> <!--Владение языками-->
<!--			<v-resume-block>-->
<!--				<template v-slot:title></template>-->
<!--				<template v-slot:titleDescription></template>-->
<!--				<template v-slot:body></template>-->
<!--				<template v-slot:footer></template>-->
<!--			</v-resume-block>-->
<!--			<v-resume-block>-->
<!--				<template v-slot:title></template>-->
<!--				<template v-slot:titleDescription></template>-->
<!--				<template v-slot:body></template>-->
<!--				<template v-slot:footer></template>-->
<!--			</v-resume-block>-->
		</div>

		<div class="resume__tiles row" v-else>
			<div class="col-50">
				<div class="resume__rectangle resume__rectangle_vertical resume-border">
					<div class="resume__rectangle-title">Статус в профессиональной сети</div>
					<div class="resume__rectangle-menu">
						<div class="resume__rectangle-item">
							<div class="resume__rectangle-radio">
								<v-selection-menu-item
										type="radio"
										group="lfw"
										label="Я в поиске работы"
										:default="true"
								/>
							</div>
							<div class="resume__rectangle-description">Если Вы в поиске работы, данные о Вашей профессиональной деятельности будут доступны работодателям. Заполните ваше резюме.</div>
						</div>
						<div class="resume__rectangle-item">
							<div class="resume__rectangle-radio">
								<v-selection-menu-item
										type="radio"
										group="lfw"
										label="Я не ищу работу"
								/>
							</div>
							<div class="resume__rectangle-description">Если Вы не в поиске работы, Ваше резюме будет сохранено в архиве. В любой нужный момент Вы сможете его разархивировать.</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-25">
				<div class="resume__photo-square">
					<div class="resume__photo-square-icon">
						<div class="plus-vertical-line"></div>
						<div class="plus-horizontal-line"></div>
					</div>
					<div class="resume__photo-square-title">Добавьте фото резюме</div>
					<div class="resume__photo-square-description"></div>
				</div>
			</div>
			<div class="col-25" v-for="item in cvItems">
				<div class="resume__square resume-border">
					<div class="resume__square-icon" :style="'background-color: ' + item.iconColor"><i :class="'icon-' + item.icon"/></div>
					<div class="resume__square-title">{{item.title}}</div>
					<div class="resume__square-description">
						<v-button class="resume__square-button" type="1" @click.native="changeView(item.icon)">Заполнить</v-button>
						<span class="resume__square-description-text">{{item.description}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vResumeBlock from "~/components/social/work/vResume/vResumeBlock";
	import vSkillBubble from "~/components/social/work/vResume/vSkillBubble";

	export default {
		components: {
			vResumeBlock,
			vSkillBubble
		},
		data() {
			return {
				cvItems: [
					{icon: 'gear', iconColor: '#2c2cf3', title: 'Профессиональная область *', description: 'Укажите ту область, вакансии в которой Вы рассматриваете.'},
					{icon: 'case', iconColor: '#000000', title: 'Опыт работы *', description: 'Описание опыта работы должно быть максимально подробным.'},
					{icon: 'wrench', iconColor: '#aa09c7', title: 'Ключевые навыки', description: 'Опишите умения, которые могут быть важными для работодателя.'},
					{icon: 'graduation-cap', iconColor: '#ed85ea', title: 'Образование, повышение квалификации *', description: 'Образование играет очень важную роль при трудоустройстве.'},
					{icon: 'cash', iconColor: '#407c51', title: 'Желаемая зарплата', description: 'Во сколько Вы оцениваете Ваши услуги на рынке труда.'},
					{icon: 'map-position', iconColor: '#cf065d', title: 'Готовность к командировкам', description: 'Какое допустимое время командировки для Вас приемлемо?'},
					{icon: 'globe', iconColor: '#f3c11d', title: 'Владение языками', description: 'Какими иностранными языками Вы владеете?'},
					{icon: 'kite', iconColor: '#999997', title: 'Хобби', description: 'Ваше любимое занятие в свободное время.'},
					{icon: 'family', iconColor: '#99d0e7', title: 'Семейное положение', description: 'Семейное положение важная составляющая Вашего резюме.'},
					{icon: 'phone', iconColor: '#2a8e9f', title: 'Контактная информация*', description: 'Укажите предпочтительный вид связи.'},
					{icon: 'document', iconColor: '#48afdb', title: 'Портфолио', description: 'Разместите, медиа-материалы, для демонстрации Ваших работ.'},
					// {icon: 'hammer', iconColor: '#b1d3bb', title: 'Дополнительная информация', description: 'Занятость, график, желаемое время пути до работы.'}
				],
				months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
				languages: ['Русский', 'Английский', 'Китайский', 'Испанский', 'Немецкий', 'Португальский', 'Итальянский', 'Французский'],

				currentView: true, // true - list, false - tiles
			}
		},
		methods: {
			changeView(to = 'inverse') {
				switch (to) {
					case 'inverse':
						this.currentView = !this.currentView;
						break;
					case 'tile':
						this.currentView = false;
						break;
					case 'list':
						this.currentView = true;
						break;
					default: {
						let url = location.href;
						if (to === 'cash') to = 'gear';
						this.currentView = true;
						this.$nextTick(() => {
							document.getElementById('#' + to).scrollIntoView();
						});
						history.replaceState(null,null,url);
					}
				}
			},
		},
	}
</script>

<style src="assets/styles/pages/social/work/resume/resume.scss" lang="scss"/>