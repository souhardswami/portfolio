<template>
    <div class="navbar">
            <header class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="https://avatars0.githubusercontent.com/u/48220329?s=400&u=bdafcf2b71f19742f3e66167925d8c6796ef4b2c&v=4" id="img"/>
                    <span class="ml-3 text-xl">Souhard-Swami</span>
                  </a>
                  <nav class="md:ml-auto  flex flex-wrap items-center text-base justify-center">
                    <router-link  to="/" class="mr-5   routerlinks">Home</router-link>
                    <router-link  to="/project" class="mr-5  routerlinks">Project</router-link>
                    <router-link  to="/skills" class="mr-5  routerlinks">Skills</router-link>
                    <router-link  to="/about" class="mr-5  routerlinks">About</router-link>
                    
                    
                  </nav>


                  <!-- theme change -->
                  <!-- <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" >Light
                    
                  </button> -->
                </div>
          </header>
      <router-view/> 

    </div>
</template>

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

</style>