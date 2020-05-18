<template>
    
    <v-card class="mx-auto tasks" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Tasks</v-list-item-title>
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

        <div class="profilecard">
          <div  v-for="i in 6" :key="i">
                  <info>
                      
                                  <div class="upline">
                                      <v-icon class="check-sqaure" color="primary" left>fa fa-check-square</v-icon>Add checkout button
                                  </div>
                                  <div class="downline text--disabled caption" >
                                      2MIN AGO <v-icon class="circle" left >fa fa-circle</v-icon>
                                      <v-icon class="calendar" left >fa fa-calendar</v-icon>
                                      DUE : 03:00pm 02/05/2020
                                  </div>
                                  
                                  
                  </info>
                  <v-avatar class="avtar" color="primary"  x-small>
                          <span class="white--text headline">KP</span>
                  </v-avatar>
                  
                  <v-divider id="hr" v-if="i!='6'"/>
          </div>
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
                margin-top: 20px;
                
                /* margin: 10px 0 0 0px; */
                
                
}



.profilecard info {
                    
                    
                    display: inline-block;
                    margin:10px 0px 0 10px;
                    height: 60px;
                    

}



.avtar{
    margin-top:-30px;
    transform: scale(0.50);
    margin-left:165px;

}

.circle{
  font-size:4px;
  width: 10px;
  
}
.upline{
  margin-bottom: 6px;
}
.calendar{
  font-size:14px;
  width: 10px;
  
}

.check-sqaure{
  font-size:20px;
  margin-top:-4px;
}
</style>






