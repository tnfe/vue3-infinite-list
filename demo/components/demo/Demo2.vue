<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue3-infinite-list/blob/master/demo/components/demo/Demo2.vue'"
  />

  <div class="vl-con" style="width: 900px">
    <InfiniteList
      :data="data"
      :width="900"
      :height="220"
      :itemSize="115"
      scrollDirection="horizontal"
      :debug="debug"
      v-slot="{ item, index }"
    >
      <div class="li-con li-con-r">
        item{{ index }} <br />
        xxxxxxx <br />
        xxxxxxx <br />
        <el-button type="primary" round>Primary</el-button>
      </div>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo2",
  components: {
    CtrlBar,
    InfiniteList,
  },
  setup() {
    const debug = ref(false);
    const data = CommonService.generateData(200000);

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
