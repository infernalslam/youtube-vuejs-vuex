<template>
  <div id="app">
    <!-- <header-side1></header-side1> -->
    <header-sub></header-sub>
    <router-view></router-view>
    <transition name="fade">
    <player v-show="store.state.toggle"></player>
  </transition>
    <!-- <youtube :video-id="store.state.listPlayer[0].youtubeID" :player-vars="{autoplay: 1}" style="display: none"></youtube> -->

  </div>
</template>

<script>
import store from './vuex/index.js'
import HeaderSide1 from './components/header/header'
import HeaderSub from './components/header/subHeader'
import Player from './components/player/player'
// import store from './vuex/index'
export default {
  name: 'app',
  components: {
    HeaderSide1,
    HeaderSub,
    Player
  },
  data () {
    return {
      store
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Prompt');
* {
    font-family: 'Prompt', sans-serif;
 }
 .title-side {
   color: #fff;
   font-style: normal!important;
   font-size: 22px;
   padding: 0 15px;
   margin-bottom: 0;
   border-top-left-radius: 5px;
   border-top-right-radius: 5px;
   background-color: #d0014a;
   margin-right: 70%;
   font-weight: 600;
}
.player-title {
  /*width: 100%;
  position: fixed;
  left: 0px;*/
  /*top: 910px;*/
  /*top: 90%;
  bottom: 0px;
  background: #eee;*/
  z-index: 99999;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background-color: #eee;
  width: 100%;
  height: 100px;
  padding: 12px;
}
.player-title-side {
  color: #fff;
  font-style: normal!important;
  font-size: 22px;
  padding: 0 15px;
  margin-bottom: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #d0014a;
  margin-right: 70%;
  font-weight: 600;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
