<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
        Hey there, I'm 
        <span class="bg-gradient-to-r from-blue-400 via-green-400 to-indigo-500 inline-block text-transparent bg-clip-text animate-gradient">Jeffrey Dinackus</span>
      </h1>
      
      <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-4">
         I'm a front end and full stack developer, christian, travel enthusiast, and finance nerd.
      </p>
      <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
        Currently, I'm working as a 
        <span class="font-semibold text-blue-400">systems&nbsp;administrator</span> at 
        <a href="https://technicacorp.com/" class="font-semibold text-green-400 hover:underline">
          Technica&nbsp;Corporation</a> where I manage enterprise systems.
      </p>
    
      <!-- <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
        Currently i'm working as <span>systems administrator</span> at <a href=""><span>company</span></a>
      </p>
                  <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
Welcome to my blog! Here I will write about web dev, IT, other musings.</p>
            <p class="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
I hope you enjoy your stay</p> -->
    </div>
  </div>
  <HomeBlogs />
</template>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 5s ease infinite;
}
</style>