<template>
	<nav class="flex px-16" aria-label="Breadcrumb">
		<ol class="flex flex-nowrap gap-2 items-center">
			<li
				v-for="(crumb, index) in breadCrumbs()"
				:key="crumb.component" 
				class="inline-flex items-center"
				:aria-current="index === breadCrumbs.length-1? 'page':'path'"
			>
      <!-- creates a linked crumb -->
				<NuxtLink v-if="index !== breadCrumbs().length-1" :to="{name: crumb.component}" class="flex flex-nowrap gap-1 items-center">
          <!-- home icon -->
					<icon-home v-if="index === 0" />
          <!-- greater than icon -->
					<icon-greater-than v-else />
          <span class="font-medium text-orange hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange">
					  {{crumb.name}}
          </span>
				</NuxtLink>
        <!-- creates a non linked crumb -->
				<div v-else class="flex flex-nowrap items-center gap-2">
          <!-- home icon -->
					<icon-home v-if="index === 0" />
					<!-- greater than icon -->
					<icon-greater-than v-else />
					<span class="font-bold dark:text-orange-700">{{crumb.name}}</span>
				</div>
			</li>
		</ol>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue'
import navigationLinkType from '@/dataTypes/navigationLinkType'
import IconHome from "~/components/icons/home.vue"
import IconGreaterThan from "~/components/icons/greaterThan.vue"

export default Vue.extend({
  
  name: 'Breadcrumbs',

  components: {
    IconHome,
    IconGreaterThan,
  },
  
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
            link = this.nav.find((el : any) => element === el.component);
            // check secondary nav
            if(index === 1) {
              lvl = 1;
              parent = element;
            }
            break;
          case 1:
            link = this.nav.find((el : any) => {
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
});
</script>