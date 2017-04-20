<template>
<div>
  <youtube :video-id="store.state.oncelist.youtubeID" :player-vars="{autoplay: 1}"
  @ended="ended"
  style="display: none"></youtube>

  <div class="player-title">
    <div class="player-title-side">คุณกำลังฟัง</div>
    <div style="border-bottom: 3px solid #003;"></div>
    <div style="padding-left: 30px; padding-top: 20px;">
      <i class="fa fa-play" aria-hidden="true"></i> &nbsp &nbsp
      <i class="fa fa-step-forward" aria-hidden="true"></i> &nbsp &nbsp
      <i class="fa fa-window-close" aria-hidden="true" @click="store.dispatch('closePlayer')"></i> &nbsp &nbsp
      <span> {{store.state.oncelist.artist}} {{store.state.oncelist.song}}  - {{store.state.oncelist.album}} </span>
      <span style="color: red;">{{store.state.youtubeID}}</span>
    </div>
  </div>
</div>
</template>

<script>
import store from '../../vuex/index'
export default {
  name: 'player',
  data () {
    return {
      store,
      player: ''
    }
  },
  methods: {
    ended () {
      console.log('endddddddddddddddd')
      this.store.dispatch('nextSong')
    }
  }
}
</script>
