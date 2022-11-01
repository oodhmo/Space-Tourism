<template>
  <div id="destination" class="bck-bl">
    <div class="container">
      <img src="@/assets/images/bg-default.jpg" class="bg-default">
      <div class="semi-title">
        <strong class="count">01</strong>
        PICK YOUR DESTINATION
      </div>
      <div class="planets">
        <!-- planet imgs -->
        <div class="img">
          <img :src="require(`@/assets/images/${planetInfo.section.imgUrl}`)">
        </div>

        <div class="info">
          <div class="tabs">
            <div v-for="planet in planets" :key="planet.tabId" :class="['tab', {'clicked': commonsStore.tabActive === planet.tabId, '':commonsStore.tabActive!==planet.tabId}]"> 
              <div @click="() => {
                commonsStore.setMiniTabActive(planet.tabId)
                setTabActive() }">
                {{ planet.title }}
              </div>
            </div>
          </div>
            <!-- planet description -->
          <div class="description">
            <div class="title">{{ planetInfo.section.title }}</div>
            <div class="main p-txt">{{ planetInfo.section.description }}</div>
          </div>

          <div class="travel">
            <div class="avg">
              <div class="sm-title">AVG. DISTANCE</div>
              <div class="numer">{{planetInfo.section.distance}}</div>
            </div>
            <div class="time">
              <div class="sm-title">EST. TRAVEL TIME</div>
              <div class="numer">{{planetInfo.section.time}}</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonsStore } from '@/stores/commons'
import { reactive } from 'vue'
//import _ from 'lodash'

export default {
  setup() {
    const planets = require('@/assets/data/tabs-info.json').PLANET.items
    let planetInfo = reactive([])

    const commonsStore = useCommonsStore()

    const setTabActive = () => {
      planets.forEach((planet)=>{
        if (commonsStore.tabActive === planet.tabId) {
          planetInfo.section = planet
        }
      })
      console.log(planetInfo)
    }

    return { planets, commonsStore, setTabActive, planetInfo }
  },
  created() {
    this.setTabActive()
  }
}
</script>
<style>

</style>