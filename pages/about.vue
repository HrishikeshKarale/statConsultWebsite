<template>
  <div class="flex flex-col gap-8">
    <!-- <h1 class="flex flex-row flex-nowrap items-center gap-4 h-32 px-16 font-medium leading-tight text-5xl m-0 text-gray-800 bg-gradient-to-r from-orange-500 to-orange-200">
      <span class="font-bold">Precision Point</span>
    </h1> -->

    <!-- team members -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
          Precision Point
        </h1>
      </div>
      <p>
        company description goes here. company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.company description goes here.
      </p>
    </div>

    <!-- team members -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-black">
          Check our awesome team
        </h1>
      </div>
      <div class="flex flex-row flex-nowrap">
        <div class="flex flex-col gap-6">
          <NuxtLink
            v-for="member in teamMembers"
            :key="member.name"
            class="flex flex-col flex-nowrap gap-2 items-center py-2 pr-4 pl-3  dark:bg-blue-700 rounded md:bg-transparent md:p-0"
            aria-current="page"
            :to="{name: member.component?'about-'+member.component:''}"
          >
            <div
              class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <div class="mb-8">
                <img class="object-center object-cover rounded-full h-36 w-36" :src="member.image" alt="photo">
              </div>
              <div class="text-center">
                <p class="text-xl text-white font-bold mb-2">
                  {{ member.name }}
                </p>
                <p class="text-xl text-white font-bold">
                  {{ member.qualification }}
                </p>
                <p class="text-base text-gray-400 font-normal">
                  {{ member.position }}
                </p>
              </div>
            </div>
          </nuxtlink>
        </div>
        <!-- child routes -->
        <article class="flex flex-col w-256 px-4 py-6">
          <NuxtChild />
        </article>
      </div>
    </div>

    <!-- FAQ -->
    <!-- <div class="flex flex-col flex-nowrap justify-start gap-2 px-16">
      <div class="p-8">
        <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
          <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
            FAQ
          </h4>
          <p class="text-center text-gray-600 text-sm mt-2">
            Here are some of the frequently asked questions
          </p>
          <div class="space-y-12 px-2 xl:px-16 mt-12">
            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Lorem ipsum dolor sit amet?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Consectetur adipisicing elit?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Neque eos, dignissimos provident reiciendis debitis?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Repudiandae commodi perferendis et itaque?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Similique fugiat cumque?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-blue-600">
                  <span class="text-4xl text-blue-600 px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-blue-600 font-bold">Impedit iusto vitae dolorum, nostrum fugit?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {teamMembers} from '@/store/team'

export default Vue.extend({
  name: 'About',

  layout: 'masterSlave',

  data () {
    return {
      teamMembers
    }
  }
})
</script>
