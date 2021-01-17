<template>
    <div class="landingpage">
        <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container px-5 py-20 mx-auto flex flex-wrap items-center">
                            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                                <h1 class="title-font font-medium text-3xl text-white">Souhard Swami<br><span class="text-2xl text-purple-500"> SWE/ STUDENT</span></h1>
                                <div class="w-13 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
                                <p class="leading-relaxed mt-4"><span id="hand"> 👋 </span> Hey, I am Souhard, a third-year Computer Science undergraduate Student @ IIIT Vadodara.</p>
                            </div>
                <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-full p-10 flex flex-col md:ml-auto w-full mt-10 md:mt-0">

                            <img id="img" alt="ecommerce" class="rounded" src="https://media-exp1.licdn.com/dms/image/C5603AQEkJ2ZWZw6Q5A/profile-displayphoto-shrink_400_400/0/1593956775970?e=1616630400&v=beta&t=hsbTRWfCGRpBISxz0SmfR_EpPbKBgbHORGVFhDk57S0">
                
                </div>
            </div>
        </section>
     </div>
</template>

<style scoped>


.landingpage{
  /* margin-top:40px; */
  margin-left: 230px;
  margin-right: 230px;
}
#img{
    /* width: 20%;
    height: 20%; */
    border-radius: 50%;
    
    
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