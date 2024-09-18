<!-- layouts/default.vue -->
<template>
  <div>
    <Header /> <!-- Include the header component -->
    <NuxtPage /> <!-- This is where your page content will be rendered -->
    <Footer /> <!-- Include the footer component -->
  </div>
</template>

<script setup>
// Import the header and footer components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>