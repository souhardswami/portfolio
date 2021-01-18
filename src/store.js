import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      color:"dark",
      color_bg: "dark-bg",
      color_text: "dark-text",
      color_text_sec:"dark-text-sec",
      color_button:"dark-btn"


  },
  mutations: {
    set_color(state,col){
      state.color=col
    },
    set_color_bg(state,col){
      state.color_bg=col
    },
    set_color_text(state,col){
      state.color_text=col
    },
    set_color_text_sec(state,col){
      state.color_text_sec=col
    },
    set_color_button(state,col){
      state.color_button=col
    },
    

  },
  actions: {

  },
  getters: {

  }
})