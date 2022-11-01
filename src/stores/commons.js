import { defineStore } from 'pinia'

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({ menuActive: "00", tabActive: "0" }),
  actions: {
    setMenuActive(menuActive) {
      this.menuActive = menuActive || "00"
    },

    setMiniTabActive(tabActive) {
      this.tabActive = tabActive || "0"

      console.log(this.tabActive)
    }
  }
})