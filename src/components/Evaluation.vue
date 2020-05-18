



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
                <v-btn  class="ma-1 pa-0" text color="primary" >
                    <v-icon left x-small>fa fa-calendar</v-icon>schedule
                </v-btn>
            </v-list-item-content>
            
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small >
                        <v-icon dark>fa fa-share-alt</v-icon>
                    </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   text fab small >
                <v-icon>fa fa-paper-plane</v-icon>
                </v-btn>
            </v-list-item-content>
            <div >
                    
                <v-btn text small color="primary">MORE</v-btn>
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
                <v-btn  class="ma-1 pa-0" text color="primary" >
                    <v-icon left x-small>fa fa-check</v-icon>PROCEED
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   class="mx-10" text fab small >
                <v-icon>fa fa-ban</v-icon>
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small >
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
                <v-btn  class="ma-1 pa-0" text color="primary" >
                    <v-icon left x-small>fa fa-check</v-icon>PROCEED
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                <v-btn   class="mx-10" text fab small >
                <v-icon>fa fa-ban</v-icon>
                </v-btn>
            </v-list-item-content>
            <v-list-item-content>
                    <v-btn  class="mx-10"  text fab  small >
                        <v-icon dark>fa fa-ellipsis-h</v-icon>
                    </v-btn>
            </v-list-item-content>
      </v-list-item>
      

      
    </v-list>
  </v-card>
</template>


<style scoped>

.manage{
  margin-top: -12px;
  margin-bottom: -12px;
}
</style>

