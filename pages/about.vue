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
                  <td class="py-2 px-4 text-gray-400 font-medium">September 2023</td>
                  <td class="py-2 px-4 text-gray-300">Built and shipped this blog!</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">September 2024</td>
                  <td class="py-2 px-4 text-gray-300">Built full stack notetaking app with React, Firebase, and Next Auth</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">July 2024</td>
                  <td class="py-2 px-4 text-gray-300">Passed Microsoft Applied Skills test, Configure secure access to your workloads using Azure networking
                  </td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">July 2024</td>
                  <td class="py-2 px-4 text-gray-300">Earned Microsoft Security, Compliance, and Identity Fundamentals SC 900</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">April 2024</td>
                  <td class="py-2 px-4 text-gray-300">Earned JNCIS ENT, Juniper Enterprise Routing and Switching certification</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">April 2024</td>
                  <td class="py-2 px-4 text-gray-300">Earned Azure Fundamentals AZ 900</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">March 2024</td>
                  <td class="py-2 px-4 text-gray-300">Earned Microsoft 365 Fundamentals MS 900</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">Febuary 2024</td>
                  <td class="py-2 px-4 text-gray-300">Attended HackFax 2023, where my team and I built Chrome Extension with React and Vite that summarizes Gmails using Chatgpt API</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">Febuary 2024</td>
                  <td class="py-2 px-4 text-gray-300">Built official website for the NVCC Coding Club <a href="https://nvcc-coding-club.netlify.app/">nvcc-coding-club.netlify.app</a></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2024</td>
                  <td class="py-2 px-4 text-gray-300">Architected a alternative way to denote currency using negative numbers, and built a converter in Ruby</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2024</td>
                  <td class="py-2 px-4 text-gray-300">Started doing leetcode with Ruby, solved around 40 problems in 1 month</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2024</td>
                  <td class="py-2 px-4 text-gray-300">Attended HoyaHacks 2024, designed, built, and shipped full stack notetaking app with React, Docker, and MongoDB</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2024</td>
                  <td class="py-2 px-4 text-gray-300">Earned JNCIA Junos</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Built API with flask, which solves calculus equations</td>
                </tr>
                
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Finished chrome extension started at HackNC, released on Chrome Store</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Released Emoji Keyboard on Chrome Store, users downloaded the app after launch</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Attended HackNC, built a chrome extension that changes CSS styles dynamically for colorblind people</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned Palo Alto PCNSA</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">November 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned Free Code Camp's Responsive Web Design course</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">October 2023</td>
                  <td class="py-2 px-4 text-gray-300">Scraped first website at Patriothacks 2023</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">October 2023</td>
                  <td class="py-2 px-4 text-gray-300">Attended PatriotHacks 2023, built a dashboard analyzing safety for students at my university</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">September 2023</td>
                  <td class="py-2 px-4 text-gray-300">Completed Free Code Camp's Javascript DSA course</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">September 2023</td>
                  <td class="py-2 px-4 text-gray-300">Accepted offer at Technica Corporation, as a Systems Administrator</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">August 2023</td>
                  <td class="py-2 px-4 text-gray-300">Completed Cloud Resume challenge using AWS</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">August 2023</td>
                  <td class="py-2 px-4 text-gray-300">Graduated college with 2 associate degrees in information systems and cloud computing, Magna Cum Laude</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">July 2023</td>
                  <td class="py-2 px-4 text-gray-300">Started building Python Projects, continued DateEscape and built some investment focused projects</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">June 2023</td>
                  <td class="py-2 px-4 text-gray-300">Built custom computers using own builds</td>
                </tr>
                   
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">May 2023</td>
                  <td class="py-2 px-4 text-gray-300">Built portfolio website using Bulma CSS: <a href="https://jeffreydinackus.com">jeffreydinackus.com</a></td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">May 2023</td>
                  <td class="py-2 px-4 text-gray-300">Elected President of the NVCC Coding Club</td>
                </tr> 
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">May 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned CompTIA Security+</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2 px-4 text-gray-400 font-medium">April 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned AWS Solutions Architect Associate. Fell in love with the cloud as a developer</td>
                </tr>
                                  <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">March 2023</td>
                  <td class="py-2 px-4 text-gray-300">Attended HoyaHacks 2023, built a app that allows users to send automated voice calls and text messages to their phone, one use case being to get out of a date</td>
                </tr>
                                  <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">March 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned Certified Cloud Practitioner! Became very interested in the cloud for developers especially AWS and GCP</td>
                </tr>
                                  <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">Febuary 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned CompTIA Linux+ </td>
                </tr>
                <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2023</td>
                  <td class="py-2 px-4 text-gray-300">Attended first hackathon, Hoyahacks 2023, won for our project</td>
                </tr>
                                  <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">Later in Jan 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned CompTIA A+!</td>
                </tr>
                  <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">Jan 2023</td>
                  <td class="py-2 px-4 text-gray-300">Earned CompTIA Network+! the start of something great</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">August 2022</td>
                  <td class="py-2 px-4 text-gray-300">Built website for first client by using bootstrap which I learned in 3 days, <a href="https://tcqcpatches.com/" >tcqcpatches.com</a></td>
                </tr>
                <tr>
                  <td class="py-2 px-4 text-gray-400 font-medium">January 2022</td>
                  <td class="py-2 px-4 text-gray-300">Learned HTML and CSS using Jennier Robbins book, fell in love with front end development</td>
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