<template>
  <div class="masterSlaveLayout flex flex-col gap-8">
    <!-- master -->
    <div class="flex flex-col sticky top">
      <!-- banner -->
      <div class="flex flex-row-reverse gap-8 px-4 h-48px bg-orange-500  text-white">
        <div class="flex flex-row flex-nowrap gap-2 items-center">
          <font-awesome-icon icon="fa-brands fa-twitter" class="p-2" style="font-size: 24px;" />

          <font-awesome-icon icon="fa-brands fa-instagram" class="p-2" style="font-size: 24px;" />
        </div>

        <address class="flex items-center">
          call now:
          <a href="tel:585-520-7382" class="p-3 text-bold"> ( 585 ) 520-7382 </a>
        </address>
      </div>

      <!-- navigation -->
      <header class="bg-stone-800">
        <primary-navigation />
      </header>
    </div>

    <!-- slave -->
    <main class="flex flex-col gap-4">
      <Nuxt />
      <!-- <Nuxt v-if="!$slots.default" /> -->
      <!-- <slot /> -->
    </main>
  </div>
</template>
