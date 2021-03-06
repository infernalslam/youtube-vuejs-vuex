import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// import axios from 'axios'
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
// db.on('child_added', function (data) {})

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
      // get api
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
      // repeat
      let rank = []
      state.allAlbum.find(item => {
        item.tracks.map(i => {
          let arr = {
            id: i.id,
            artist: i.artist,
            album: i.album,
            img: i.img,
            song: i.song,
            vote: i.vote,
            youtubeID: i.youtubeID
          }
          rank.push(arr)
        })
      })
      state.listPlayer = rank
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
      // state.listPlayer.splice(Math.floor(Math.random() * state.listPlayer.length) + 1, 1)
      let index = Math.floor(Math.random() * state.listPlayer.length) + 1
      state.oncelist.id = state.listPlayer[index].id
      state.oncelist.artist = state.listPlayer[index].artist
      state.oncelist.img = state.listPlayer[index].img
      state.oncelist.song = state.listPlayer[index].song
      state.oncelist.vote = state.listPlayer[index].vote
      state.oncelist.youtubeID = state.listPlayer[index].youtubeID
      state.oncelist.album = state.listPlayer[index].album
    }
  }
})

export default store
