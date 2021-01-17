<template>
  <div class="home">
    
    <!-- <Content /> -->
    <NavBar/>
    
  </div>
</template>


<script>
// import Content from "@/components/Content.vue"
import NavBar from "@/components/NavBar.vue"
export default {
  
  components:{
    // Content
    NavBar

  }
}
</script>

<style scoped>



.home{
  background-color:#1A202C;
  height: 100%;
  width: 100%;
  } 

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
	background-color: black;
}

.home::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

</style>


