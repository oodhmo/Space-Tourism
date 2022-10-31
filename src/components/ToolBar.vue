<template>
  <div id="toolbar">
    <div class="bar">
      <div class="menu">
        <div :class="['items', {'bor-b' : tab.to === this.$route.path, 'bor-hov' : tab.to !== this.$route.path}]" v-for="tab in tabs" :key="tab.tabId">
          <router-link :to="tab.to">
            <div class="item deco-none" @click="commonsStore.setMenuActive(tab.tabId)">
              <strong class="itemId">{{tab.tabId}}</strong> 
              {{tab.title}}
            </div>
            
            <!--  -->
          </router-link>
        </div>
      </div>
    </div>
    <img src="@/assets/images/bar-line.png" class="line">
    <img src="@/assets/images/bar-icon.png" class="icon">
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCommonsStore } from '@/stores/commons'
//import { useRoute } from 'vue-router'


export default defineComponent({
  setup() {
    const tabs = require('@/assets/data/tabs-info.json')
    const commonsStore = useCommonsStore()

    /* const activeMenu = (item) => {
      commonsStore.setMenuActive()
    } */
    //const route = useRoute();

/*     const setMenuActive = () => {
      let active = commonsStore.menuActive

      tabs.forEach((item) => {
        if (item.to === route.path) {
          active = item.tabId
          commonsStore.setMenuActive(active)
        }
      })
    }
 */
    return {
      tabs,
      commonsStore,
      //setMenuActive
    }
  },
  created() {
    //this.setMenuActive()

    //console.log(this.commonsStore.menuActive)
  },
})
</script>
<style>

</style>