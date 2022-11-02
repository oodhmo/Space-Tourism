import { defineStore } from 'pinia'

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({
    menuActive: "0",
  }),
  actions: {
    setMenuActive(menuActive) {
      this.menuActive = menuActive || "0"
    },

    resetMenuActive() {
      this.menuActive = "0"
    }
  }
}
)