<template>
    <v-navigation-drawer
        v-model="action"
        app
        absolute
        pa-0
        temporary
        class="sidebar"
      >
        <v-icon @click="clicked" class="crossicon">fa fa-times</v-icon>

      
      
      
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
            <v-img :src="item.icon" id="imgicon"></v-img>
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
            <v-img :src="item.icon" id="imgicon"></v-img>
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
                  
                    { title: 'Dashboard', icon: 'https://img.icons8.com/material-outlined/24/000000/content.png' },
                    { title: 'Candidates', icon: 'https://img.icons8.com/wired/64/000000/user-group-man-man.png' },
                    { title: 'Jobs', icon: 'https://img.icons8.com/ios-filled/50/000000/new-job.png' },
                    { title: 'Mailbox', icon: 'https://img.icons8.com/windows/50/000000/sms--v1.png' },
                    { title: 'Settings', icon: 'https://img.icons8.com/small/16/000000/gear.png' },
                    ],
                items2: [
                  
                    { title: 'Pools', icon: 'https://img.icons8.com/windows/32/000000/wave-lines.png' },
                    { title: 'Assessments', icon: 'https://img.icons8.com/small/80/000000/bar-chart.png' },
                    { title: 'Team members', icon: 'https://img.icons8.com/ios-filled/50/000000/dot-logo.png' },
                    { title: 'Billing', icon: 'https://img.icons8.com/ios-glyphs/64/000000/us-dollar.png' },
                    { title: 'Guidelines', icon: 'https://img.icons8.com/wired/64/000000/list.png' },
                    { title: 'Feedback', icon: 'https://img.icons8.com/ios-filled/50/000000/edit-chat-history.png' },
                    { title: 'Contect Us', icon: 'https://img.icons8.com/metro/26/000000/help.png' },
                    ],
                    }
    },
    methods:{
      clicked(){
        this.$emit('closesidebar')
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
.crossicon{
  
  margin-left: 150px;
  
}
#imgicon{
  width:25px;
  height: 25px;
}


</style>