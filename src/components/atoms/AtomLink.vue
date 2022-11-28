<template>
  <router-link :to="link.url">
    {{ link.name }}
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Link } from '@/types';

@Component
export default class AtomLink extends Vue {
  @Prop() private link!: Link;
}
</script>
