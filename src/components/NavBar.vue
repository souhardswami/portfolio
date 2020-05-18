<template>
    <div class="navbar">
              <SideBar @closesidebar="close" :action="drawer"/>
              <nav>
                        
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVRoge3ZsQ2AQAzFUAexAqMxOqwDG0ATSBT5TeBfXBEdSHoSwFEdkSGAqzoiw1IdkGXMkAD26ghJkiTpFwFs1REZvBC7cUg3Yx67JEmS9GrMR4+nbjdjhqzAWR0h6Xs3aFgFl74oro8AAAAASUVORK5CYII="  @click.stop="open">
                        
                        <div id="link">EMPLOYEES/
                          <span  class="text--disabled">PROFILES</span></div>
                        
                        <div id="back">

                          BACK
                          
                        </div>
                         
              </nav>
              
            
                
  </div>
</template>


<script>

import SideBar from "@/components/SideBar.vue"
export default {
    components:{
        SideBar
    },
    data: () => ({
        drawer: false,
  }),
  methods:{
    open(){
      if(this.$route.params.id!=1){
        this.drawer=true
      }
    },
    close(){
      this.drawer=false
    }
  }
}
</script>

<style scoped>
.navbar{
    margin:0 100px;
}

  nav{
      display: flex;
      height: 50px;
      width: 100%;
      align-items: center;
      /* background-color: red; */
  }
  
  img{
    width:20px;
    margin-right: auto;
    
   
  }
  #link{
     margin-right: 40%;
     

  }
  #back{
    margin-right:10px;
  }


   

            



</style>