<template lang="html">
  <div>
    <title-create></title-create>
    <album></album>
    <top-chart></top-chart>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../vuex/index.js'
import titleCreate from './header/titleCreate'
import Album from './content/album'
import topChart from './topChart/topChart'
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
    topChart
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
