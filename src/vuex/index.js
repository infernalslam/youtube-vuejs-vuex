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
    oncelist: {
      id: '',
      artist: '',
      img: '',
      song: '',
      vote: 0,
      youtubeID: ''
    },
    toggle: false
  },
  getters: {
    allAlbum: state => { return state.allAlbum },
    listPlayer: state => { return state.listPlayer },
    toggle: state => { return state.toggle },
    oncelist: state => { return state.oncelist }
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
    },
    closePlayer (context, payload) {
      context.commit('closePlayer', payload)
    },
    nextSong (context) {
      context.commit('nextSong')
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
      // state.listPlayer.push(payload)
      state.oncelist.id = payload.id
      state.oncelist.artist = payload.artist
      state.oncelist.img = payload.img
      state.oncelist.song = payload.song
      state.oncelist.vote = payload.vote
      state.oncelist.youtubeID = payload.youtubeID
      state.oncelist.album = payload.album
      state.toggle = true
    },
    closePlayer (state, payload) {
      state.toggle = false
      state.listPlayer = []
      state.oncelist = {
        id: '',
        artist: '',
        img: '',
        song: '',
        vote: 0,
        youtubeID: ''
      }
    },
    nextSong (state) {
      // state.listPlayer.tracks.splice(0, 1)
      // state.listPlayer = state.allAlbum.find(i => i.artist === payload.artist)
      let index = Math.floor(Math.random() * state.listPlayer.length)
      console.log('index ::', index, 'data :: ', state.listPlayer[index])
      // state.oncelist.id = state.listPlayer[index].tracks[index].id
      // state.oncelist.artist = state.listPlayer[index].tracks[index].artist
      // state.oncelist.img = state.listPlayer[index].tracks[index].img
      // state.oncelist.song = state.listPlayer[index].tracks[index].song
      // state.oncelist.vote = state.listPlayer[index].tracks[index].vote
      // state.oncelist.youtubeID = state.listPlayer[index].tracks[index].youtubeID
      // state.oncelist.album = state.listPlayer[index].tracks[index].album
    }
  }
})

export default store
