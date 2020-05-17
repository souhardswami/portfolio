<template>
    <div class="leftdiv">
        <ProfileCard/>
        <ProfileTab/>
        <Experience />
        <div class="education-skills">
            <div class="left">
                <Education/>
            </div>
            <div class="right">
                <Skills/>
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue"
import ProfileTab from "@/components/ProfileTab.vue"
import Experience from "@/components/Experience.vue"
import Education from "@/components/Education.vue"
import Skills from "@/components/Skills.vue"


export default {
    components:{
        ProfileCard,
        ProfileTab,
        Experience,
        Education,
        Skills
    }
}
</script>

<style scoped>


.education-skills{
    display: flex;
    justify-content: space-between;
    
}
.left{
    flex-basis: 43%;
    
    
}
.right{
    flex-basis: 55%;
    
    
}
</style>

