<template>
    <div class="navbar">
            <header class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="https://avatars0.githubusercontent.com/u/48220329?s=400&u=bdafcf2b71f19742f3e66167925d8c6796ef4b2c&v=4" id="img"/>
                    <span class="ml-3 text-xl">Souhard-Swami</span>
                  </a>
                  <nav class="md:ml-auto  flex flex-wrap items-center text-base justify-center">
                    <router-link  to="/" class="mr-5 hover:text-purple-500">Home</router-link>
                    <router-link  to="/project" class="mr-5 hover:text-purple-500">Project</router-link>
                    <router-link  to="/skills" class="mr-5 hover:text-purple-500">Skills</router-link>
                    <router-link  to="/about" class="mr-5 hover:text-purple-500">About</router-link>
                    
                    
                  </nav>
                  <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Light
                    <!-- <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> -->
                  </button>
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

</style>