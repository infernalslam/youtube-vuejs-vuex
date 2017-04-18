<template>
  <div>
    <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="title-side">อัลบั้มมาเเรง</div>
        <div style="border-bottom: 3px solid #003;"></div>
        <br>

        <div class="columns">

          <div class="column is-3" v-for="show in store.state.allAlbum">
            <div class="panel">
              <p class="is-marginless"><img :src="show.img" width="300" height="300"></p>
              <div class="panel-block">
                <div class="columns">
                  <div class="column">
                    <span style="text-align: center; color: #003; font-size: 24px;"> {{show.artist}} <br> {{show.album}} </span>
                    <div class="panel-block-item">{{show.dec}}</div>
                  </div>
                </div>
              </div>
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
  name: 'album',
  data () {
    return {
      store
    }
  }
}
</script>
