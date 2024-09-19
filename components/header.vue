<!-- components/Header.vue -->
<template>
  <header class="bg-gray-800	 text-white shadow">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-xl font-bold">
        <a class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" href="/">Jeffrey Dinackus' Blog</a>
      </div>

      <ul class="flex space-x-4">
  <li>
    <NuxtLink 
      to="/" 
      exact-active-class="fcolor" 
      class=" hover:underline"
    >
      Home
    </NuxtLink>
  </li>
  <li>
    <NuxtLink 
      to="/about" 
      exact-active-class="text-blue-500" 
      class=" hover:underline"
    >
      About
    </NuxtLink>
  </li>
  <li>
    <NuxtLink 
      to="/blog" 
      exact-active-class="text-blue-500" 
      class=" hover:underline"
    >
      Blog
    </NuxtLink>
  </li>
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
