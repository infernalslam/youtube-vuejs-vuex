<template lang="html">
<div>
  <div class="hero-body video-cover">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title" style="color: white;">
              สร้างเพลย์ลิสต์ (playlist)
            </h1>
            <div class="box">
              <label class="label">ชื่อศิลปิน</label>
              <p class="control">
                <input class="input" type="text" placeholder="artist" v-model="data.artist">
              </p>
              <label class="label">ชื่ออัลบั้ม</label>
              <p class="control">
                <input class="input" type="text" placeholder="Album" v-model="data.album">
              </p>

              <label class="label">คำโปรย</label>
              <p class="control">
                <input class="input" type="text" placeholder="Album" v-model="data.dec">
              </p>

              <label class="label">ลิ้งหน้าปกอัมบั้ม ขนาด 300 X 300</label>
              <p class="control">
                <input class="input" type="text" placeholder="https://xxx.jpg" v-model="img">
              </p>
              <hr>
              <span class="tag is-success" style="font-size: 18px;" v-show="img"> Preview </span>
              <img :src="img" v-show="img" width="300" height="300">
              <!-- preview -->

              <label class="label">Add youtube playlist</label>

              <p class="control">
                <input class="input" type="text" placeholder="ชื่อเพลง" v-model="data.song">
                <input class="input" type="text" placeholder="link youtube" v-model="data.youtubeID">
                <hr>
                 <span class="tag is-danger" style="float: right; cursor: pointer;" @click="addTrack(data.song, data.youtubeID)">Add</span>
              </p>
              <br>

              <div v-for="show in tracks">
                <span class="tag is-success" style="font-size: 16px;">{{show.song}}</span>
                <span class="tag is-danger" style="font-size: 10px;">{{show.youtubeID}}</span>
                <button class="delete" @click="delTrack(show.id)"></button>
              </div>
              <hr>

              <p class="control">
                <button class="button" style="background: rgb(208, 1, 74); color: white;" @click="uploadAlbum()">Create</button>
                <!-- <button class="button is-default" @click="cancel()">Cancel</button> -->
              </p>
            </div>
            <p class="has-text-centered">
              <a style="color: white;">Create by</a> <a>  Vuejs</a>
            </p>
          </div>
        </div>
      </div>
    </div>


</div>
</template>

<script>
export default {
  name: 'form',
  data () {
    return {
      data: {},
      tracks: [],
      img: ''
    }
  },
  methods: {
    addTrack (song, youtube) {
      let data = {
        id: '_' + Math.random().toString(36).substr(2, 9),
        song: song,
        youtubeID: youtube,
        vote: 0,
        artist: this.data.artist,
        album: this.data.album,
        img: this.img
      }
      this.tracks.push(data)
    },
    delTrack (id) {
      let index = this.tracks.findIndex(i => i.id === id)
      this.tracks.splice(index, 1)
    },
    uploadAlbum () {
      let data = {
        artist: this.data.artist,
        album: this.data.album,
        dec: this.data.dec,
        img: this.img,
        tracks: this.tracks
      }
      console.log('upload data :::', data)
      this.data.artist = ''
      this.data.album = ''
      this.data.dec = ''
      this.img = ''
      this.tracks = []
    }
  }
}
</script>


<style>
.video-cover {
  background:  url(http://media2.giphy.com/media/3o6wreSoWc0Zjhunf2/giphy.gif) no-repeat center center fixed;
  background-size: cover;
}
</style>
