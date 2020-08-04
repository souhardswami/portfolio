<template>
    <div class="content">

            <LandingPage/>
            <div id="main">
                <LeftDiv/>
            </div>

        
        

    </div>
</template>

<script>
import LeftDiv from "@/components/LeftDiv.vue"
import LandingPage from "@/components/LandingPage.vue"
export default {

    components:{
        LeftDiv,
        LandingPage
    }
    
}
</script>

<style scoped>
#main{
    width:70%;
    margin: 0 auto;
}
@media only screen and (max-width: 768px) {
  #main{
    width: 100%;
  }
}
</style>
