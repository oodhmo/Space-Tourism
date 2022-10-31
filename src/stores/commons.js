import { defineStore } from 'pinia'

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({ menuActive: "00" }),
  actions: {
    setMenuActive(menuActive) {
      this.menuActive = menuActive || "00"

      console.log(this.menuActive)
    }
  }
})