<!-- components/Header.vue -->
<template>
  <header class="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
    <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-extrabold">
        <NuxtLink to="/" class="bg-gradient-to-r from-blue-400 via-green-400 to-indigo-500 inline-block text-transparent bg-clip-text hover:from-blue-500 hover:via-green-500 hover:to-indigo-600 transition-all duration-300">
          Jeffrey Dinackus' Blog
        </NuxtLink>
      </div>

      <ul class="flex space-x-6">
        <li v-for="item in menuItems" :key="item.to">
          <NuxtLink 
            :to="item.to" 
            active-class="text-teal-400 font-bold" 
            class="text-gray-300 hover:text-white hover:underline transition-all duration-200"
          >
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>

const menuItems = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/blog', text: 'Blog' },
  { to: '/sideprojects', text: 'Side Projects' },
  
];
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
