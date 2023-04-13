<template>
  <div class="masterSlaveLayout flex flex-col">
    <!-- master -->
    <div class="flex flex-col sticky top z-10">
      <!-- banner -->
      <div class="flex flex-row justify-end items-center gap-2 px-4 h-48px bg-orange-500  text-white">
        <!-- <div class="flex flex-row flex-nowrap gap-2 items-center">
          <font-awesome-icon icon="fa-brands fa-twitter" class="p-2" style="font-size: 24px;" />

          <font-awesome-icon icon="fa-brands fa-instagram" class="p-2" style="font-size: 24px;" />
        </div> -->
        Questions? Call us at
        <address class="flex flex-row items-center gap-2">
          <a href="tel:585-451-4233" class="py-2">
            <font-awesome-icon icon="fa-solid fa-phone" />
            +1 (585) 541-4233
          </a>
        </address>
        <!-- or email us at
        <address class="flex flex-row items-center gap-2">
          <a href="mailto:precision.point.us@gmail.com" class="py-2">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            precision.point.us@gmail.com
            </a>
        </address> -->
      </div>

      <!-- navigation -->
      <header class="bg-stone-800">
        <primary-navigation :nav="navigationLinks" />
      </header>
    </div>

    <!-- breadcrumbs -->
    <breadcrumbs :nav="navigationLinks" />

    <!-- slave -->
    <main class="flex flex-col gap-4 z-0">
      <!-- Content -->
      <Nuxt />
      <!-- footer -->
      <footer-component :nav="navigationLinks" />
    </main>
  </div>
</template>

<script lang="ts">
import navigationLinkType from '@/dataTypes/navigationLinkType'

export default {
  data () {
    const navigationLinks: navigationLinkType[] = [{
      name: 'Home',
      component: 'index'
    },
    {
      name: 'Services',
      component: 'services'
      // child: [{
      //   name: 'BIOSTASTICS',
      //   component: 'bioStat'
      // },
      // {
      //   name: 'DATA MANAGEMENT',
      //   component: 'dataMgmt'
      // },
      // {
      //   name: 'STASTICAL PROGRAMMING',
      //   component: 'statProg'
      // }
      // ]
    },
    {
      name: 'About US',
      component: 'about'
      // child: [{
      //   name: 'Subrina Farah',
      //   component: 'Subrina'
      // },
      // {
      //   name: 'Shahriar T',
      //   component: 'Shahriar'
      // },
      // {
      //   name: 'Md. Saif Uddin',
      //   component: 'Saif'
      // }
      // ]
    },
    {
      name: 'Contact',
      component: 'contact'
    }
    ]
    return {
      navigationLinks
    }
  }
}
</script>
