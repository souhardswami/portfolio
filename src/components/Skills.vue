<template>
  <div class="skills">


    <section class="body-font" :class="both">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4"><span class="text-purple-500"> SKILLS</span><span :class="$store.state.color_text"> SET</span></h1>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            
              <div  class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium" :class="$store.state.color_text">Python</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">Django</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">JavaScript(ES6+)</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium" :class="$store.state.color_text">Vue.js</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">C++</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">Java( Familiar )</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">SQL/ ORM </span>
                </div>
              </div>
              <div class="p-2 sm:w-1/2 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center " >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">  Problem Solving</span>
                </div>
              </div>
              <div class="p-2 sm:w-1/1 w-full">
                <div :class="$store.state.color_button" class="rounded flex p-4 h-full items-center" >
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span class="title-font font-medium " :class="$store.state.color_text">OOPS / Data Base Management System / Operating System / Computer Network / System Design</span>
                </div>
              </div>
              
              
            
              
              
              
              
            </div>
          </div>
      </section>
  </div>




</template>




<script>
export default {

    computed:{
      both(){
        return this.$store.state.color_bg+" "+ this.$store.state.color_text
      },
    },
}
</script>

<style scoped>


.dark-btn{
  background-color: #1F2937;
}

.dark-bg{

  background-color: #1A202C;
 
}
.dark-text{
  color: white;

}

.light-btn{
  
  background-color: #F3F4F6;

}
.light-bg{
  
  background-color: white;

}
.light-text{
  
  color: #1A202C;;

}
</style>