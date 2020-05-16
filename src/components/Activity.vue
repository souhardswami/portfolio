<template>
    
    <v-card class="mx-auto activity" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Information</v-list-item-title>
        <v-btn absolute dark fab small top right color="gray" flat class="btn">
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <div v-for="info in information" :key="info">
            <v-list-item >
              <v-list-item-action>
                <h3>{{info.key}}</h3>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{info.value}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </div>
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>


<script>
export default {
    data(){
        return {
            information:
                [
                    {key:'EMAIL',value:'KamalPratap@abc.com'},
                    {key:'PHONE',value:'9876543210'},
                    {key:'SOCIAL',value:'github.com/kamalpratap'},
                    {key:'LINKS',value:'Codepen.com/Kamalpratap'}
                ]
            
        }
    }
}
</script>


<style scoped>


.btn{
    margin-top:30px;
    width: 30px;
    height: 30px;
}
</style>