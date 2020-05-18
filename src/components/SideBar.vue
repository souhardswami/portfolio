<template>
    <v-navigation-drawer
        v-model="action"
        app
        absolute
        pa-0
        temporary
        class="sidebar"
      >
      
      
      
      <v-list-item>
        <v-list-item-icon>
            <v-icon>fa fa-bars</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="indigo--text  subtitle">INOGIT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list dense>
          <v-list-item
          v-for="item in items1"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>fa fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider/>
        
      <v-list-item>
        
      </v-list-item>
      <v-list dense class="second">
          <v-list-item
          v-for="item in items2"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>fa fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
      </v-navigation-drawer>
  
</template>



<script>
export default {
    props:['action'],
    data(){
        return{
                items1: [
                  
                    { title: 'Dashboard', icon: 'microsoft' },
                    { title: 'Candidates', icon: 'users' },
                    { title: 'Jobs', icon: 'briefcase' },
                    { title: 'Mailbox', icon: 'envelope' },
                    { title: 'Settings', icon: 'cog' },
                    ],
                items2: [
                  
                    { title: 'Pools', icon: 'h' },
                    { title: 'Assessments', icon: 'microsoft' },
                    { title: 'Team members', icon: 'users' },
                    { title: 'Billing', icon: 'briefcase' },
                    { title: 'Guidelines', icon: 'envelope' },
                    { title: 'Feedback', icon: 'cog' },
                    { title: 'Contect Us', icon: 'cog' },
                    ],
                    }
    }
}
</script>



<style scoped>

.sidebar{
  border-right:10px solid grey;
}

.second{
  margin-top:-50px;
}

</style>