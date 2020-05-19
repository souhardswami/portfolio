<template>
  <v-card flat>
    <v-toolbar flat>
        <v-tabs v-model="tabs" fixed-tabs>
            <v-tab href="#mobile-tabs-5-1" :disabled="ans">
                <span>OVERVIEW</span>

            </v-tab>
            <v-tab href="#mobile-tabs-5-2"  >
                <span>ACTIVITIES</span>
            </v-tab>
            <v-tab href="#mobile-tabs-5-3" :disabled="ans">
                <span>ASSESSMENTS</span>
            </v-tab>
            <v-tab href="#mobile-tabs-5-4" :disabled="ans">
                <span>FILES</span>
            </v-tab>
            <v-tab href="#mobile-tabs-5-5" :disabled="ans">
                <span>RESUME</span>
            </v-tab>
        </v-tabs>
      
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 5" :key="i" :value="'mobile-tabs-5-' + i">
        <v-card  flat>

            <div v-if="i=='2'">
                <Activity/>
            </div>
            <div v-else>
                <EmptyContent/>
            </div>
            
          
          
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Activity from "@/components/Activity.vue"
import EmptyContent from "@/components/EmptyContent.vue"
  export default {
    components:{
        Activity,
        EmptyContent
    },
    data () {
      return {
        tabs: 'mobile-tabs-5-2',
        }
    },
    computed:{
      
      ans(){
        if(this.$store.state.id!=1){
          return false
        }
        else{
          return true
        }
        
      }
    }
  }
</script>

