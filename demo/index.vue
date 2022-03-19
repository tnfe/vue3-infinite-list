<template>
  <Navbar></Navbar>
  <div class="body-con">
    <Sidebar></Sidebar>
    <div class="demos-con"><router-view></router-view></div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import { ref, reactive } from "vue-demi";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
.body-con {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background: #fafafa;
}
.demos-con {
  padding-top: 110px;
  padding-left: 330px;
  padding-right: 70px;
  background: #fafafa;
}
</style>
