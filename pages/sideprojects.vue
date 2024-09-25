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
// import { ref, reactive, computed } from 'vue'

const projectsByYear = reactive({
  2024: [
    { title: "This blog!", color: "", description: "A front end blog using Nuxt and Vue with the goal of establishing more of a developer prescence", technologies: ["HTML", "Nuxt", "TailwindCSS", "CSS", "Hosted on Netlify"], showDetails: false },
    { title: "Full Stack Notetaking App", color: "", description: "A full stack notetaking app that uses my own notetaking structure I developed to max out certifications in a short amount of time", technologies: ["Next", "React", "TailwindCSS", "JSX/HTML", "Firebase Firestore", "NextAuth", "CSS", "Hosting on Vercel"], showDetails: false },
    { title: "The official website for the Northern Virginia Coding Club", color: "", description: "Beautiful React website built with BulmaCSS https://nvcc-coding-club.netlify.app/", technologies: ["React", "BulmaCSS", "CSS", "Animate.css", "Hosted on Netlify"], showDetails: false },
    { title: "My Portfolio Website!", color: "", description: "Static portfolio website using BulmaCSS featuring responsive design and accessability features like media queries and fluid grids, https://jeffreydinackus.com/", technologies: ["Responsive Design", "Accessability", "HTML", "BulmaCSS", "favicon.io icon", "Hosted on GitHub Pages"], showDetails: false },
    { title: "Email Bot", color: "", description: "A Chrome Extension that readings Gmail emails, feeds the info to chatgpt, and summarizes emails and gives potential responses. Built for HackFax 2024", technologies: ["Chrome LocalStorage API", "Express", "MongoDB", "JavaScript", "Python", "HTML", "CSS", "Vite"], showDetails: false },
     { title: "Inverse Money", color: "", description: "A alternative way to denote currency using compression and inverse numbers with a calculator built in Ruby", technologies: ["Ruby"], showDetails: false },
     { title: "The Notes Projects", color: "", description: "A private, self hosted notetaking app that can be hosted in the cloud or on a local network with a web interface. Backs up and injests plaintext. Built for HoyaHacks 2024", technologies: ["MongoDB", "Docker", "React", "Auth0", "JavaScript", "AWS", "Linux", "Git", "HTML/CSS"], showDetails: false },
  ],
  2023: [
  { title: "SafeWalk", color: "blue", description: "Interactive dashboard built with data scrapped from college website provides analytics about safety to students", technologies: ["AWS", "ChatGPT API", "Python", "Flask", "JavaScript", "Linux", "Bootstrap"], showDetails: false },
  { title: "Cloud Resume Challenge", color: "blue", description: "Online resume built with AWS based page counter using AWS API Gateway, AWS Lambda, AWS CloudFront, AWS CloudFormation, CI/CD with AWS CodePipeline, and AWS DynamoDB", technologies: ["AWS", "HTML", "JavaScript"], showDetails: false },
  { title: "DateEscape", color: "blue", description: "Program allows users to send themself preset phone calls and text messages using Twilio, potentially to get out of a date", technologies: ["AWS", "Python", "Twilio"], showDetails: false },
  { title: "Home Network", color: "blue", description: "Home network featuring perfect uptime and coverage due to mesh network. Multiple servers and raspberry pi's acting as PiHole, Plex, Jellyfin, and Graylog", technologies: ["Docker", "Raspberry Pi", "Ubuntu"], showDetails: false },
    { title: "Easy Asset Allocation Calc", color: "blue", description: "Python Ttinkter GUI app and CLI app allow investors to easy calculate, back up, and track their asset allocations using simple question and answer format", technologies: ["Python", "Ttinkter"], showDetails: false },
    
  { title: "Math API", color: "blue", description: "A clone of Vercel's Newton built in Flask with 90% of the functions. Solves calculus", technologies: ["Sympy", "Flask", "Python"], showDetails: false },
  { title: "BeIT.tech", color: "blue", description: "Winning hackathon project for HoyaHacks 2023. IT focused job board that issues NFT's to users who complete jobs", technologies: ["Verbwire API", "AWS", "Python", "Flask", "HTML/CSS","Bootstrap"], showDetails: false },
    { title: "Custom Built Computers", color: "blue", description: "Custom budget PC's built fulfilling preformance needs and budget requirements", technologies: ["AMD", "GigaByte", "Corsair", "Fractal Designs"], showDetails: false },

],
})

const sortedYears = computed(() => {
  return Object.keys(projectsByYear).sort((a, b) => b - a)
})
  
const toggleDetails = (project) => {
  project.showDetails = !project.showDetails
}
</script>