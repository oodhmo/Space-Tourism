<template>
  <div id="crew">
    <img src="@/assets/images/bg-crew.png" class="bg-default">

    <div class="semi-title">
      <strong class="count">02</strong>
      MEET YOUR CREW
    </div>

    <div class="info">
      <div class="crewmates">

        <div class="type">{{crewInfo.section.type}}</div>
        <div class="big title">{{crewInfo.section.name}}</div>
        <div class="main p-txt description">{{crewInfo.section.description}}</div>

        <div class="page">
          <div :class="['circle', { 'clicked' : commonsStore.menuActive === '0' }]" @click="() => {
            commonsStore.setMenuActive('0')
            setPageActive() }"/>
          <div :class="['circle', { 'clicked' : commonsStore.menuActive === '1' }]" @click="() => {
            commonsStore.setMenuActive('1')
            setPageActive() }" />
          <div :class="['circle', { 'clicked' : commonsStore.menuActive === '2' }]" @click="() => {
            commonsStore.setMenuActive('2')
            setPageActive() }" />
          <div :class="['circle', { 'clicked' : commonsStore.menuActive === '3' }]" @click="() => {
            commonsStore.setMenuActive('3')
            setPageActive() }" />
        </div>

      </div>
      <div class="pic">
        <img :src="require(`@/assets/images/${crewInfo.section.imgUrl}`)" class="img">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useCommonsStore } from '@/stores/commons'

export default {
  setup() {
    const crew = require('@/assets/data/character-info.json').CREW
    let crewInfo = reactive([])

    const commonsStore = useCommonsStore()

    const setPageActive = () => {
      crew.forEach((mate)=>{
        if (commonsStore.menuActive === mate.id) {
          crewInfo.section = mate
        }
      })
    }

    return { crew, crewInfo, setPageActive, commonsStore }
  },

  created() {
    this.setPageActive()
  }

}
</script>
<style>

</style>