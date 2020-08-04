<template>

  <v-card
    class="mx-auto"
    
    tile
    outlined
  >




  <v-list-item-title class="headline mb-1 mx-8 my-4">Information</v-list-item-title>

    <v-list flat>
      
      <div v-for="item in information" :key="item.key">
        <v-list-item>
          
          <v-list-item-content class="title mx-4">
            <v-list-item-title color="black">{{item.key}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="content">
            <v-list-item-title color="black"><a :href="'https://'+item.value1" target="_blank">{{item.value1}}</a></v-list-item-title>
            <v-list-item-title  v-if="item.value2!=null" color="black"><a :href="'https://'+item.value2" target="_blank">{{item.value2}}</a></v-list-item-title>
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
                    {key:'EMAIL',value1:'souhardswami987@gmail.com'},
                    {key:'PHONE',value1:'+91-9024802169',value2:'+91-9829579629'},
                    {key:'Github',value1:'github.com/souhardswami'},
                    {key:'Profile',value1:'codechef.com/users/souhard987',value2:'hackerrank.com/souhardswami987'},
                    {key:'Linkedin',value1:'linkedin.com/in/souhard-swami-9a2b651a2'}
                ],
            
            
        }
    }
    
}
</script>


<style scoped>

a{
  text-decoration: none;
}
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