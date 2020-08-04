<template>
  <v-card flat>
    <v-toolbar flat>
        <v-tabs v-model="tabs" fixed-tabs>
            <v-tab href="#mobile-tabs-5-1" >
                <span>Aboutme</span>

            </v-tab>
            <v-tab href="#mobile-tabs-5-2"  >
                <span>Information</span>
            </v-tab>
            
            <v-tab href="#mobile-tabs-5-3" >
                <span>RESUME</span>
            </v-tab>
        </v-tabs>
      
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item v-for="i in 3" :key="i" :value="'mobile-tabs-5-' + i">
        <v-card  flat>
          <div v-if="i=='1'">
              <AboutMe/>
          </div>
          <div v-else-if="i=='2'">
                <Activity/>
          </div>
          <div v-else>
                <Resume/>
          </div>
            
          
          
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Activity from "@/components/Activity.vue"
import AboutMe from "@/components/AboutMe.vue"
import Resume from "@/components/Resume.vue"
  export default {
    components:{
        Activity,
        AboutMe,
        Resume
    },
    data () {
      return {
        tabs: 'mobile-tabs-5-1',
        }
    }
  }
</script>

