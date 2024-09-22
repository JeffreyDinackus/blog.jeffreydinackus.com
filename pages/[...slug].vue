<template>
  <div v-if="page">
    <div class="text-center"><h1 class="text-xl">{{ page.title }}</h1>
    <p class="text-xl">Author: {{ page.author }}</p>
    <p class="text-xl">Date: {{ page.date }}</p></div>
    <div class="mx-6 my-6 content">
    <ContentRenderer class="text-xl" :value="page" /></div>
  </div>
</template>

<script setup>

const { path } = useRoute()
const { data: page } = await useAsyncData(`content-${path}`, () => 
  queryContent().where({ _path: path }).findOne()
)
</script>