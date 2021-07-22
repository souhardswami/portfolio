<template>
    <div class="landingpage">
        <section class=" body-font" :class="both">
                <div class="container px-5 py-20 mx-auto flex flex-wrap items-center">
                            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                                <h1 class="title-font font-medium text-3xl" :class="$store.state.color_text_sec">Souhard Swami<br><span class="text-2xl text-purple-500"> SWE/ STUDENT</span></h1>
                                <div class="w-13 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                                <p class="leading-relaxed mt-4"><span id="hand"> 👋 </span> Hey, I am Souhard, a Final-year Computer Science undergraduate Student @ IIIT Vadodara.</p>
                            </div>
                <div :class="$store.state.color_button" class="lg:w-2/6 md:w-1/2  bg-opacity-50 rounded-full p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0" >

                            <img id="img" alt="ecommerce" class="rounded" src="https://media-exp3.licdn.com/dms/image/C5603AQFqEb1SRHCO2A/profile-displayphoto-shrink_800_800/0/1626621191958?e=1632355200&v=beta&t=4__yf0ZRy6xbGBCNmPjNq-7DKM1J_X_BGa5TiX-48xc">
                
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

#img{
    /* width: 20%;
    height: 20%; */
    border-radius: 50%;
    
    color : red;


    
}


#hand {

  font-size:30px;
  animation-name: wave-animation; 
  animation-duration: 2.5s;        
  animation-iteration-count: infinite;  
  transform-origin: 70% 70%;      
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}
</style>