<!-- components/Header.vue -->
<template>
  <header class="bg-blue-600 text-white shadow">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold">
        <a href="/">My Website</a>
      </div>

      <!-- Links -->
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="hover:underline"> Home</NuxtLink></li>
        <li><NuxtLink to="/" class="hover:underline"> About</NuxtLink></li>
        <li><NuxtLink to="/"class="hover:underline">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  // You can manage props or composables if needed here.
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
