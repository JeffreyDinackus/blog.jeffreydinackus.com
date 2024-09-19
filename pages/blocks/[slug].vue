<template>
  <BlockLayout :path="`/blocks/${slug}`" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import BlockLayout from '~/components/BlockLayout.vue';

const route = useRoute();
const slug = route.params.slug;
</script>
