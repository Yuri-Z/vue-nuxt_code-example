<template>
  <div>
    <div class="login">
      <form method="POST" :action="formAction" @submit="submit">
        <input type="hidden" name="_token" :value="csrf">
        <div class="login__header">
          Вход
        </div>

        <div class="login__section">
          <div class="login__field">
            <label class="login__label" for="username">Логин</label>
            <input id="username" type="text"
                   :class="{'login__input-line': true, 'input-valid': this.dataValidation.username === true, 'input-invalid': this.dataValidation.username === false}"
                   name="email" v-model="usernameInput" @change="validateUsername()" required autocomplete="username"
                   tabindex="1">
            <v-valid-check></v-valid-check>
            <div>{{errorUsername}}</div>
            <div class="login__remember">
              <label><input type="checkbox" name="remember" :checked="remember"> Запомнить меня</label>
            </div>
          </div>

          <div class="login__field">
            <label class="login__label" for="password">Пароль</label>
            <input id="password" type="password"
                   :class="{'login__input-line': true, 'input-valid': this.dataValidation.password === true, 'input-invalid': this.dataValidation.password === false}"
                   name="password" v-model="password" @change="validatePassword()" required autocomplete="password"
                   tabindex="2">
            <v-valid-check></v-valid-check>
            <div>{{errorPassword}}</div>
          </div>
        </div>

        <button class="login__submit" type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
      layout: "default",
      props: {
        csrf: String,
        formAction: String,
        username: String,
        remember: Boolean,
        errorUsername: String,
        errorPassword: String
      },
      data() {
        return {
          usernameInput: '',
          password: '',
          dataValidation: {
            username: null,
            password: null
          }
        };
      },

      created() {
        this.usernameInput = this.username;
        if (this.errorUsername) {
          this.dataValidation.username = false;
        }
        if (this.errorPassword) {
          this.dataValidation.password = false;
        }
      },

      methods: {
        validateUsername: function () {

        },
        validatePassword: function () {

        },
        submit: function (evt) {
          evt.preventDefault();
          this.$auth.loginWith('local', {
            data: {
              username: this.usernameInput,
              password: this.password
            }
          }).catch(() => {
            this.dataValidation.username = this.dataValidation.password = false;
            this.errorUsername = 'Неверный логин/пароль';
          })
        }
      }
    }
</script>

<style scoped>

</style>

<style src="~/assets/styles/pages/login.scss" lang="scss" />
