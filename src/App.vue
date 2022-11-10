<template>
  <div id="navbar">
    <tool-bar />
  </div>
  <router-view/>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import ToolBar from "@/components/ToolBar.vue"

export default defineComponent({
  components: {
    ToolBar
  }
})
</script>

<style lang="scss">
@import "@/assets/scss/default.scss";
@import "@/assets/scss/commons.scss";
</style>
