<template>
	<nav class="flex px-16" aria-label="Breadcrumb">
		<ol class="flex flex-row flws-nowrap gap-4 items-center">
			<li
				v-for="(crumb, index) in breadCrumbs()"
				:key="crumb.component" 
				class="inline-flex items-center"
				:aria-current="index === breadCrumbs.length-1? 'page':'path'"
			>
				<NuxtLink v-if="index !== breadCrumbs().length-1" :to="{name: crumb.component}" class="inline-flex gap-2 items-center font-medium text-orange hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange">
					<svg v-if="index === 0" class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
					<svg v-else class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
					{{crumb.name}}
				</NuxtLink>
				<div v-else class="flex items-center">
					<svg v-if="index === 0" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
					<svg v-else class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
					<span class="ml-1 font-bold md:ml-2 dark:text-orange-700">{{crumb.name}}</span>
				</div>
			</li>
		</ol>
	</nav>
</template>

<script lang="ts">
import navigationLinkType from '@/dataTypes/navigationLinkType'

export default {
  name: 'Breadcrumbs',
  
  props: {
    nav: {
      type: Array,
      required: true
    }
  },

  methods: {
    breadCrumbs: function(): navigationLinkType[] {
      const path = 'index' + (this.$route.path as any);
      const pathArray = path.split('/').filter(crumbs => crumbs);
      let link: any, parent: String, lvl = 0, selectedChild: number;
      let breadCrumns = pathArray.map((element, index) => {
        switch(lvl) {
          case 0:
            link = (this.nav as any).find((el : any) => element === el.component);
            // check secondary nav
            if(index === 1) {
              lvl = 1;
              parent = element;
            }
            break;
          case 1:
            link = (this.nav as any).find((el : any) => {
              // check tertiary nav 
              if(el.component === parent) {
                if(el.child) {
                  const child = JSON.parse(JSON.stringify(el.child));
                  lvl = 2;
                  return child.find((e : navigationLinkType, ind: number) => {
                    if (element === e.component) {
                      selectedChild = ind;
                      return true;
                    }
                    return false
                  });
                }
                return false;
              }
            });
            if(selectedChild !== undefined) {
              link = JSON.parse(JSON.stringify(link.child[selectedChild]));
              link.component = parent+'-'+link.component;
            }
            break;
          default:
            console.error("lvl 2 switch case not set up (nav)");
        };
        return link;
      });
      return breadCrumns.filter(crumbs => crumbs) as any;
    }
  }
}
</script>

<style>

</style>