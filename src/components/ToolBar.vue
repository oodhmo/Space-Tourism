<template>
  <div id="toolbar">
    <div class="btn">
        <img v-if="!isClicked" src="@/assets/images/menu.png" class="menu-btn" @click="setClicked">
        <img v-if="isClicked" src="@/assets/images/menu_x.png" class="menu-btn" @click="resetClicked">
    </div>
    <nav :class="['', {'open': isClicked}]">
      <div class="bar">  
        <div class="menu">
          <div :class="['items', {'bor-b' : tab.to === this.$route.path, 'bor-hov' : tab.to !== this.$route.path}]" v-for="tab in tabs" :key="tab.tabId">
            <router-link :to="tab.to">
              <div class="item" @click="commonsStore.resetMenuActive()">
                <strong class="itemId">{{tab.tabId}}</strong> 
                {{tab.title}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <img src="@/assets/images/bar-line.png" class="line">
      <img src="@/assets/images/bar-icon.png" class="icon">
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useCommonsStore } from '@/stores/commons'

export default defineComponent({
  setup() {
    const tabs = require('@/assets/data/tabs-info.json').TOOLBAR.items
    const commonsStore = useCommonsStore()

    let isClicked = ref(false)

    const setClicked = () => {
      isClicked.value = true
    }

    const resetClicked = () => {
      isClicked.value = false
    }

    return {
      tabs,
      commonsStore,
      isClicked, 
      setClicked,
      resetClicked
    }
  },
})
</script>