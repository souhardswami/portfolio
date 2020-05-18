<template>
    
    <v-card class="mx-auto experience" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1 mx-4">Experience</v-list-item-title>
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

        <v-list-item-title class="headline mb-1  mx-4">Lead Designer</v-list-item-title>
        <v-list-item-title class="thin body-2 mx-4">
            <span>Google. Inc.</span><br>
            <span>Sep 2019 -Dec 2019</span><br>
            <span> During my internship,I developed UI and UX for an android app called Google Keep. I completely Re-Designed the<br> application.</span>
            
        </v-list-item-title>

        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>



<style scoped>
.experience{
  margin-top:20px;
}

.btn{
    margin-top:30px;
    
}
</style>