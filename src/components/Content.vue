<template>
    <div class="content">
        <div id="left">

            <LeftDiv/>
        </div>
        <div id="right">
            i am right
        </div>

    </div>
</template>

<script>
import LeftDiv from "@/components/LeftDiv.vue"
export default {

    components:{
        LeftDiv
    }
    
}
</script>

<style scoped>
.content{
  margin:0 100px;
  display: flex;
}

#left{
    flex-basis: 60%;
    /* background-color: red; */
}
</style>