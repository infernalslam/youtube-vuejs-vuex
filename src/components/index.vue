<template lang="html">
  <div>
    <title-create></title-create>
    <album></album>
    <top-chart></top-chart>
    <br><br><br>
    <player v-show="store.state.toggle"></player>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../vuex/index.js'
import titleCreate from './header/titleCreate'
import Album from './content/album'
import topChart from './topChart/topChart'
import Player from './player/player'
export default {
  name: 'index',
  data () {
    return {
      store
    }
  },
  components: {
    titleCreate,
    Album,
    topChart,
    Player
  },
  mounted () {
    var vm = this
    axios.get('https://fir-auth-12e52.firebaseio.com/data.json').then(res => {
      let setData = []
      for (var index in res.data) {
        if (res.data.hasOwnProperty(index)) {
          setData.push(res.data[index])
        }
      }
      vm.store.dispatch('getApiAlbum', setData)
    })
  }
}
</script>
