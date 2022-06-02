<template>
  <div class="masterSlaveLayout flex flex-col gap-8">
    <!-- master -->
    <div class="flex flex-col">
      <!-- banner -->
      <address class="flex flex-row-reverse gap-2 px-4 py-1 bg-orange-500  text-white items-center" aria-label="contact number">
        <a href="tel:585-520-7382" class="text-bold"> ( 585 ) 520-7382 </a>
        <font-awesome-icon icon="fa-solid fa-phone" />
      </address>

      <!-- navigation -->
        <primary-navigation class="" :nav="navigationLinks" />
    </div>

    <!-- slave -->
    <main class="flex flex-col gap-4 min-h-screen">
      <!-- breadcrumbs -->
      <breadcrumbs :nav="navigationLinks" />

      <!-- Content -->
      <Nuxt />
    </main>

    <!-- footer -->
    <footer-component />
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
      component: 'services',
      child: [{
        name: 'BIOSTASTICS',
        component: 'bioStat'
      },
      {
        name: 'DATA MANAGEMENT',
        component: 'dataMgmt'
      },
      {
        name: 'STASTICAL PROGRAMMING',
        component: 'statProg'
      }
      ]
    },
    {
      name: 'About',
      component: 'about'
    },
    {
      name: 'Contact',
      component: 'contact'
    }
    ]
    return {
      navigationLinks
    }
  },
}
</script>
