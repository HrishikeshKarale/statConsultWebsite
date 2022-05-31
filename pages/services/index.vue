<template>
  <div>
    I am services
    <ul class="flex flex-col gap-16 md:flex-row md:mt-0 md:text-sm md:font-medium">
      <li
        v-for="element in child"
        :key="element.component"
      >
        <NuxtLink
          class="flex flex-nowrap gap-2 items-center py-2 pr-4 pl-3  dark:bg-blue-700 rounded md:bg-transparent md:p-0"
          aria-current="page"
          :to="{name: 'services-'+element.component}"
        >
          {{ element.name }}
        </NuxtLink>
      </li>
    </ul>
    <nuxt-child />
  </div>  
</template>

<script lang="ts">
import navigationLinkType from '@/dataTypes/navigationLinkType'

export default {
  name: 'ServicesPage',

  layout: 'masterSlave',

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
