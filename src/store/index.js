import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aois: [],
    month: null,
    data: null,
  },
  getters: {
    aois(state) {
      return state.aois
    }
  },
  mutations: {
    SET_AOIS(state, value) {
      state.aois = value
    }
  },
})