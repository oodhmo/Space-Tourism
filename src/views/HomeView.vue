<template>
  <div id="home">
    <img src="@/assets/images/bg-earth.jpg" class="bg-earth">
    <div class=container>    
        <div class="home-txt main">
          <div class="semi-title">SO, YOU WANT TO TRAVEL TO</div>
          <div class="title space">SPACE</div>
          <p class="p-txt">Let’s face it; if you want to go to space, 
            you might as well genuinely go to outer space 
            and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you 
            a truly out of this world experience!</p>
        </div>
        <router-link class="circle" to="/destination">
          <button class="circle-btn">
            <div class="txt font-bel">EXPLORE</div>
          </button>
        </router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
//import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
  },
  setup() {
    /* let hover = ref(0)

    const doMouseOver = () => {
      hover=1;
      console.log(hover)
    }

    const doMouseLeave = () => {
      hover=0;
      console.log(hover)
    }

    return {
      doMouseOver, doMouseLeave, hover
    } */
  }
}
</script>
