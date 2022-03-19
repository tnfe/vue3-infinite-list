<template>
  <div ref="rootNode" :style="warpStyle">
    <div ref="innerNode" :style="innerStyle">
      <div
        v-for="(item, i) in event?.items"
        :style="getItemStyle(i)"
        :key="event?.start + i"
        class="vue3-infinite-list"
      >
        <slot :event="event" :item="item" :index="event.start + i"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  reactive,
  toRaw,
  toRefs,
  onMounted,
  onBeforeUnmount,
  onUpdated,
} from "vue-demi";

import {
  ALIGN_AUTO,
  ALIGN_CENTER,
  ALIGN_END,
  ALIGN_START,
  DIRECTION,
  DIRECTION_VERTICAL,
  DIRECTION_HORIZONTAL,
  SCROLL_CHANGE_REASON,
  SCROLL_CHANGE_OBSERVED,
  SCROLL_CHANGE_REQUESTED,
  STYLE_WRAPPER,
  STYLE_INNER,
  STYLE_ITEM,
  positionProp,
  scrollProp,
  sizeProp,
} from "./constants";

import { ItemStyle, StyleCache, ItemInfo, RenderedRows } from "./infinite-list.interface";
import { SizeAndPosManager, ItemSize } from "./size-and-position-manager";
import { Util } from "./utils";
import { ILEvent } from "./il-event";

