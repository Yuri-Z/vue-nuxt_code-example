<template>
	<div class="main-header">
		<nuxt-link to="/" class="logo"><img src="~/static/logo.png" alt=""></nuxt-link>
		<v-main-header-menu/>
		<v-main-header-search/>
		<div class="shortcuts">
			<i class="fal fa-bookmark"/>
			<i class="fal fa-bell"/>
			<i class="fal fa-envelope"/>
		</div>


		<div class="main-header__avatar-frame" @click="() => console.log('!')">
			<v-profile-avatar/>
		</div>
    <div @click="this.showUserMenu">
		  <v-main-header-sidebar/>
    </div>
    <div :class="{'page-header__user-menu': true, 'shown': this.userMenuShown}">
      <nuxt-link tabindex="-1" class="page-header__user-info" to="/social/profile">
        <div class="page-header__user-avatar"></div>
        <span class="page-header__user-name">{{ this.$auth.loggedIn ? this.$auth.user.fullname : 'Гость' }}</span>
      </nuxt-link>
      <template v-if="$auth.loggedIn">
        <nuxt-link tabindex="-1" class="page-header__user-menu-item" to="/social/profile">
          <i class="far fa-user"></i>
          <span>Мой аккаунт</span>
        </nuxt-link>
        <nuxt-link tabindex="-1" class="page-header__user-menu-item" to="/social/messages">
          <i class="far fa-envelope"></i>
          <span>Мои сообщения</span>
        </nuxt-link>
        <nuxt-link tabindex="-1" class="page-header__user-menu-item" to="/">
          <i class="far fa-cog"></i>
          <span>Настройки</span>
        </nuxt-link>
        <a href="#" tabindex="-1" class="page-header__user-menu-item" to="" @click="logout">
          <i class="far fa-sign-out"></i>
          <span>Выход</span>
        </a>
      </template>
      <template v-else>
        <nuxt-link tabindex="-1" class="page-header__user-menu-item" to="/login">
          <i class="far fa-sign-in"></i>
          <span>Вход</span>
        </nuxt-link>
        <a tabindex="-1" class="page-header__user-menu-item" href="http://lar.cabi-net.ru/register/">
          <i class="far fa-user"></i>
          <span>Регистрация</span>
        </a>
      </template>
    </div>
	</div>
</template>

<script>
	import vMainHeaderMenu from "~/components/general/Header/vMainHeaderMenu"
	import vMainHeaderSearch from "~/components/general/Header/vMainHeaderSearch";
	import vMainHeaderSidebar from "@/components/general/Header/vMainHeaderSidebar";
	import vMainHeaderUser from "@/components/general/Header/vMainHeaderUser";

	export default {
		components: {
			vMainHeaderMenu,
			vMainHeaderSearch,
			vMainHeaderSidebar,
			vMainHeaderUser
		},

    data: function () {
		  return {
        userMenuShown: false
      };
    },

    methods: {
		  showUserMenu() {
		    if (this.userMenuShown) {
		      return;
        }

		    this.userMenuShown = true;

		    let hideCount = 0;

		    const hide = () => {
		      hideCount++;

		      if (hideCount === 1) {
		        return;
          }

          this.userMenuShown = false;
          document.body.removeEventListener('click', hide);
        }

        document.body.addEventListener('click', hide);
      },
      logout(evt) {
		    evt.preventDefault();

		    console.log("!");
		    this.$auth.logout();
      }
    }
	}
</script>

<style src="~/assets/styles/general/Header/main-header.scss" lang="scss" scoped/>
