<template>
    <div class="content">

            <LandingPage/>
            <div id="main">
                <LeftDiv/>
            </div>
            <Footer/>


        
        

    </div>
</template>

<script>
import LeftDiv from "@/components/LeftDiv.vue"
import LandingPage from "@/components/LandingPage.vue"
import Footer from "@/components/Footer.vue"

export default {

    components:{
        LandingPage,
        LeftDiv,
        Footer

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
