<template>
  <ul class="c-links">
    <li v-for="(link, index) in links" :key="link.name + index" class="c-links__item">
      <atom-link :link="link" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import AtomLink from '@/components/atoms/AtomLink.vue';
import { Link } from '@/types';

@Component({
  components: {
    AtomLink,
  },
})
export default class MoleculeLinks extends Vue {
  @Prop() private links!: Link[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.c-links
  list-style-type: none
  padding: 0

  &__item
    display: inline-block
    margin: 0 10px
</style>
