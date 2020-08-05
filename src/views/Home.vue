<template>
  <div class="home">
    
    <Content />
    
  </div>
</template>


<script>
import Content from "@/components/Content.vue"
export default {
  

  components:{
    Content
  }
}
</script>

<style scoped>

.home{
    height:100vh;

   overflow-y: scroll;
   overflow-x: hidden;
    
    
}


.home::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.home::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

.home::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

/* .home::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.home::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
.home::-webkit-scrollbar-thumb {
  background-color: #AD7D52;
  border-radius: 10px;
} */
</style>


