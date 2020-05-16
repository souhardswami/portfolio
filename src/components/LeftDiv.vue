<template>
    <div class="leftdiv">
        <ProfileCard/>
        <ProfileTab/>
    </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue"
import ProfileTab from "@/components/ProfileTab.vue"
export default {
    components:{
        ProfileCard,
        ProfileTab
    }
}
</script>

