<template>
  <div :class="both" class="home">
    
        <NavBar/>
        <Footer/>
    
  </div>
</template>


<script>

import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
    computed:{
      both(){
        return this.$store.state.color_bg+" "+ this.$store.state.color_text
      }
    },
  components:{
    NavBar,
    Footer

  }
}
</script>

<style>


.dark-btn{
  background-color: #1F2937;
}

.dark-bg{

  background-color: #1A202C;
 
}
.dark-text{
  color: #9CA3AF;

}
.dark-text-sec{
  color: white;

}

.light-btn{
  
  background-color: #F3F4F6;

}
.light-bg{
  
  background-color: white;

}
.light-text{
  
  color: #1A202C;

}
.light-text-sec{
  
  color: #4B5563;

}

.home{

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


