<template>
  <div class="c-field">
    <div class="c-field__icon">
      <slot name="icon" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MoleculeField extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
// Utilities
@import '../../utilities/variables'

.c-field
  margin-bottom: 10px
  display: flex
  flex-wrap: wrap
  width: 100%

  &__icon
    width: 47px
    height: 47px
    display: flex
    align-items: center
    justify-content: center
    background-color: $loginIconBg

  ::v-deep
    .formulate-input
      flex-grow: 1
</style>
