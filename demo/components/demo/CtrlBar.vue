<template>
  <div class="ctrl">
    <div class="clist">
      <span class="title">Debug: </span>
      <el-switch
        v-model="model"
        class="ml-2"
        active-color="#ff4949"
        inactive-color="#666"
      />
      <span v-if="false" style="margin-left: 50px"
        >start: <span class="red">{{ event?.start }}</span> | stop:
        <span class="red">{{ event?.stop }}</span> | total:
        <span class="red">{{ event?.total }}</span> | offset:
        <span class="red">{{ event?.offset }}</span>
      </span>

      <el-button type="primary" style="float: right" class="linkbtn">
        <a :href="link" target="_blank">view code</a>
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, computed, defineComponent } from "vue";

export default defineComponent({
  name: "CtrlBar",
  props: {
    event: null,
    modelValue: {
      type: Boolean,
      default: false,
    },
    link: String,
  },
  setup(props, { emit }) {
    const { link, event } = toRefs(props);
    const model = computed({
      get() {
        return props.modelValue;
      },

      set(value) {
        return emit("update:modelValue", value);
      },
    });

    return {
      model,
      event,
      link,
    };
  },
});
</script>

<style scoped>
@import "./common.css";

.red {
  color: red;
}
</style>
