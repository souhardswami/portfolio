<template>
  <div class="home">
    
    <!-- <Content /> -->
    <NavBar/>
    <Footer/>
    
  </div>
</template>


<script>
// import Content from "@/components/Content.vue"
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
  
  components:{
    // Content
    NavBar,
    Footer

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
	-webkit-box-shadow: inset 0 0 6px #1A202C(0,0,0,0.3);
	border-radius: 10px;
	background-color: gray;
}

.home::-webkit-scrollbar
{
	width: 12px;
	 background-color: gray; 
	/* background-color: #875ed8; */
	background-color: #1A202C;
}

.home::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px gray;
	background-color: #1A202C;
}

</style>


