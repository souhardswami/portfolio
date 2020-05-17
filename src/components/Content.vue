<template>
    <div class="content">
        <div id="left">

            <LeftDiv/>
        </div>
        <div id="right">
           <RightDiv/>
        </div>

    </div>
</template>

<script>
import LeftDiv from "@/components/LeftDiv.vue"
import RightDiv from "@/components/RightDiv.vue"
export default {

    components:{
        LeftDiv,
        RightDiv
    }
    
}
</script>

<style scoped>
.content{
  margin:0 100px;
  display: flex;
  justify-content: space-between;
}

#left{
    flex-basis: 58%;
    /* background-color: red; */
}
#right{
    flex-basis: 39%;
    /* background-color: red; */
}
</style>