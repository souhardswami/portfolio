<template>
  <div class="project">
    



      <section :class="both" class=" body-font">
        <div class="flex flex-col text-center w-full mb-12 py-24">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4" :class="$store.state.color_text_sec">MY PROJECT</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Done some project, based on Full-stack Development. " </p>
          </div>


        <div class=" container   mx-auto ">

          <div class="flex items-center justify-center -mx-4 -mb-10 flex-col ">
            <div class="sm:w-1/2 mb-10 border-2 rounded-lg border-gray-800 p-5 ">
              
              <h2 class="title-font text-2xl  font-medium  mt-6 mb-3" :class="$store.state.color_text_sec">InstaPro</h2>
              <p class="leading-relaxed text-base">Very simmilar feature of instagram, ex. UserAuthentication, Photo-upload, Searching(user,tag), Edit profile, Like, comment, follow</p>
              <button class="mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded"><a href="https://github.com/souhardswami/instapro-frontend" target="_blank">Github</a></button>
            </div>

            <div class="sm:w-1/2 mb-10 border-2 rounded-lg border-gray-800 p-5 ">
              
              <h2 class="title-font text-2xl font-medium mt-6 mb-3" :class="$store.state.color_text_sec">chatApp</h2>
              <p class="leading-relaxed text-base">A django channel based chatting app between two person. Tokenbased-communication,Status Update</p>
              <button class="mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded"><a href="https://github.com/souhardswami/chatApp" target="_blank">Github</a></button>
            </div>
            <div class="sm:w-1/2 mb-10 border-2 rounded-lg border-gray-800 p-5 ">
              
              <h2 class="title-font text-2xl font-medium mt-6 mb-3" :class="$store.state.color_text_sec">fast_code</h2>
              <p class="leading-relaxed text-base">Developed A coding plateform like app. A place where you can code your logic and run your code</p>
              <button class="mx-auto mt-6 text-white bg-purple-500 border-0 py-2 px-5 focus:outline-none hover:bg-purple-600 rounded"><a href="https://github.com/souhardswami/fast_code" target="_blank">Github</a></button>
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
    section{
      padding: 0 10%;
    }
</style>