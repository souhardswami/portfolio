<template>
    
    <v-card class="mx-auto teamnotes" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Team Notes</v-list-item-title>
        <v-btn 
        color="grey"
                
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

        
        <div class="profilecard" v-for="i in 4" :key="i">
                <v-avatar color="primary" small>
                        <span class="white--text headline">KP</span>
                </v-avatar>
                <info>
                    
                                 <span>Kamal Pratap  2:30</span><br>
                                 <span>Hey Guys,I've pushed my progress to the Master Branch</span>
                                 
                                 
                </info>
                
                <hr id="hr" v-if="i!='4'">
        </div>
        

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>


.btn{
    margin-top:30px;
    
}


.teamnotes{
  margin-top:20px;
}




.profilecard  {
                width: 340px;
                margin: 10px 0 0 0px;
                height: 80px;
                padding-top:20px;
}

.profilecard img {
                    width: 40px;
                    height: 40px;

                    float: left;

                    border-radius: 50%;

                    margin: 0 18px 0 0;
}

.profilecard info {
                    
                    
                    display: inline-block;
                    margin:0px 0px 0 20px;
                    

}
#hr{
    border-top: 2px solid grey;
    margin-top:12px;
    margin-left:12%;
}


</style>






