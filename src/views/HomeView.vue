<template>
  <div id="home">
    <img src="@/assets/images/bg-earth.jpg" class="bg-earth">
    <div class=container>    
        <div class="home-txt main">
          <div class="semi">SO, YOU WANT TO TRAVEL TO</div>
          <div class="title space">SPACE</div>
          <p class="p-txt des">Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you 
            a truly out of this world experience!</p>
        </div>
        <router-link class="circle" to="/destination">
          <button class="circle-btn">
            <div class="txt bel">EXPLORE</div>
          </button>
        </router-link>
    </div>
  </div>
</template>

<script>
import { useCommonsStore } from '@/stores/commons'
export default {
  name: 'HomeView',
  setup() {
    const commonsStore = useCommonsStore()

    return { commonsStore }
  },
  created(){
    this.commonsStore.resetClicked()
  }
}
</script>
