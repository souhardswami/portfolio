<template>
  <v-card flat>
    <v-toolbar flat>
        <v-tabs v-model="tabs" fixed-tabs>
            <v-tab href="#mobile-tabs-5-1"  disabled>
                <h6>OVERVIEW</h6>

            </v-tab>
            <v-tab href="#mobile-tabs-5-2"  >
                <h6>ACTIVITIES</h6>
            </v-tab>
            <v-tab href="#mobile-tabs-5-3" >
                <h6>ASSESSMENTS</h6>
            </v-tab>
            <v-tab href="#mobile-tabs-5-4" >
                <h6>FILES</h6>
            </v-tab>
            <v-tab href="#mobile-tabs-5-5" >
                <h6>RESUME</h6>
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
        tabs: null,
        }
    },
  }
</script>

