<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue3-infinite-list/blob/master/demo/components/demo/Demo4.vue'"
  />

  <div class="btn-bar">
    <span>
      Scroll to index:
      <el-input-number v-model="scrollToIndex" :min="0" :max="999" />
    </span>

    <span class="right-span">
      Scroll to alignment:
      <el-select v-model="scrollToAlignment" class="m-2" placeholder="Select">
        <el-option label="auto" value="auto"> </el-option>
        <el-option label="start" value="start"> </el-option>
        <el-option label="center" value="center"> </el-option>
        <el-option label="end" value="end"> </el-option>
      </el-select>
    </span>
  </div>

  <div class="vl-con">
    <InfiniteList
      :data="data"
      :width="'100%'"
      :height="500"
      :itemSize="getItemSize"
      :scrollToIndex="scrollToIndex"
      :scrollToAlignment="scrollToAlignment"
      :debug="debug"
      v-slot="{ item, index }"
    >
      <div class="li-con" :class="getClass(index)">item{{ index + 1 }} : {{ item }}</div>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo4",
  components: {
    InfiniteList,
    CtrlBar,
  },
  setup() {
    const debug = ref(false);
    const scrollToIndex = ref(0);
    const scrollToAlignment = ref("auto");
    const data = CommonService.generateData(2000);

    const getItemSize = (i: number): number => {
      switch (i % 4) {
        case 1:
          return 80;

        case 2:
          return 50;

        case 3:
          return 100;

        default:
          return 150;
      }
    };

    const getClass = (i: number): String => {
      if (i == scrollToIndex.value) return "active";
      else return "";
    };

    return {
      debug,
      scrollToIndex,
      data,
      getClass,
      getItemSize,
      scrollToAlignment,
    };
  },
});
</script>

<style scoped>
@import "./common.css";
.btn-bar {
  margin-bottom: 15px;
}
.right-span {
  margin-left: 20px;
}
.li-con {
  height: 100%;
}
</style>
