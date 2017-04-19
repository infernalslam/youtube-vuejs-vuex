<template>
<div>
  <nav class="nav" id="top" style="background-color: #ff3; color: #003 !important">
    <div class="container">
      <div class="nav-left">
          <router-link class="nav-item is-tab" style="color: #003;" to="/">หน้าเเรก</router-link>
          <!-- <a class="nav-item is-tab" style="color: #003;">ฮิตติดหู</a> -->
          <!-- <a class="nav-item is-tab" style="color: #003;">เพลย์ลิสต์</a> -->
          <!-- <a class="nav-item is-tab" style="color: #003;">เพลงใหม่</a> -->
          <router-link class="nav-item is-tab" style="color: #003;" to="/create">CreatePlaylist</router-link>
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
