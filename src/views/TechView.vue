<template>
  <div id="tech">
    <img src="@/assets/images/bg-tech.png" class="bg-default">
    
    <div class="semi-title semi-mg">
      <strong class="count">03</strong>
      SPACE LAUNCH 101
    </div>
    <div class="container">
      <div class="pageinfo mt90">
        <div v-for="launch in launches" :key="launch.id" 
        :class="['pageTab', {'clicked' : commonsStore.menuActive === launch.id, '' : commonsStore.menuActive !== launch.id}]" 
        @click="()=>{
          commonsStore.setMenuActive(launch.id)
          setPageTabActive()
        }">
        {{launch.tabId}}
        </div>
      </div>
      <div class="content mt90">
        <div class="main barCon space">THE TERMINOLOGY ...</div>
        <div class="big title">{{launchInfo.data.title}}</div>
        <div class="description">
          <div class="main p-txt">{{launchInfo.data.description}}</div>
        </div>
      </div>
      <div class="img-con">
        <img :src="require(`@/assets/images/${launchInfo.data.imgUrl}`)" class="">
      </div>
      </div>     
    </div>
</template>

<script>
import { useCommonsStore } from '@/stores/commons'
import { reactive } from 'vue'

export default {
  setup() {
    const launches = require('@/assets/data/character-info.json').LAUNCH
    let launchInfo = reactive([])

    const commonsStore = useCommonsStore()

    const setPageTabActive = () => {
      launches.forEach((launch)=>{
        if (commonsStore.menuActive === launch.id) {
          launchInfo.data = launch
        }
      })
      console.log(launchInfo)
    }

    return { launches, commonsStore, launchInfo, setPageTabActive }
  },

  created() {
    this.setPageTabActive()
    this.commonsStore.resetClicked()
  }
}
</script>
