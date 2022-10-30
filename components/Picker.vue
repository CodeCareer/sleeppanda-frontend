<template>
  <view class="pickerPage">
    <picker-view
      indicator-class="pickerStyle"
      mask-class="maskStyle"
      mask-style="background: '#f6fae8'"
      class="picker-view"
      :value="pickerValue"
    >
      <picker-view-column>
        <view class="item_left" v-for="(item, index) in hours" :key="index">{{
          item
        }}</view>
      </picker-view-column>
      <picker-view-column>
        <view
          class="item_right"
          v-for="(item, index) in minutes"
          :key="index"
          >{{ item }}</view
        >
      </picker-view-column>
    </picker-view>
  </view>
</template>

<script setup>
import { ref } from "vue";
// const props = defineProps({
//   type: String,
// });
const hours = ref(
  Array.from(Array(24), (v, k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k + "";
    }
  })
);
const minutes = ref(
  Array.from(Array(60), (v, k) => {
    if (k < 10) {
      return "0" + k;
    } else {
      return k + "";
    }
  })
);
const pickerValue = ref([10, 10]);
</script>

<style lang="scss">
.pickerPage {
  .picker-view {
    width: 428rpx;
    height: 200rpx;
    margin-top: 20rpx;
  }
  // .pickerStyle {
  //   // width: 428rpx;
  //   height: 108rpx !important;
  //   background: #ffffff !important;
  //   border-radius: 54rpx !important;
  // }
  .maskStyle {
    // background-color: #f6fae8 !important;
  }
  .item_left {
    // height: 108rpx !important;
    padding: 0 10rpx;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    // text-align: right;
  }
  .item_right {
    // height: 108rpx !important;
    padding: 0 10rpx;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    // text-align: left;
  }
}
</style>
