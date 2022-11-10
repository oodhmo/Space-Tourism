<template>
  <div id="destination" class="bck-bl">
    <div class="container">
      <img src="@/assets/images/bg-default.jpg" class="bg-default">
      <div class="top">
        <div class="semi-title semi-mg">
          <strong class="count">01</strong>
          PICK YOUR DESTINATION
        </div>
      </div>
      <div class="planets">
        <!-- planet imgs -->
        <div class="img">
          <img :src="require(`@/assets/images/${planetInfo.section.imgUrl}`)">
        </div>

        <div class="info">
          <div class="tabs">
            <div v-for="planet in planets" :key="planet.tabId" :class="['tab', {'clicked': commonsStore.menuActive === planet.tabId, 'default':commonsStore.menuActive!==planet.tabId}]"> 
              <div @click="() => {
                commonsStore.setMenuActive(planet.tabId)
                setTabActive() }">
                {{ planet.title }}
              </div>
            </div>
          </div>
          <!-- planet description -->
            
          <div class="description">
            <div class="title">{{ planetInfo.section.title }}</div>
            <div class="planet-description">
              <div class="main p-txt des">{{ planetInfo.section.description }}</div>
            </div>
          </div>

          <div class="travel">
            <div class="avg semi-info">
              <div class="sm-title">AVG. DISTANCE</div>
              <div class="numer">{{planetInfo.section.distance}}</div>
            </div>
            <div class="time semi-info">
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
        if (commonsStore.menuActive === planet.tabId) {
          planetInfo.section = planet
        }
      })
      console.log(planetInfo)
    }

    return { planets, commonsStore, setTabActive, planetInfo }
  },
  created() {
    this.setTabActive()
    this.commonsStore.resetClicked()
  }
}
</script>