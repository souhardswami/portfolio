<template>
    <div class="navbar">
            <header class=" body-font" :class="both">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a class="flex title-font font-medium items-center  mb-4 md:mb-0" >
                    <img src="https://avatars0.githubusercontent.com/u/48220329?s=400&u=bdafcf2b71f19742f3e66167925d8c6796ef4b2c&v=4" id="img"/>
                    <span class="ml-3 text-xl" :class="$store.state.color_text_sec">Souhard-Swami</span>
                  </a>
                  <nav class="md:ml-auto  flex flex-wrap items-center text-base justify-center">
                    <router-link  to="/" class="mr-5   routerlinks">Home</router-link>
                    <router-link  to="/project" class="mr-5  routerlinks">Project</router-link>
                    <router-link  to="/skills" class="mr-5  routerlinks">Skills</router-link>
                    <router-link  to="/about" class="mr-5  routerlinks">About</router-link>
                    <ThemeChange/>
                    
                  </nav>
                </div>
          </header>

      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>

      

    </div>
</template>

<script>

import ThemeChange from "@/components/ThemeChange.vue"

export default {
    components:{
        ThemeChange
    },
    
    computed:{
      both(){
        return this.$store.state.color_bg+" "+ this.$store.state.color_text
      },
    }

    
}
</script>


<style scoped>

.navbar{
  margin-top:40px;
  margin-left: 230px;
  margin-right: 230px;
}

#img{
  width:5%;
  border-radius: 50%;
  background-color: white;
  border-color: #1A202C;

} 
.routerlinks:hover{
  
  border-bottom: 3px #9f7aea solid;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>