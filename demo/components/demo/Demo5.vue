<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue-infinite-list/blob/master/demo/components/demo/Demo5.vue'"
  />

  <div class="btn-bar">
    Scroll to offset:
    <el-input-number v-model="scrollOffset" :step="20" :min="0" :max="90000" />
  </div>

  <div class="vl-con" v-loading="loading" element-loading-text="Simulate Data Loading...">
    <InfiniteList
      :data="data"
      :width="'100%'"
      :height="500"
      :itemSize="90"
      :scrollOffset="scrollOffset"
      :debug="debug"
      v-slot="{ item, index }"
    >
      <el-row class="mb-4 li-con">
        <el-col :span="8">index: {{ index + 1 }} </el-col>
        <el-col :span="8">xxxxxxxxxx</el-col>
        <el-col :span="8">
          <el-button type="primary">Primary</el-button> <el-button type="success">Success</el-button></el-col
        >
      </el-row>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo5",
  components: {
    InfiniteList,
    CtrlBar,
  },
  setup() {
    const debug = ref(false);
    const loading = ref(true);
    const scrollOffset = ref(10000);
    const data = ref(null);
    let id: number = 0;

    onMounted(() => {
      id = setTimeout(() => {
        loading.value = false;
        data.value = CommonService.generateData(100000);
      }, 1600);
    });
    onBeforeUnmount(() => clearTimeout(id));

    return {
      debug,
      scrollOffset,
      data,
      loading,
    };
  },
});
</script>

<style scoped>
@import "./common.css";
.btn-bar {
  margin-bottom: 15px;
}
.li-con {
  padding: 20px;
  height: 100%;
}
</style>
