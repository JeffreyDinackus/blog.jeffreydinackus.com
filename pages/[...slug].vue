<template>
  <div v-if="page" class="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-16 text-gray-200">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <article class="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <div class="p-8">
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">{{ page.title }}</h1>
          <div class="flex items-center text-gray-400 text-sm mb-6">
            <Icon name="mdi:account" class="w-5 h-5 mr-2" />
            <span class="mr-4">{{ page.author }}</span>
            <Icon name="mdi:calendar" class="w-5 h-5 mr-2" />
            <span>{{ formatDate(page.date) }}</span>
          </div>
          <div class="prose prose-lg prose-invert max-w-none">
            <ContentRenderer :value="page" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useAsyncData, queryContent } from '#imports'

const route = useRoute()
const { data: page } = await useAsyncData(`content-${route.path}`, () => 
  queryContent().where({ _path: route.path }).findOne()
)

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}
</script>

<style>
.prose h2 {
  @apply text-2xl font-bold text-white mt-8 mb-4;
}
.prose h3 {
  @apply text-xl font-semibold text-white mt-6 mb-3;
}
.prose p {
  @apply mb-4 text-gray-300;
}
.prose a {
  @apply text-blue-400 hover:text-blue-300 transition-colors duration-200;
}
.prose ul, .prose ol {
  @apply my-4 pl-6;
}
.prose li {
  @apply mb-2;
}
.prose blockquote {
  @apply border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400;
}
.prose code {
  @apply bg-gray-700 rounded px-1 py-0.5 text-sm font-mono;
}
.prose pre {
  @apply bg-gray-700 rounded p-4 overflow-x-auto my-4;
}
</style>