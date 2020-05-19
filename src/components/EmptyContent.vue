<template>
    
    <v-card class="mx-auto emptydiv " outlined>
    <v-list-item three-line>
      <v-list-item-content>
        

        <div class="empty">
                <h1>I am Empty</h1>
                <h1 id="scroll">I am scrollable</h1>
                <h1 id="scroll2">End</h1>
        </div>
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>


.empty{
    
    text-align: center;
    align-content: center;

}



.emptydiv{
  
    height: 40vh;
    overflow-x: hidden;
    overflow-y: scroll;
}
#scroll{
  margin-top:25vh;
}
#scroll2{
  margin-top:25vh;
}

</style>