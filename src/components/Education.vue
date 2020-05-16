<template>
    
    <v-card class="mx-auto education" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Education</v-list-item-title>
        <v-btn absolute dark fab small top right color="gray" flat class="btn">
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <v-list-item-title class="headline mb-1">SSC</v-list-item-title>
        <div>
            <h5>St. Mary High School</h5>
            <h5>Sep 2016</h5>
            <h5>CGPA:9.2</h5>
            
        </div>
        <br>
        <v-list-item-title class="headline mb-1">Higher School</v-list-item-title>
        <div>
            <h5>St. Mary High School</h5>
            <h5>Sep 2018</h5>
            <h5>Percentage: 96.5%</h5>
            
        </div>

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>


.btn{
    margin-top:30px;
    width: 30px;
    height: 30px;
}

.education{
    
    background-color:red;
    /* margin:10px; */
}
</style>
