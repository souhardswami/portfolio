<template>
    
    <v-card class="mx-auto " outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 mx-4">Empty -div </v-list-item-title>
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

        <div class="empty">
                <h1>I am Empty</h1>
        </div>
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>


.btn{
    margin-top:30px;
    

}
.empty{
    height: 215px;
    text-align: center;
    align-content: center;

}
</style>