<template>
    <div class="content">

       
            <NavBar/>
            <LandingPage/>
       
            <!-- <div id="main">
                <LeftDiv/>
            </div>
            <Footer/> -->


        
        

    </div>
</template>

<script>
// import LeftDiv from "@/components/LeftDiv.vue"

import NavBar from "@/components/NavBar.vue"
import LandingPage from "@/components/LandingPage.vue"
// import Footer from "@/components/Footer.vue"

export default {

    components:{
        NavBar,
        LandingPage
        // LeftDiv,
        // Footer

    }
    
}
</script>

