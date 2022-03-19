<template>
  <div class="sidebar">
    <div class="list">
      <div class="title">Vue infinite list</div>
      <hr style="border: 0; height: 1px; background: #ddd" />

      <div style="color: #666; font-weight: 500; font-size: 15px">
        A tiny but mighty list virtualization library for Vue, with zero
        dependencies
      </div>
    </div>

    <ul>
      <router-link :to="'demo1'"><li>Elements of equal height</li></router-link>
      <router-link :to="'demo2'"><li>Horizontal list</li></router-link>
      <router-link :to="'demo3'"><li>Dynamic height</li></router-link>
      <router-link :to="'demo4'"><li>Scroll to index</li></router-link>
      <router-link :to="'demo5'"><li>Scroll to offset</li></router-link>
      <router-link :to="'demo6'"><li>Dynamic data</li></router-link>
      <router-link :to="'demo7'"><li>OverscanCount</li></router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100%;
  position: absolute;
  background-color: #fff;
  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);
}

.sidebar .list {
  margin-top: 80px;
}

.sidebar .list div {
  padding-left: 15px;
  padding-right: 10px;
  padding-top: 5px;
}

.sidebar .title {
  font-size: 19px;
  font-weight: 900;
}

.sidebar ul {
  margin-top: 25px;
  padding: 0;
}
.sidebar ul li {
  list-style: none;
  height: 45px;
  padding: 5px 25px;
  line-height: 45px;
  cursor: pointer;
  border: 0;
  outline: none;
  text-decoration: none !important;
}

.sidebar ul li:hover {
  background: #eee;
  color: rgb(63, 81, 181);
}

.router-link-active li {
  background: #ddd;
  color: rgb(63, 81, 181);
}
</style>
