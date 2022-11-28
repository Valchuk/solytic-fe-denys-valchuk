<template>
  <div id="app">
    <organism-header />
    <router-view></router-view>
    <v-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import OrganismHeader from '@/components/organisms/OrganismHeader.vue';

@Component({
  components: {
    OrganismHeader,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass" scoped>
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
