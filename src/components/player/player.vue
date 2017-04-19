<template>
<div>
  <youtube :video-id="store.state.listPlayer[0].youtubeID" :player-vars="{autoplay: 1}" style="display: none"></youtube>

  <div class="player-title">
    <div class="player-title-side">คุณกำลังฟัง</div>
    <div style="border-bottom: 3px solid #003;"></div>
    <div style="padding-left: 30px; padding-top: 20px;">
      <i class="fa fa-play" aria-hidden="true"></i> &nbsp &nbsp
      <i class="fa fa-step-forward" aria-hidden="true"></i> &nbsp &nbsp
      <i class="fa fa-window-close" aria-hidden="true"></i> &nbsp &nbsp
      <span> {{store.state.listPlayer[0].artist}} {{store.state.listPlayer[0].song}}  - {{store.state.listPlayer[0].album}} </span>
      <span style="color: red;">{{store.state.listPlayer[0].youtubeID}}</span>
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
      store
    }
  }
}
</script>
