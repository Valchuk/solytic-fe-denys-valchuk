<template>
  <header class="c-header">
    <div class="c-header__wrapper">
      <molecule-links :links="links" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MoleculeLinks from '@/components/moleculas/MoleculeLinks.vue';
import { routes } from '@/router';
import { State } from 'vuex-class';
import { UserState } from '@/store/modules/user/userState';

@Component({
  components: {
    MoleculeLinks,
  },
})
export default class OrganismHeader extends Vue {
  @State('user') stateUser: UserState;

  // Declared as computed property getter
  get links() {
    return routes
      .map((route) => {
        const isLoggedLink = !!(route.props.isLogged && this.stateUser.id);
        const isGuestLink: boolean = route.props.isLogged === false && !this.stateUser.id;

        if (route.props.showInMenu || isGuestLink || isLoggedLink) {
          return {
            url: route.path,
            name: route.props.label,
          };
        }
      })
      .filter((route) => route);
  }
}
</script>
