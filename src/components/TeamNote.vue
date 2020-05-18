<template>
    
    <v-card class="mx-auto teamnotes" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Team Notes</v-list-item-title>
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

        
        <div class="profilecard" v-for="i in 4" :key="i">
                <v-avatar color="primary icon" small>
                        <span class="white--text title">KP</span>
                </v-avatar>
                <info>
                    
                                 <span class="subtitle-2">Kamal Pratap<v-icon class="circle"  >fa fa-circle</v-icon><span class="text--disabled caption">02:30 pm</span></span><br>
                                 <span class="body-2">Hey Guys,I've pushed my progress to the Master Branch</span>
                                 
                                 
                </info>
                
                
                <v-divider id="hr" v-if="i!='4'"/>
        </div>
        

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>


<script>
export default {
  computed:{
      add2(){
      
      if(this.$route.params.id==1){
          return 'custom-black-btn'
      }
      else{
        return ''
      }
    },
      ans(){
        if(this.$route.params.id==1){
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


.teamnotes{
  margin-top:20px;
}
.circle{
  font-size:4px;
  width: 10px;
  
}




.profilecard  {
                width: 340px;
                margin: 10px 0 0 0px;
                height: 70px;
                padding-top:20px;
}

.profilecard info {
                    
                    
                    display: inline-block;
                    margin:0px 0px 0 20px;
                    

}
#hr{
    /* border-top: 2px solid grey; */
    margin-top:12px;
    margin-left:14%;
}

.icon{
  margin-top:-20px;
  transform: scale(0.8);
}


.custom-black-btn::before {
    color: transparent;
}


.custom-black-btn:hover {
    color:black;
}

</style>






