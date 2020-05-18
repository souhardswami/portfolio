



<template>
  <v-card
    
    class="mx-auto"
    outlined
  >
  <v-list>
      <v-list-item class="manage">
            <v-list-item-content>
                <v-list-item-title >Evaluation</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn  class="ma-1 pa-0" text color="primary" :class="add1" :ripple="ans">
                    <v-icon left x-small>fa fa-calendar</v-icon>schedule
                </v-btn>
            </v-list-item-content>
            
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small :class="add2" :ripple="ans">
                        <v-icon dark>fa fa-share-alt</v-icon>
                    </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   text fab small :class="add2" :ripple="ans">
                <v-icon>fa fa-paper-plane</v-icon>
                </v-btn>
            </v-list-item-content>
            <div >
                    
                <v-btn text small color="primary" :class="add1" :ripple="ans">MORE</v-btn>
            </div>
            
            

            
      </v-list-item>
    </v-list>
    <v-divider></v-divider>



    
    <v-list >
      <v-list-item class="manage">
        <v-list-item-content>
                <v-list-item-title >Job Name</v-list-item-title>
            </v-list-item-content>
            
            
            <v-list-item-content>
                    
            </v-list-item-content>
            <v-list-item-content>
                <v-btn  class="ma-1 pa-0" text color="primary" :class="add1" :ripple="ans">
                    <v-icon left x-small>fa fa-check</v-icon>PROCEED
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   class="mx-10" text fab small :class="add2" :ripple="ans">
                <v-icon>fa fa-ban</v-icon>
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small :class="add2" :ripple="ans">
                        <v-icon dark>fa fa-ellipsis-h</v-icon>
                    </v-btn>
            </v-list-item-content>
      </v-list-item>
    </v-list>
      <v-divider/>
    <v-list>
      <v-list-item class="manage">
        <v-list-item-content>
                <v-list-item-title >Pool Name</v-list-item-title>
            </v-list-item-content>
            
            
            <v-list-item-content>
                    
            </v-list-item-content>
            <v-list-item-content>
              
                <!-- <v-btn   class="ma-1 pa-0" text color="primary" >
                    <v-icon left x-small>fa fa-check</v-icon>PROCEED
                </v-btn> -->

                <v-btn    text  class=" ma-1 pa-0" color="primary" :class="add1" :ripple="ans">
                    <v-icon left x-small>fa fa-check</v-icon>PROCEED
                </v-btn>
                
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   class="mx-10" text fab small :class="add2" :ripple="ans">
                <v-icon>fa fa-ban</v-icon>
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small :class="add2" :ripple="ans">
                        <v-icon dark>fa fa-ellipsis-h</v-icon>
                    </v-btn>
            </v-list-item-content>
      </v-list-item>
      

      
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed:{
    add1(){
      if(this.$route.params.id==1){
          return 'custom-blue-btn'
      }
      else{
        return ''
      }
    },
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

.manage{
  margin-top: -12px;
  margin-bottom: -12px;
}
.custom-blue-btn::before {
    color: transparent;
}


.custom-blue-btn:hover {
    color:blue;
}
.custom-black-btn::before {
    color: transparent;
}


.custom-black-btn:hover {
    color:black;
}


</style>