export default defineComponent({
  name: "InfiniteList",

  props: {
    scrollDirection: {
      type: String,
      default: DIRECTION_VERTICAL,
    },
    scrollToAlignment: {
      type: String,
      default: ALIGN_AUTO,
    },
    overscanCount: {
      type: Number,
      default: 4,
    },
    itemSize: {
      type: null,
      required: true,
    },
    data: {
      type: [Array, null],
      default: [],
      required: true,
    },
    unit: {
      type: String,
      default: "px",
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
    debug: {
      type: Boolean,
      default: false,
    },
    scrollOffset: Number,
    scrollToIndex: Number,
    estimatedItemSize: Number,
  },

  setup(props, { attrs, slots, emit }) {
    let rootNode = ref(null);
    let innerNode = ref(null);
    let warpStyle = ref(null);
    let innerStyle = ref(null);

    // declare variable
    let items: any[] = [];
    let offset: number;
    let oldOffset: number;
    let scrollChangeReason: string;
    let sizeAndPosManager: SizeAndPosManager;
    let styleCache: StyleCache = {};

    const { itemSize, scrollDirection, scrollToIndex } = toRefs(props);
    const util = new Util();
    const event = reactive(new ILEvent());

    const getItemStyle = (index: number): any => {
      index += event.start;
      const style = styleCache[index];
      if (style) return style;

      const { size, offset } = sizeAndPosManager.getSizeAndPositionForIndex(index);
      const debugStyle = props.debug ? { backgroundColor: util.randomColor() } : null;

      return (styleCache[index] = {
        ...STYLE_ITEM,
        ...debugStyle,
        [getCurrSizeProp()]: addUnit(size),
        [positionProp[props.scrollDirection]]: addUnit(offset),
      });
    };

    const initAll = () => {
      createSizeAndPosManager();
      util.addEventListener(rootNode.value, "scroll", handleScroll);

      // set offset init value
      offset = props.scrollOffset || (props.scrollToIndex != null && getOffsetForIndex(props.scrollToIndex)) || 0;
      scrollChangeReason = SCROLL_CHANGE_REQUESTED;

      // srcoll init value
      setTimeout(() => {
        if (props.scrollOffset != null) {
          scrollTo(props.scrollOffset);
        } else if (props.scrollToIndex != null) {
          scrollTo(getOffsetForIndex(props.scrollToIndex));
        }
      }, 0);

      //emit("update", event);
      setDomStyle();
      scrollRender();
    };

    const handleScroll = (e: UIEvent) => {
      const nodeOffset = getNodeOffset();
      if (nodeOffset < 0 || offset === nodeOffset || e.target !== rootNode.value) return;

      offset = nodeOffset;
      scrollChangeReason = SCROLL_CHANGE_OBSERVED;
      scrollRender();
    };

    const scrollRender = () => {
      const { start, stop } = sizeAndPosManager.getVisibleRange({
        containerSize: getCurrSizeVal() || 0,
        offset: offset || 0,
        overscanCount: props.overscanCount,
      });

      // fill items;
      if (typeof start !== "undefined" && typeof stop !== "undefined") {
        items.length = 0;

        for (let i = start; i <= stop; i++) {
          items.push(props.data[i]);
        }

        event.start = start;
        event.stop = stop;
        event.offset = offset;
        event.items = items;
        event.total = getItemCount();

        if (!util.isPureNumber(itemSize.value)) {
          innerStyle.value = {
            ...STYLE_INNER,
            [getCurrSizeProp()]: addUnit(sizeAndPosManager.getTotalSize()),
          };
        }

        //emit("update", event);
        if (props.debug) {
          console.log(event.toString());
        }
      }

      renderEnd();
    };

    const scrollTo = (value: number) => {
      rootNode.value[getCurrScrollProp()] = value;
      oldOffset = value;
    };

    const renderEnd = () => {
      if (oldOffset !== offset && scrollChangeReason === SCROLL_CHANGE_REQUESTED) {
        scrollTo(offset);
      }
    };

    ////////////////////////////////////////////////////////////////////////////
    // helper method
    ////////////////////////////////////////////////////////////////////////////
    // init SizeAndPosManager
    const createSizeAndPosManager = () => {
      if (!sizeAndPosManager)
        sizeAndPosManager = new SizeAndPosManager({
          itemCount: getItemCount(),
          itemSizeGetter: (index) => getSize(index),
          estimatedItemSize: getEstimatedItemSize(),
        });

      return sizeAndPosManager;
    };

    const getNodeOffset = () => {
      return rootNode.value[getCurrScrollProp()];
    };

    const getCurrSizeProp = () => {
      return sizeProp[scrollDirection.value];
    };

    const getCurrSizeVal = () => {
      return props[getCurrSizeProp()];
    };

    const getCurrScrollProp = () => {
      return scrollProp[scrollDirection.value];
    };

    const getOffsetForIndex = (
      index: number,
      scrollToAlignment: string = props.scrollToAlignment,
      itemCount: number = getItemCount()
    ): number => {
      if (index < 0 || index >= itemCount) index = 0;

      return sizeAndPosManager.getUpdatedOffsetForIndex({
        align: props.scrollToAlignment,
        containerSize: getCurrSizeVal(),
        currentOffset: offset || 0,
        targetIndex: index,
      });
    };

    const getSize = (index: number): number => {
      if (typeof itemSize.value === "function") {
        return itemSize.value(index);
      }
      return util.isArray(itemSize.value) ? itemSize.value[index] : itemSize.value;
    };

    const getItemCount = (): number => {
      return props.data ? props.data.length : 0;
    };
    const getEstimatedItemSize = () => {
      return props.estimatedItemSize || (typeof itemSize.value === "number" && itemSize.value) || 50;
    };

    const recomputeSizes = (startIndex: number = 0) => {
      styleCache = {};
      sizeAndPosManager.resetItem(startIndex);
    };

    const addUnit = (val: any): string => {
      return typeof val === "string" ? val : val + props.unit;
    };

    const setDomStyle = () => {
      warpStyle.value = {
        ...STYLE_WRAPPER,
        height: addUnit(props.height),
        width: addUnit(props.width),
      };
      innerStyle.value = {
        ...STYLE_INNER,
        [getCurrSizeProp()]: addUnit(sizeAndPosManager.getTotalSize()),
      };
    };

    const clearStyleCache = () => {
      for (let key in styleCache) {
        delete styleCache[key];
      }
    };

    ////////////////////////////////////////////////////////////////////////////
    // The life cycle
    ////////////////////////////////////////////////////////////////////////////
    onMounted(() => setTimeout(initAll));

    onBeforeUnmount(() => {
      clearStyleCache();
      sizeAndPosManager.destroy();
      util.removeEventListener(rootNode.value, "scroll", handleScroll);
    });

    watch(
      () => props.debug,
      (newVal, oldVal) => clearStyleCache()
    );

    watch(
      () => props.data,
      (newVal, oldVal) => {
        sizeAndPosManager.updateConfig({
          itemCount: getItemCount(),
          estimatedItemSize: getEstimatedItemSize(),
        });
        oldOffset = null;
        recomputeSizes();
        setDomStyle();
        setTimeout(scrollRender, 0);
      }
    );

    watch(
      () => props.scrollOffset,
      (newVal, oldVal) => {
        offset = props.scrollOffset || 0;
        scrollChangeReason = SCROLL_CHANGE_REQUESTED;
        scrollRender();
      }
    );

    watch(
      () => props.scrollToIndex,
      (newVal, oldVal) => {
        offset = getOffsetForIndex(props.scrollToIndex, props.scrollToAlignment, getItemCount());
        scrollChangeReason = SCROLL_CHANGE_REQUESTED;
        scrollRender();
      }
    );

    return {
      rootNode,
      innerNode,
      warpStyle,
      innerStyle,
      getItemStyle,
      event,
    };
  },
});
</script>
