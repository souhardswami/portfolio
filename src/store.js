import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      color:"light",
      color_bg: "light-bg",
      color_text: "light-text",
      color_text_sec:"light-text-sec",
      color_button:"light-btn"


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