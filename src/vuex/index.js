import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allAlbum: []
  },
  getters: {
    allAlbum: state => { return state.allAlbum }
  },
  actions: {
    getApiAlbum (context, payload) {
      context.commit('getApiAlbum', payload)
    }
  },
  mutations: {
    getApiAlbum (state, payload) {
      state.allAlbum = payload
    }
  }
})

export default store
