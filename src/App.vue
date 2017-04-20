<template>
  <div id="app">
    <header-side1></header-side1>
    <header-sub></header-sub>
    <router-view></router-view>
    <!-- <youtube :video-id="store.state.listPlayer[0].youtubeID" :player-vars="{autoplay: 1}" style="display: none"></youtube> -->
  </div>
</template>

<script>
import HeaderSide1 from './components/header/header'
import HeaderSub from './components/header/subHeader'
// import store from './vuex/index'
export default {
  name: 'app',
  components: {
    HeaderSide1,
    HeaderSub
  },
  data () {
    return {
      // store
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
  width: 100%;
  position: fixed;
  left: 0px;
  top: 910px;
  bottom: 0px;
  background: #eee;
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
</style>
