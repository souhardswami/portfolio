import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      id:1

  },
  mutations: {

    setname(state){
        if(state.id==1){
        state.id=2}
        else{state.id=1}
    }

  },
  actions: {

  },
  getters: {

  }
})