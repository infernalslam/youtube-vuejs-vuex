<template>
<div>
  <nav class="nav" id="top" style="background-color: black; color: #003 !important">
    <div class="container">
      <div class="nav-left">
          <router-link class="nav-item is-tab" style="color: white;" to="/">หน้าเเรก</router-link>
          <router-link class="nav-item is-tab" style="color: white;" to="/create">CreatePlaylist</router-link>
          <!-- <router-link class="nav-item is-tab" style="color: white;" to="/search">ใครก็สามารถ เพิ่มเพลงใหม่ๆ ได้</router-link> -->
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'subHeader'
}
</script>
