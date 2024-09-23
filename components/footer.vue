<!-- components/Footer.vue -->
<template>
  <footer class="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-lg mb-4 md:mb-0">
          <span class="text-blue-400 font-semibold">*.name.com</span> is by 
          <span class="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text font-bold">name</span>
        </p>
        
        <!-- Links -->
        <ul class="flex space-x-6">
          <li v-for="link in socialLinks" :key="link.name">
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-200">
              <Icon :name="link.icon" class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'mdi:github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'mdi:linkedin' },
]
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>