<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Latest <span class="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Blog Posts</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(post, index) in blogPosts" :key="index" 
             class="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <img :src="post.image" :alt="post.title" class="w-full h-60 object-cover object-center">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <span class="bg-blue-500 text-xs font-semibold text-white px-2 py-1 rounded-full">{{ post.category }}</span>
              <span class="text-gray-400 text-sm ml-4">{{ post.date }}</span>
            </div>
            <NuxtLink  :to="post.link"><h3 class="text-xl font-bold text-white mb-3 line-clamp-2">{{ post.title }}</h3></NuxtLink>
            <p class="text-gray-400 mb-4 line-clamp-3">{{ post.excerpt }}</p>
            <NuxtLink :to="post.link" class="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300 hover:from-blue-600 hover:to-indigo-700">
              Read More
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const blogPosts = [
{
  title: "Search operators you can actually use",
  category: "Tech",
    date: "October 4, 2024",
    image: "img/searchoperators.jpeg",
    excerpt: "Title says it all. Learn how to use search operators to improve your search results.",
    link: "/searchoperators"
  },
  {
    title: "How to get your first job in IT",
    category: "IT",
    date: "September 16, 2024",
    image: "img/it.jpg",
    excerpt: "A straightforward roadmap to get your first job in IT",
    link: "/it"
  },
 
  // {
  //   title: "Mastering JavaScript: Tips and Tricks",
  //   category: "Programming",
  //   date: "September 19, 2024",
  //   image: "https://via.placeholder.com/800x600",
  //   excerpt: "Unlock the full potential of JavaScript with these advanced techniques and lesser-known features.",
  //   link: "/blog/javascript-mastery"
  // },
  
];
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>