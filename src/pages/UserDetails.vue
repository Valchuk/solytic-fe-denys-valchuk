<template>
  <div class="c-user-details">
    <h1>User Details</h1>
    <table class="c-user-details__table">
      <tr class="c-user-details__row">
        <td class="c-user-details__cell">User Id</td>
        <td class="c-user-details__cell">
          {{ userId }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OrganismLogin from '@/components/organisms/OrganismLogin.vue';
import { State, Getter } from 'vuex-class';
import store from '@/store';
import { UserState } from '@/store/modules/user/userState';
import { APP_ROUTER_PATHS } from '@/app-constants';
import { Route, NavigationGuardNext } from 'vue-router';

@Component({
  components: {
    OrganismLogin,
  },
})
export default class UserDetails extends Vue {
  @State('user') stateUser: UserState;
  @Getter('getUserId') userId: number | undefined;

  beforeRouteEnter(to: Route, from: Route, next: NavigationGuardNext) {
    if (!store.getters?.getUserId) {
      next(APP_ROUTER_PATHS.home);
    }

    next();
  }
}
</script>

<style lang="sass" scoped>
.c-user-details
  &__table
    margin: auto
    width: 100%
    max-width: 400px
    border-collapse: collapse

  &__row, &__cell
    padding: 5px 10px

  &__table, &__row, &__cell
    border: 1px solid
</style>
