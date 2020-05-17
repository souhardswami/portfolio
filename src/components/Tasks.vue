<template>
    
    <v-card class="mx-auto tasks" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Tasks</v-list-item-title>
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

        
        <div class="profilecard" v-for="i in 6" :key="i">
                <info>
                    
                                 <div class="upline">
                                    <v-icon color="primary" left>fa fa-check-square</v-icon>Add checkout button
                                 </div>
                                 <div class="downline">
                                    2MIN AGO <i class="fa fa-calendar"></i>: 03:00pm 02/05/2020
                                 </div>
                                 
                                 
                </info>
                <v-avatar class="avtar" color="primary"  x-small>
                        <span class="white--text headline">KP</span>
                </v-avatar>
                
                <hr id="hr" v-if="i!='6'">
        </div>
        

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>

.tasks{
  margin-top:20px;
}


.btn{
    margin-top:30px;
    
}


.profilecard  {
                width: 340px;
                margin: 10px 0 0 0px;
                height: 80px;
                
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
   
}

.avtar{
    margin-top:-20px;
    transform: scale(0.75);
    margin-left:159px;

}

</style>






