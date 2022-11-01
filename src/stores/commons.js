import { defineStore } from 'pinia'

export const useCommonsStore = defineStore('commonsStore', {
  state: () => ({
    menuActive: "00",
    tabActive: "0",
    pageActive: "0"
  }),
  actions: {
    setMenuActive(menuActive) {
      this.menuActive = menuActive || "00"
    },

    setMiniTabActive(tabActive) {
      this.tabActive = tabActive || "0"

      console.log(this.tabActive)
    },

    setPageActive(pageActive) {
      this.pageActive = pageActive || "0"

      console.log(this.pageActive)
    }
  }
}
)