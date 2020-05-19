<template>
    
    <!-- <v-card class="mx-auto " outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 mx-4">Information</v-list-item-title>
        <v-btn 
        color="black"
                x-small
                absolute
                top
                right
                fab
                
                outlined
        class="btn"
        
         >
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <div v-for="info in information" :key="info">
            <v-list-item >
              <v-list-item-action class="title">
                {{info.key}}
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{info.value}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider v-if="info.key!='LINKS'"/>
        </div>
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card> -->

  <v-card
    class="mx-auto"
    
    tile
    outlined
  >



  <v-list-item-title class="headline mb-1 mx-8 my-4">Information</v-list-item-title>
        <v-btn 
        color="black"
                x-small
                absolute
                top
                right
                fab
                
                outlined
        class="btn"

        
        :class="add2"
        :ripple="ans"
        @click="tog"
        
         >
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>
    <v-list flat>
      
      <div v-for="item in information" :key="item.key">
        <v-list-item>
          
          <v-list-item-content class="title mx-4">
            <v-list-item-title color="black">{{item.key}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="content">
            <v-list-item-title color="black">{{item.value1}}</v-list-item-title>
            <v-list-item-title  v-if="item.value2!=null" color="black">{{item.value2}}</v-list-item-title>
          </v-list-item-content>
        
        </v-list-item>
      <v-divider v-if="item.key!='LINKS'"/>
      </div>
      
    </v-list>
  </v-card>

</template>


<script>
export default {
    data(){
        return {
            information:
                [
                    {key:'EMAIL',value1:'Kamalpratap@xyz.com'},
                    {key:'PHONE',value1:'+91-9876543234'},
                    {key:'SOCIAL',value1:'github.com/kamalpratap'},
                    {key:'LINKS',value1:'codepen.io/kamal',value2:'yahool.com/kamal'}
                ],
            
            
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

.content{

  margin-left:-600px;
}

.custom-black-btn::before {
    color: transparent;
}


.custom-black-btn:hover {
    color:black;
}
</style>