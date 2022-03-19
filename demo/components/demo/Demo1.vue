<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue3-infinite-list/blob/master/demo/components/demo/Demo1.vue'"
  />

  <div class="vl-con">
    <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="50" :debug="debug" v-slot="{ item, index }">
      <div class="li-con">{{ index + 1 }} : {{ item }}</div>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo1",
  components: {
    InfiniteList,
    CtrlBar,
  },
  setup() {
    const debug = ref(false);
    const data = CommonService.generateData(100000);

    return {
      debug,
      data,
    };
  },
});
</script>

<style scoped>
@import "./common.css";
</style>
