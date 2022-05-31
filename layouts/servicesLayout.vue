<template>
  <master-slave>
    <h1 class="flex flex-row flex-nowrap items-center gap-4 h-32 px-16 font-medium leading-tight text-5xl m-0 text-gray-800 bg-gradient-to-r from-orange-500 to-orange-200"><span class="font-bold">Services</span>We Offer</h1>
    <p class="text-base font-light leading-relaxed mt-0 mb-4 px-16">
      Visit us or simply send us an email anytime you want. If you have any questions, please feel free to contact us.
    </p>
    <nav>
      <ul class="flex flex-col gap-8 md:flex-row md:mt-0 md:text-sm md:font-medium px-16">
        <li
          v-for="element in child"
          :key="element.component"
        >
          <NuxtLink
            class="flex flex-nowrap gap-2 items-center py-2 pr-4 pl-3  dark:bg-blue-700 rounded md:bg-transparent md:p-0"
            aria-current="page"
            :to="{name: 'service-'+element.component}"
          >
            {{ element.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <Nuxt />
  </master-slave>  
</template>

<script lang="ts">
import navigationLinkType from '@/dataTypes/navigationLinkType'
import masterSlave from '~/layouts/masterSlave.vue'

export default {

  components: {
    masterSlave
  },

  data() {
    const child: navigationLinkType[]= [{
        name: 'BIOSTASTICS',
        component: 'bioStat',
      },
      {
        name: 'DATA MANAGEMENT',
        component: 'dataMgmt',
      },
      {
        name: 'STASTICAL PROGRAMMING',
        component: 'statProg',
      }
    ];
    return {
      child
    }
  }
}
</script>
