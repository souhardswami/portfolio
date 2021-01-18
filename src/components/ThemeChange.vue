<template>
    <div class="themechange" :class="both">
        <!-- <button @click="changetheme"  :class="$store.state.color_button" class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded  mt-4 md:mt-0" >Light
        </button> -->


        <label class="switch" for="theme-switch">
			<input  @click="changetheme"  type="checkbox" id="theme-switch">
			<span class="slider round"></span>
		</label>
    </div>
</template>


<script>
export default {
    
    computed:{
        both(){
            return this.color_bg+" "+ this.color_text
        },
        color(){
            return this.$store.state.color
        },
        
    },
    methods:{
      changetheme(){
          const cur=this.color
          if(cur=='light'){
            this.$store.commit('set_color','dark')
            this.$store.commit('set_color_bg','dark-bg')
            this.$store.commit('set_color_text','dark-text')
            this.$store.commit('set_color_text_sec','dark-text-sec')
            this.$store.commit('set_color_button','dark-btn')
          }
          else{
            this.$store.commit('set_color','light')
            this.$store.commit('set_color_bg','light-bg')
            this.$store.commit('set_color_text','light-text')
            this.$store.commit('set_color_text_sec','light-text-sec')
            this.$store.commit('set_color_button','light-btn')
          }
          
      }
    }
}
</script>


<style scoped>


.switch {
	position: relative;
	display: inline-block;
	height: 25px;
	width: 50px;
}

.switch input {
	opacity: 0;
	height: 0;
	width: 0;
}
.slider {
        
	background-color: white;
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
.slider:before {
	position: absolute;
	content: "";
	height: 15px;
	width: 15px;
	top: 5px;
	left: 5px;
	background-color: #9f7aea;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
input:checked + .slider {
    background-color: #1A202C;
}
input:checked + .slider:before {
	-webkit-transform: translateX(25px);
	-ms-transform: translateX(25px);
	transform: translateX(25px);
}

.slider.round {
	border-radius: 30px;
}
.slider.round:before {
	border-radius: 50%;
}
</style>
