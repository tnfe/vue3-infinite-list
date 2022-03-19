<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue3-infinite-list/blob/master/demo/components/demo/Demo3.vue'"
  />

  <div v-loading="loading" element-loading-text="Simulate Data Loading..." class="vl-con" style="height: 520px">
    <InfiniteList
      :data="data"
      :width="'100%'"
      :height="520"
      :itemSize="getItemSize"
      :debug="debug"
      v-slot="{ item, index }"
    >
      <div class="li-con">item {{ index }} : {{ item }}</div>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, onMounted, onBeforeUnmount } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo3",
  components: {
    InfiniteList,
    CtrlBar,
  },
  setup() {
    const debug = ref(true);
    const loading = ref(true);
    const data = ref(null);
    let id: number = 0;

    onMounted(() => {
      id = setTimeout(() => {
        loading.value = false;
        data.value = CommonService.generateData(100000);
      }, 2100);
    });
    onBeforeUnmount(() => clearTimeout(id));

    const getItemSize = (i: number): number => {
      switch (i % 4) {
        case 1:
          return 80;

        case 2:
          return 50;

        case 3:
          return 100;

        default:
          return 200;
      }
    };

    return {
      debug,
      data,
      loading,
      getItemSize,
    };
  },
});
</script>

<style scoped>
@import "./common.css";
.li-con {
  height: 100%;
}
</style>
