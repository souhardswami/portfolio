<template>
    <div class="content">
            <NavBar/>
            <LandingPage/>
            <Footer/>
    </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue"
import LandingPage from "@/components/LandingPage.vue"
import Footer from "@/components/Footer.vue"

export default {

    components:{
        NavBar,
        LandingPage,
        Footer

    }
    
}
</script>

