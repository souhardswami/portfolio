<template>
  <div class="home">
    
    <NavBar />
    <Content />
    
  </div>
</template>


<script>
import NavBar from "@/components/NavBar.vue"
import Content from "@/components/Content.vue"
export default {
  

  components:{
    NavBar,
    Content
  }
}
</script>


