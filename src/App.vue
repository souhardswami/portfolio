<template>
  <v-app>
    <v-content>
      <NavBar />
      <Home/>
      
      
      
      
      
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Home from "@/views/Home.vue"
export default {
  components:{
    NavBar,
    Home
  },
}
</script>
