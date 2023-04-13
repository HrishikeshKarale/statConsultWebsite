<template>
  <article class="py-20 lg:py-[120px] overflow-hidden relative z-10">
    <!-- masterSlaveLayout is autoImported here -->
    <!-- component -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.1/dist/full.css" rel="stylesheet" type="text/css"> -->

    <!-- landing page -->
    <section class="flex flex-row justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <head class="flex flex-col gap-16">
        <h1 class="text-5xl font-bold dark:text--gray-700">
          Best consulting team for all your projects
        </h1>
        <p class="text-gray-500 font-regular dark:text-gray-400">
          description goes here.
          a lot of description will go here, something eve catching , something that speaks to the readers.
        </p>
      </head>
      <img src="../assets/abacus-icon.svg" class="h-64" alt="FlowBite Logo">
    </section>

    <!-- area of study -->
    <section class="flex flex-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <header class="text-center mx-auto lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
            Area of Study
          </h2>
          <p class="text-gray-700 leading-relaxed font-light text-xl">
            Subtext to tell people what it means
          </p>
        </header>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden"
        :class="[viewAll? 'h-64': 'h-fit']"
      >
        <div
          v-for="study of areasOfInterest"
          :key="study.title"
          class="w-full bg-gray-900 rounded-lg sahdow-lg p-4 flex flex-col justify-center items-center"
        >
          <font-awesome-icon :icon="study.icons" class="p-2 text-white" style="font-size: 36px;" />
          <div class="text-center">
            <p class="text-xl text-white font-bold mb-2">
              {{ study.title }}
            </p>
            <p class="text-base text-gray-400 font-normal">
              {{ study.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="viewAll" class="flex flex-row-reverse w-full">
        <button class="bg-sky-500 hover:bg-sky-700 w-fit px-2 py-1 rounded-md" @click="viewAll=!viewAll">
          {{ viewAll? 'View all':'Minimize' }}
        </button>
      </div>
    </section>

    <!-- Team stuff -->
    <section class="flex flex-col gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-black">
            Our team
          </h2>
          <!-- team members -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div class="flex flex-row flex-nowrap">
            <div class="grid grid-cols-3 gap-3">
              <NuxtLink
                v-for="member in teamMembers"
                :key="member.name"
                class="items-center py-2 pr-4 pl-3  dark:bg-blue-700 rounded md:bg-transparent md:p-0"
                aria-current="page"
                :to="{name: member.component?'about-'+member.component:''}"
              >
                <div
                  class="flex flex-row gap-4 w-full bg-gray-900 rounded-lg sahdow-lg p-12  justify-center items-center"
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
          </div>
        </div>
          <p class="text-gray-700 leading-relaxed font-light text-xl mx-auto pb-2">
            Precision Point is focused on serving the needs of small and mid-sized biotechs and your project will receive the full attention of our top experts – our A-team. Experience in clinical research and regulatory matters permeates our organization. Our employees apply their expertise with a true commitment to working closely with you in developing treatments for patients who need them. Our organizational ethos is devoted to upholding attributes that are fundamental to achieving these goals.
          </p>
        </header>
        <ol>
          <li>
            Passion
          </li>
          <li>
            Ownership & Accountability
          </li>
          <li>
            Entrepreneurial
          </li>
          <li>
            Teamwork
          </li>
          <li>
            Integrity
          </li>
          <li>
            Continuous Improvement
          </li>
          <li>
            Sense of Urgency
          </li>
        </ol>
      </div>
      <div />
    </section>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import {areasOfInterest} from '@/store/areaOfInterest'
import {methods} from '@/store/methods'
import {teamMembers} from '@/store/team'

export default Vue.extend({
  name: 'IndexPage',

  layout: 'masterSlave',

  data () {
    const viewAll: boolean = true
    return {
      viewAll,
      areasOfInterest,
      methods,
      teamMembers
    }
  }
})
</script>
