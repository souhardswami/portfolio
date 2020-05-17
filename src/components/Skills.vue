<template>
    
    <v-card class="mx-auto education skills" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Skills</v-list-item-title>
        <v-btn 
        
        color="grey"
                x-small
                absolute
                top
                right
                fab
                
                outlined
        class="btn">
              <v-icon>mdi-plus</v-icon>
        </v-btn>
        <br>

        <div class="skillelement">
            <div v-for="skill in skillset" :key="skill">
                <v-chip
                    class="ma-2"
                    color="primary"
                    text-color="white"
                    
                    >
                    {{skill}}
                    
                    </v-chip>
            </div>
        </div>

        
        
        
      </v-list-item-content>

      
    </v-list-item>

  </v-card>

</template>


<script>
export default {
    data(){
        return{
            skillset:['Python','Web Devlopment','CSS','Java','Python','Web Devlopment','CSS','Web Devlopment','CSS','Python','Java','Python','Web Devlopment','CSS']
        }
    }
}
</script>


<style scoped>


.btn{
    margin-top:30px;
    
}

.skills{
    /* flex-basis: 48%; */
    margin-top:20px;

    
}
.skillelement{
    display: flex;
    flex-wrap: wrap;
}
</style>


