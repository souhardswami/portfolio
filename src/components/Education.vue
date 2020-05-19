<template>
    
    <v-card class="mx-auto education" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 mx-4">Education</v-list-item-title>
        <v-btn 
        color="black"
                x-small
                absolute
                top
                right
                fab
                
                outlined

                :class="add2"
        :ripple="ans"
        class="btn"
        >
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <v-list-item-title class="headline mb-1 my-2 mx-4">SSC</v-list-item-title>
        <v-list-item-title class="thin body-2 mx-4">
            <span>St. Mary High School</span><br>
            <span>Sep 2016</span><br>
            <span>CGPA : 9.2</span>
            
        </v-list-item-title>
        <br>
        <v-list-item-title class="headline mb-1 my-2 mx-4">Higher Secondary</v-list-item-title>
        <v-list-item-title class="thin body-2 mx-4">
            <span>St. Mary High School</span><br>
            <span>Sep 2018</span><br>
            <span>Percentage: 96.5%</span>
            
        </v-list-item-title>

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>
<script>
export default {
  computed:{
      add2(){
      
      if(this.$store.state.id==1){
          return 'custom-black-btn'
      }
      else{
        return ''
      }
    },
      ans(){
        if(this.$store.state.id==1){
          return false
        }
        else{
          return true
        }
        
      }
    }
}
</script>


<style scoped>

.education{
  margin-top:20px;
  
  /* flex-basis: 48%; */
}



.btn{
    margin-top:30px;
    
}


.custom-black-btn::before {
    color: transparent;
}


.custom-black-btn:hover {
    color:black;
}

</style>
