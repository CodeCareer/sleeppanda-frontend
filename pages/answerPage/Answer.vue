<template>
  <view class="answerPage">
    <view class="answerPage_content">
      <view class="answerPage_content_left">
        <image src="@/static/images/left.png" />
        <text>上一题</text>
      </view>
      <view class="answerPage_content_right">
        <progress
          :percent="10"
          show-info
          :stroke-width="25"
          :duration="8"
          :border-radius="25"
          :font-size="18"
          backgroundColor="#fff"
          activeColor="#A5ED64"
        ></progress>
      </view>
    </view>
    <view class="answerPage_options">
      <view class="answerPage_theme">
        近一个月，您晚上上床睡觉的时间通常是
      </view>
      <Pciker type="time"></Pciker>
    </view>
  </view>
</template>

<script setup>
import Pciker from "@/components/Picker";
</script>

<style lang="scss">
.answerPage {
  height: 1624rpx;
  background: #f6fae8;
  overflow: hidden;
  backdrop-filter: blur(19.009613952px);
  .answerPage_content {
    margin-top: 74rpx;
    display: flex;
    align-items: center;
    padding: 0 20rpx 0 20rpx;
    .answerPage_content_left {
      // width: 86rpx;
      display: flex;
      align-items: center;
      image {
        // display: inline-block;
        width: 18rpx;
        height: 28rpx;
      }
      text {
        margin-left: 10rpx;
        font-size: 22rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 32rpx;
      }
    }
    .answerPage_content_right {
      margin-left: 20rpx;
      flex: 1;
    }
  }
}
</style>
