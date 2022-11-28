<template>
  <div class="c-form">
    <FormulateForm v-model="formValues" #default="{ hasErrors }" @submit="submitHandler">
      <molecule-field>
        <template v-slot:icon>
          <img :src="require('@/assets/icons/user.png')" width="20" alt="Email field" />
        </template>
        <FormulateInput
          name="email"
          type="email"
          placeholder="Username"
          validation="required|email"
        />
      </molecule-field>
      <molecule-field>
        <template v-slot:icon>
          <img :src="require('@/assets/icons/lock.png')" width="15" alt="Email field" />
        </template>
        <FormulateInput
          name="password"
          type="password"
          placeholder="Your password"
          validation="required|min:8"
        />
      </molecule-field>
      <FormulateInput type="submit" label="Sign In" :disabled="hasErrors" class="c-form__submit" />
    </FormulateForm>
    <p class="c-form__note">
      <span>Not a member?</span>
      <router-link to="/" class="c-form__link--sign-up">Sign up now</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { UserState } from '@/store/modules/user/userState';
import { Action, State } from 'vuex-class';
import { APP_ROUTER_PATHS } from '@/app-constants';
import MoleculeField from '@/components/moleculas/MoleculeField.vue';

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  components: { MoleculeField },
})
export default class OrganismLogin extends Vue {
  @Action readonly login: (user: LoginForm) => Promise<void>;
  @State('user') stateUser: UserState;

  formValues: LoginForm = {
    email: '',
    password: '',
  };

  async submitHandler() {
    await this.login(this.formValues);
    await this.$router.push(APP_ROUTER_PATHS.userDetails);
    this.$modal.show('dialog', {
      title: `Your id is ${this.stateUser.id}`,
      buttons: [
        {
          title: 'Ok',
          handler: () => {
            this.$modal.hide('dialog');
          },
        },
      ],
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// Utilities
@import '../../utilities/variables'

.c-form
  margin: auto
  padding: 2em
  display: flex
  flex-direction: column
  justify-content: center
  max-width: 500px
  background-color: $loginForm
  border-radius: 0.5em
  box-sizing: border-box

  &__note
    display: flex
    justify-content: center
    gap: 5px
    color: $white

    span
      color: $gray

  &__submit
    ::v-deep
      button
        width: 100%
        display: flex
        justify-content: center
        text-transform: uppercase
        &:not(disabled)
          background-color: $pink
          border-color: $pink

  &__link
    &--sign-up
      color: $white
      text-decoration: none

  ::v-deep
    .formulate-input-element
      max-width: inherit
      background-color: $loginFormInput

    .formulate-input-error
      color: $red

    input
      color: $white
      border: none
      padding: 15px

      &:hover, &:focus
        border: none
</style>
