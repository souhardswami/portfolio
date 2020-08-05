<template>
    <div class="profilecard">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEkJ2ZWZw6Q5A/profile-displayphoto-shrink_400_400/0?e=1602115200&v=beta&t=pb3YGdY1kNwwzWgApwHhZECygCHh3gh3tA4GBOtf34g" alt="">
                <info>
                                 <span class="display-1">Souhard Swami</span><br>
                                 <span class="subtitle-1 font-weight-medium text--disabled" >Student -Full stack Developer </span><br>
                                 <span class="subtitle-1 font-weight-medium text--disabled" >@ IIIT Vadodara</span>
                </info>
    </div>
</template>

<style scoped>

.profilecard  {
                margin: 30px 0 0 18px;
                height: 150px;
}

.profilecard img {
                    width: 120px;
                    height: 120px;

                    float: left;
                    border: solid 2px black;

                    

                    border-radius: 50%;

                    margin: 0 18px 0 0;
}

.profilecard info {
                    margin-top: 10px;
                    
                    display: inline-block;

}
@media only screen and (max-width: 768px) {
  .profilecard info{
    display: block;
    margin-top:0px;
  }
  
}

@media only screen and (max-width: 361px) {
  
  .profilecard{
      height: 200px;

  }
}




</style>

















