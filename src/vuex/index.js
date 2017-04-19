import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAUW0HgyW7nBGBrUPdlWmDBMpHUHOSwpB0',
  authDomain: 'fir-auth-12e52.firebaseapp.com',
  databaseURL: 'https://fir-auth-12e52.firebaseio.com',
  projectId: 'fir-auth-12e52',
  storageBucket: 'fir-auth-12e52.appspot.com',
  messagingSenderId: '221877419354'
}
firebase.initializeApp(config)
const db = firebase.database().ref('data')
db.on('child_added', function (data) {})

const store = new Vuex.Store({
  state: {
    allAlbum: [],
    listPlayer: [],
    toggle: false
  },
  getters: {
    allAlbum: state => { return state.allAlbum },
    listPlayer: state => { return state.listPlayer },
    toggle: state => { return state.toggle }
  },
  actions: {
    getApiAlbum (context, payload) {
      context.commit('getApiAlbum', payload)
    },
    uploadFirebase (context, payload) {
      context.commit('uploadFirebase', payload)
    },
    player (context, payload) {
      context.commit('player', payload)
    }
  },
  mutations: {
    getApiAlbum (state, payload) {
      state.allAlbum = payload
    },
    uploadFirebase (context, payload) {
      db.push(payload)
    },
    player (state, payload) {
      state.listPlayer.push(payload)
      state.toggle = true
    }
  }
})

export default store
