<template>
  <div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
    <main class="flex-grow container mx-auto px-4 py-12 max-w-4xl">
      <h1 class="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 text-transparent bg-clip-text">
        About Me
      </h1>
      
      <div class="space-y-8">
        <div class="bg-gray-800 shadow-md rounded-lg p-6 border-l-4 border-blue-500">
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            I am a framework agnostic developer, meaning that I choose the platform that best fits the project. I have experience with a wide range of technologies across both frontend and backend development.
          </p>
        </div>

        <div class="bg-gray-800 shadow-md rounded-lg p-6 border-l-4 border-green-500">
          <h2 class="text-2xl font-semibold mb-4 text-gray-100">Technologies I've Worked With</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li><span class="font-semibold text-gray-100">Frontend:</span> React, Next, HTML, CSS, JS, TailwindCSS, BulmaCSS</li>
            <li><span class="font-semibold text-gray-100">Backend:</span> Python, Flask, Express, Node, Postgres, cloud (AWS, GCP), Docker, Twilio</li>
          </ul>
        </div>

        <div class="bg-gray-800 shadow-md rounded-lg p-6 border-l-4 border-purple-500">
          <h2 class="text-2xl font-semibold mb-4 text-gray-100">Technologies I'm Excited About</h2>
          <p class="text-lg text-gray-300 leading-relaxed mb-4">
            I think these technologies have a bright future and I desire to use them further in the future:
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-300">
            <li><span class="font-semibold text-gray-100">Frontend:</span> HTML, CSS, TailwindCSS, Vue/Nuxt, Svelte, Sass</li>
            <li><span class="font-semibold text-gray-100">Backend:</span> Golang, Docker, GCP (AWS probably too), Postgres, Terraform, Twilio</li>
          </ul>
        </div>

        <div class="bg-gray-800 shadow-md rounded-lg p-6 border-l-4 border-yellow-500">
          <h2 class="text-2xl font-semibold mb-4 text-gray-100">Timeline</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full table-auto">
              <tbody>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">Jan 2022</td>
                  <td class="py-2 px-4 text-gray-300">Attend here</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">Dec 2021</td>
                  <td class="py-2 px-4 text-gray-300">Did zy</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2023</td>
                  <td class="py-2 px-4 text-gray-300">Attended first hackathon, Hoyahacks 2023, won for our project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No additional script needed
</script>