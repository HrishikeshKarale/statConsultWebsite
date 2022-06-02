<template>
  <article class="flex flex-col gap-8">
    <header>
      <h1 class="flex flex-row flex-nowrap items-center gap-4 h-32 px-16 font-medium leading-tight text-5xl m-0 text-gray-800 bg-gradient-to-r from-orange-500 to-orange-200">
        <span class="font-bold">About</span>Us
      </h1>
      <p class="text-base font-light leading-relaxed mt-0 mb-4 px-16">
        Visit us or simply send us an email anytime you want. If you have any questions, please feel free to contact us.
      </p>
    </header>

    <section class="flex flex-row flex-nowrap  justify-start gap-16 px-16" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About',

  layout: 'masterSlave'
})
</script>
