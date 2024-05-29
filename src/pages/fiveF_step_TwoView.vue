<template >
<!--  <splash></splash>-->
  <div class="container mt-4" dir="rtl">

<!--    <sidebar></sidebar>-->
    <div style="    position: absolute;
    right: 28vw;
    width: 51vw; height: auto;" class="card-panel-main col-lg-9 mb-5">
      <div class="card card-body card-panel-box border-0" style="    margin: 1vw .9vw;">
        <ChaneZani/>
        <Jaygozinha/>
        <EghdamatDolat/>
        <TaminKonandegan/>
        <MavaneKhoroj/>
        <TazeVaredin/>
        <HamCheshmi/>



      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Sidebar from "@/components/Sidebar/Sidebar";
// import splash from "@/components/Splash/Splash";
import router from "@/router";
// import Reset from "@/components/Icons/Reset.vue";
import ChaneZani from "@/components/5f/ChaneZani.vue";
import Jaygozinha from "@/components/5f/Jaygozinha.vue";
import EghdamatDolat from "@/components/5f/EghdamatDolat.vue";
import TaminKonandegan from "@/components/5f/TaminKonandegan.vue";
import MavaneKhoroj from "@/components/5f/MavaneKhoroj.vue";
import TazeVaredin from "@/components/5f/TazeVaredin.vue";
import HamCheshmi from "@/components/5f/HamCheshmi.vue";

export default {
  name: 'HomeView',
  data(){
    return{
      is_update: false,
    }
  },
  components: {
    HamCheshmi,
    TazeVaredin,
    MavaneKhoroj,
    TaminKonandegan,
    EghdamatDolat,
    Jaygozinha,
    ChaneZani,
    Reset,
    Sidebar,
    splash
  },
  methods:{
    /*checkIsMother(){
      if (this.is_mother){
        router.push('/mother_items')
      }

    }*/
  },
  mounted() {
    // this.checkIsMother()
  }
}
</script>
<style scoped lang="scss">
a{
  font-size: 1vw;
}
.card:not(:last-child){
  height: 12vw;
}
.btn-submit-1{
  width: 18vw !important;
}
 
p{
  font-size: 1vw;
}

</style>