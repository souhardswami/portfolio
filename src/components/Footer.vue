<template>

  <div class="footer">

    <footer class="body-font" :class="both">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          
          <p class="text-sm sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4" :class="$store.state.color_text">© 2021 souhard987 </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

            <a class="ml-3  icon" href="https://www.linkedin.com/in/souhard-swami-9a2b651a2" target="_blank" :class="$store.state.color_text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a class="ml-3  icon" href="https://github.com/souhardswami" target="_blank" :class="$store.state.color_text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a class="ml-3  icon" href="mailto:souhardswami987@gmail.com" target="_blank" :class="$store.state.color_text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a class="ml-3 icon" href="https://www.facebook.com/souhard.swami.3/" target="_blank" :class="$store.state.color_text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a class="ml-3  icon" href="https://www.instagram.com/souhard_100/" target="_blank" :class="$store.state.color_text">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </span>
        </div>
      </footer>
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
.footer{
  padding-top: 10px;
  margin-top: 60px;
  border-top: #875ed8 5px solid;
  margin-left: 230px;
  margin-right: 230px;

}
#linkedin{
  width: 20%;
}


</style>
