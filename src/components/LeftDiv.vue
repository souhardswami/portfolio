<template>
    <div class="leftdiv">
        <ProfileCard/>
        <ProfileTab/>
        <Experiance />
        <div class="education-skills">
            <Education/>
            <Skills/>
        </div>
    </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue"
import ProfileTab from "@/components/ProfileTab.vue"
import Experiance from "@/components/Experiance.vue"
import Education from "@/components/Education.vue"
import Skills from "@/components/Skills.vue"


export default {
    components:{
        ProfileCard,
        ProfileTab,
        Experiance,
        Education,
        Skills
    }
}
</script>

<style scoped>


.education-skills{
    display: flex;
    
}
</style>

