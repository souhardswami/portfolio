<template>
    <div class="leftdiv">
        <ProfileCard/>
        <ProfileTab/>
        <Project />
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
import Project from "@/components/Project.vue"
import Education from "@/components/Education.vue"
import Skills from "@/components/Skills.vue"


export default {
    components:{
        ProfileCard,
        ProfileTab,
        Project,
        Education,
        Skills,
    }
}
</script>

<style scoped>



.education-skills{
    display: flex;
    justify-content: space-between;
    
    
}
.left{
    flex-basis: 49%;
    
    
}
.right{
    flex-basis: 49%;
    
    
}
@media only screen and (max-width: 768px) {
  .education-skills{
    display: block;
  }
}
</style>

