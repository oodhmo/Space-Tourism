import { defineStore } from 'pinia'

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({
    menuActive: "0",
    isClicked: false
  }),
  actions: {
    //tabs active
    setMenuActive(menuActive) {
      this.menuActive = menuActive || "0"
    },

    resetMenuActive() {
      this.menuActive = "0"
    },

    // hide/show sidebar(mobile OR 768px>screen)
    setClicked() {
      this.isClicked = true
    },

    resetClicked() {
      this.isClicked = false
    }
  }
}
)