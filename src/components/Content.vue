<template>
    <div class="content">
            <LandingPage/>
            <LookingJob/>
    </div>
</template>

<script>

import LandingPage from "@/components/LandingPage.vue"
import LookingJob from "@/components/LookingJob.vue"

export default {

    components:{
        LandingPage,
        LookingJob,
    }
    
}
</script>

