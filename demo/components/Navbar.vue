<template>
  <div class="navbar">
    <div class="logo"><img height="50" src="../assets/logo-small.png" /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar"
});
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: rgb(63, 81, 181);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  height: 66px;
  position: absolute;
  z-index: 999;
}

.logo {
  height: 40px;
  margin-top: 8px;
  margin-left: 40px;
  float: left;
}
</style>
