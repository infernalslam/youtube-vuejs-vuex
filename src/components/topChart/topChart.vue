<template>
<div>
  <section class="hero">
    <div class="hero-body">
      <div class="container">

        <div class="columns">
          <div class="column">
            <div class="title-side">ฮิตติดหู 50 เพลงต่อเนื่อง</div>
            <div style="border-bottom: 3px solid #003;"></div>
            <br>

            <div class="box">

              <article class="media" v-for="show in sort">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="show.img">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{show.artist}} </strong>
                      <small>{{show.song}}</small>
                    </p> {{show.album}}
                  </div>
                </div>
                <span class="tag is-danger" style="cursor:pointer;" @click="store.dispatch('player', show)">เล่น</span>
                <span class="tag is-info" style="cursor:pointer;">โหวต</span>
                <span style="font-size: 20px;">{{show.vote}}Like</span>
              </article>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import store from '../../vuex/index'
export default {
  name: 'topChart',
  data () {
    return {
      store
    }
  },
  computed: {
    sort () {
      let rank = []
      this.store.state.allAlbum.find(item => {
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
      console.log(rank)
      return rank
    }
  }
}
</script>
