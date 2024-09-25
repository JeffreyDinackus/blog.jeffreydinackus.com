<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-16 text-gray-200">
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">Current Side Projects</h1>

      <div v-for="year in sortedYears" :key="year" class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center">
          My Side Projects for {{ year }}
          <div class="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <ul class="space-y-8">
          <li v-for="project in projectsByYear[year]" :key="project.title" 
              class="p-6 border-l-4 shadow-lg bg-gray-800 rounded-lg transform transition duration-300 hover:scale-105"
              :class="[`border-${project.color}-400`]">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold mb-2" :class="[`text-${project.color}-400`]">
                {{ project.title }}
              </h3>
              <button @click="toggleDetails(project)" class="text-gray-400 hover:text-white">
                <Icon :name="project.showDetails ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-6 h-6" />
              </button>
            </div>
            <p class="text-gray-400" v-if="project.showDetails">{{ project.description }}</p>
            <div v-if="project.showDetails" class="mt-4">
              <span v-for="tech in project.technologies" :key="tech"
                    class="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
                {{ tech }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const projectsByYear = reactive({
  2024: [
    { title: "Portfolio Website", color: "teal", description: "A personal portfolio website showcasing my skills, projects, and experience using HTML, CSS, and JavaScript.", technologies: ["HTML", "CSS", "JavaScript"], showDetails: false },
    { title: "E-commerce Dashboard", color: "teal", description: "Developed an admin dashboard for managing e-commerce orders and inventory using Vue.js and Firebase.", technologies: ["Vue.js", "Firebase"], showDetails: false },
    { title: "Markdown Blog", color: "teal", description: "Built a markdown-based blog system integrated with Jekyll and Tailwind CSS for styling.", technologies: ["Jekyll", "Markdown", "Tailwind CSS"], showDetails: false },
    { title: "Weather App", color: "teal", description: "Created a real-time weather app using React.js and OpenWeatherMap API.", technologies: ["React.js", "OpenWeatherMap API"], showDetails: false }
  ],
  2023: [
    { title: "Task Manager", color: "blue", description: "Developed a task management application with user authentication and real-time updates.", technologies: ["Node.js", "Express", "MongoDB"], showDetails: false },
    { title: "Recipe Finder", color: "blue", description: "Built a recipe search engine that allows users to find recipes based on ingredients they have.", technologies: ["React", "Redux", "Spoonacular API"], showDetails: false },
    { title: "Fitness Tracker", color: "blue", description: "Created a fitness tracking app that monitors daily activities and provides personalized workout plans.", technologies: ["Flutter", "Firebase"], showDetails: false },
    { title: "Budget Planner", color: "blue", description: "Designed a budget planning tool to help users manage their finances and set savings goals.", technologies: ["Vue.js", "Chart.js"], showDetails: false }
  ],
  2022: [
    { title: "Task Manager", color: "blue", description: "Developed a task management application with user authentication and real-time updates.", technologies: ["Node.js", "Express", "MongoDB"], showDetails: false },
    { title: "Recipe Finder", color: "blue", description: "Built a recipe search engine that allows users to find recipes based on ingredients they have.", technologies: ["React", "Redux", "Spoonacular API"], showDetails: false },
    { title: "Fitness Tracker", color: "blue", description: "Created a fitness tracking app that monitors daily activities and provides personalized workout plans.", technologies: ["Flutter", "Firebase"], showDetails: false },
    { title: "Budget Planner", color: "blue", description: "Designed a budget planning tool to help users manage their finances and set savings goals.", technologies: ["Vue.js", "Chart.js"], showDetails: false }
  ]
})

const sortedYears = computed(() => {
  return Object.keys(projectsByYear).sort((a, b) => b - a)
})
  
const toggleDetails = (project) => {
  project.showDetails = !project.showDetails
}
</script>