<template>
    <div class="lookingjob">

        <section class="body-font" :class="both">
            <div class="container px-5  mx-auto flex items-center md:flex-row flex-col">
                <span class="pulse-animation"></span>
                    <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 class="text-xs text-purple-400 tracking-widest font-medium title-font mb-1">Software and Technical Related</h2>
                    <h1 class="md:text-3xl text-2xl font-medium title-font " :class="$store.state.color_text_sec">Actively looking for 6-month Intern/Fulltime Job.</h1>
                </div>
                
                <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                
                 <a href="https://drive.google.com/file/d/1EhyR4m6sGM2U5agK5CWbe0i2m-MsDiOE/view?usp=sharing" target="_blank">
                    <button :class="$store.state.color_button" class="inline-flex py-3 px-10 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                        <img id="img" src="https://assets.dryicons.com/uploads/icon/svg/7895/3a762adf-69f8-446d-90b3-296d302fd4fc.svg"/>
                        <span class="ml-4 flex items-start flex-col leading-none">
                        <span class="text-xs  mb-1">Resume/ CV</span>
                        <span class="title-font font-medium" :class="$store.state.color_text_sec">souhard.pdf</span>
                        </span>
                    </button>
                  </a>
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

/* .lookingjob{
    margin-left: 30px;

} */


@media only screen and (min-width: 600px) {
      .lookingjob{
            margin-left: 30px;

        }
}


#img{
    max-width:20%;
    height:20%;
    

}

/* .pulse-animation {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #9f7aea;
  cursor: pointer;  
  animation: pulse 2s infinite;
  float:left;
  margin-right: 30px;
} */

@media only screen and (min-width: 600px) {
      .pulse-animation {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #9f7aea;
            cursor: pointer;  
            animation: pulse 2s infinite;
            float:left;
            margin-right: 30px;
          }
}
.pulse-animation:hover {
  animation: none;
}

@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #8669c0;
    box-shadow: 0 0 0 0 #8669c0;
  }
  70% {
      -moz-box-shadow: 0 0 0 30px rgba(204,169,44, 0);
      box-shadow: 0 0 0 30px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}


</style>