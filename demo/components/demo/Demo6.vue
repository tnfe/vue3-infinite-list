<template>
  <CtrlBar
    v-model="debug"
    :link="'https://github.com/tnfe/vue-infinite-list/blob/master/demo/components/demo/Demo6.vue'"
  />

  <div class="btn-bar">
    Generate random data:
    <el-button type="success" v-on:click="generateData">Generate</el-button>
  </div>

  <div class="vl-con">
    <InfiniteList :data="data" :width="'100%'" :height="500" :itemSize="60" :debug="debug" v-slot="{ item, index }">
      <el-row class="li-con">
        <el-col :span="6">item{{ index + 1 }}</el-col>
        <el-col :span="6">2022-05-01</el-col>
        <el-col :span="6">Name: Tom</el-col>
        <el-col :span="6">
          <el-button type="primary">Button</el-button>
          <el-button type="success">Button</el-button>
        </el-col>
      </el-row>
    </InfiniteList>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
import InfiniteList from "../../../src/";
import CommonService from "./common.service";
import CtrlBar from "./CtrlBar.vue";

export default defineComponent({
  name: "Demo6",
  components: {
    InfiniteList,
    CtrlBar,
  },
  setup() {
    const debug = ref(false);
    const data = ref(CommonService.generateData(150000));

    const generateData = () => {
      data.value = CommonService.generateData(90000, 200000);
    };

    return {
      debug,
      data,
      generateData,
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
  padding: 0;
}
.li-con div {
  padding: 5px 20px;
  display: inline-block;
}
:deep(.vue3-infinite-list:nth-child(odd)) {
  background: #99a9bf;
}

:deep(.vue3-infinite-list:nth-child(even)) {
  background-color: #ddd;
}
</style>
