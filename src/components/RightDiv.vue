<template>
    <div>
        <Evaluation/>
        <TeamNote/>
        <Tasks/>
    </div>
</template>

<script>
import Evaluation from "@/components/Evaluation.vue"
import TeamNote from "@/components/TeamNote.vue"
import Tasks from "@/components/Tasks.vue"
export default {
    components:{
        Evaluation,
        TeamNote,
        Tasks
        }
    
}
</script>