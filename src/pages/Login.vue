<template>
  <div class="c-login">
    <h1>Login</h1>
    <organism-login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OrganismLogin from '@/components/organisms/OrganismLogin.vue';

@Component({
  components: {
    OrganismLogin,
  },
})
export default class Login extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1
  margin: 40px 0 0
</style>
