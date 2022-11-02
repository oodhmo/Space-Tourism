<template>
  <div id="toolbar">
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
    <img src="@/assets/images/bar-line.png" class="line">
    <img src="@/assets/images/bar-icon.png" class="icon">
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useCommonsStore } from '@/stores/commons'

export default defineComponent({
  setup() {
    const tabs = require('@/assets/data/tabs-info.json').TOOLBAR.items
    const commonsStore = useCommonsStore()

    return {
      tabs,
      commonsStore,
    }
  },
})
</script>