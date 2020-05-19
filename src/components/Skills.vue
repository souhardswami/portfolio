<template>
    
    <v-card class="mx-auto education skills" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Skills</v-list-item-title>
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
        class="btn">
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <v-list-item-title class="skillelement my-2">
            <div v-for="skill in skillset" :key="skill">
                <v-chip
                    class="ma-2 chip"
                    color="blue lighten-5"
                    text-color="black"
                    
                    >
                    {{skill}}
                    
                    </v-chip>
            </div>
        </v-list-item-title>

        
        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>


<script>
export default {
    data(){
        return{
            skillset:['Python','Web Devlopment','CSS','Web Devlopment','Python','CSS','CSS','Web Devlopment','Python','Web Devlopment','Python','CSS','CSS','Web Devlopment','Python']
        }
    },
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


.btn{
    margin-top:30px;
    
}

.skills{
    /* flex-basis: 48%; */
    margin-top:20px;

    
}
.skillelement{
    display: flex;
    flex-wrap: wrap;
}


.custom-black-btn::before {
    color: transparent;
}


.custom-black-btn:hover {
    color:black;
}



</style>


