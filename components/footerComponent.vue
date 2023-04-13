<template>
  <footer class="flex flex-col px-8 py-8 bg-stone-800 dark:bg-stone-800">
    <div class="flex flex-row-reverse justify-between">
      <!-- logo -->
      <a href="https://flowbite.com" class="flex flex-owrap items-center py-2 gap-4">
        <img src="../assets/abacus-icon.svg" class="h-8" alt="FlowBite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Data Labs</span>
      </a>
      <!-- nav -->
      <nav class="flex gap-8">
        <div>
          <h2 class=" mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Data Labs
          </h2>
          <ul class="flex flex-col gap-4 ml-2 text-gray-600 dark:text-gray-400">
            <li v-for="element in nav" :key="element.component" class="hover:underline">
              <NuxtLink
                aria-current="page"
                :to="{name: element.component}"
              >
                {{ element.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <template v-for="element in nav">
          <div v-if="element.child" :key="element.component">
            <h2 class="mb-6 hover:underline text-sm font-semibold text-gray-900 uppercase dark:text-white">
              {{ element.name }}
            </h2>
            <ul class="flex flex-col gap-4 ml-2 text-gray-600 dark:text-gray-400">
              <li v-for="el in element.child" :key="el.child" class="hover:underline">
                <NuxtLink
                  aria-current="page"
                  :to="{name: element.component+'-'+el.component}"
                >
                  {{ el.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
        <!-- legal -->
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Legal
          </h2>
          <ul class="flex flex-col text-gray-600 gap-4 ml-2 dark:text-gray-400">
            <li class="hover:underline">
              <NuxtLink
                aria-current="page"
                :to="{name: 'index'}"
              >
                Privacy Policy
              </NuxtLink>
              <!-- <a href="#" class="hover:underline">Privacy Policy</a> -->
            </li>
            <li class="hover:underline">
              <NuxtLink
                aria-current="page"
                :to="{name: 'index'}"
              >
                Terms &amp; Conditions
              </NuxtLink>
              <!-- <a href="#" class="hover:underline">Terms &amp; Conditions</a> -->
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- horizontal line -->
    <hr class="w-full my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
        <!-- <a
        href="https://flowbite.com"
        class="hover:underline" >
          Flowbite™
        </a> -->
        , All Rights Reserved.
      </span>
      <div class="flex gap-2 sm:justify-center sm:mt-0">
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <font-awesome-icon icon="fa-brands fa-twitter" class="p-2" style="font-size: 24px;" />
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <font-awesome-icon icon="fa-brands fa-instagram" class="p-2" style="font-size: 24px;" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    nav: {
      type: Array,
      required: true
    }
  }
})
</script>
