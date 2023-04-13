<template>
  <article>
    <section class="max-w-10xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="container xl:max-w-6xl mx-auto px-4">
        <header class="text-center mx-auto mb-12 lg:px-20">
          <h2 class="text-2xl leading-normal mb-2 font-bold text-white">
            Title
          </h2>
          <p class="text-white leading-relaxed font-light text-xl mx-auto pb-2">
            Subtext to tell people what it means
          </p>
        </header>
      </div>
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input id="default-search" type="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Wha do you need help with?" required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </div>
      </form>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="method of methods"
          :key="method.title"
          class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
        >
          <div class="mb-8">
            <div class="radial-progress bg-accent text-accent-content border-4 border-accent" style="--size:7rem; --value: 75">
              <font-awesome-icon :icon="method.icons" class="p-2" style="font-size: 36px;" />
              <!-- {{ method.rating }}% -->
            </div>
          </div>
          <div class="text-center">
            <p class="text-xl text-white font-bold mb-2">
              {{ method.title }}
            </p>
            <p class="text-base text-gray-400 font-normal">
              {{ method.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import {methods} from '@/store/methods'
export default {
  name: 'methods',

  data () {
    return {
      methods
    }
  }
}
</script>
