<template>
  <nav class="px-8 py-4 bg-stone-800">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex gap-16  items-end">
        <a href="https://flowbite.com" class="flex items-center">
          <img src="../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Data Labs</span>
        </a>
        <div id="mobile-menu-4" class="hidden justify-between items-center w-full md:flex md:w-auto">
          <ul class="flex flex-col gap-16 md:flex-row md:mt-0 md:text-sm md:font-medium">
            <li
              v-for="element in nav"
              :key="element.component"
              class="group w-fit"
            >
              <NuxtLink
                class="flex flex-nowrap gap-2 items-center py-2 pr-4 pl-3 text-white dark:bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
                :to="{name: element.component}"
              >
                {{ element.name }}
                <font-awesome-icon
                  v-if="element.child"
                  icon="fa-solid fa-chevron-down"
                  class="rotate-180 group-hover:rotate-0"
                />
              </NuxtLink>
              <div
                v-if="element.child"
                class="hidden group-hover:block absolute bg-orange-50 rounded-lg"
              >
                <ul class="flex flex-col gap-4 px-4 py-3 md:mt-0 md:text-sm md:font-medium">
                  <li
                    v-for="el in element.child"
                    :key="el.component"
                  >
                    <NuxtLink
                      class="block py-2 pr-4 pl-3  text-gray-900 dark:bg-blue-700 rounded-lg md:bg-transparent md:p-0"
                      aria-current="page"
                      :to="{name: element.component+'-'+el.component}"
                    >
                      {{ el.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex md:order-2">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Get started
        </button>
        <button data-collapse-toggle="mobile-menu-4" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
          <span class="sr-only">
            Open main menu
          </span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PrimaryNavigation',
  
  props: {
    nav: {
      type: Array,
      required: true
    }
  },
})
</script>
