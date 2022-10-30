<template>
  <view class="homePage_content">
    <image class="homePage_top_img" src="@/static/images/homePageTopImg.png" />
    <view class="homePage_describe_first"
      >以下的问题仅与您过去一个月的睡眠习惯有关。</view
    >
    <view class="homePage_describe_second"
      >您应该对过去一个月多数白天和晚上的睡眠情况进行准确的回答。</view
    >
    <view class="homePage_describe_third">要回答以下所有的问题。</view>
    <view class="homePage_line"></view>
    <view class="homePage_button">
      <button @click="startAnswer">开始答题</button>
    </view>
  </view>
</template>

<script setup>
function startAnswer() {
  uni.navigateTo({
    url: "/pages/resultPage/index",
  });
}
</script>

<style lang="scss" scoped>
.homePage_content {
  background-image: url(@/static/images/homePageBackgroundImg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0 126rpx 0 64rpx;
  height: 1600rpx;
  .homePage_top_img {
    width: 560rpx;
    height: 536rpx;
    margin-top: 126rpx;
  }

  .homePage_describe_first,
  .homePage_describe_second,
  .homePage_describe_third {
    width: 526rpx;
    font-size: 32rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111111;
    line-height: 50rpx;
    padding-left: 34rpx;
    position: relative;
  }
  .homePage_describe_first::before,
  .homePage_describe_second::before,
  .homePage_describe_third::before {
    content: "";
    width: 12rpx;
    height: 12rpx;
    border-radius: 50%;
    background-color: #000000;
    position: absolute;
    left: 0;
    top: 18rpx;
  }

  .homePage_describe_first {
    margin-top: 30rpx;
  }
  .homePage_describe_second {
    margin-top: 36rpx;
  }
  .homePage_describe_third {
    margin-top: 40rpx;
  }
  .homePage_line {
    width: 368rpx;
    height: 9rpx;
    background: #000000;
    margin-top: 65rpx;
  }
  .homePage_button {
    text-align: center;
    margin-top: 188rpx;
    button {
      width: 428rpx;
      height: 106rpx;
      line-height: 106rpx;
      background: #9ade5d;
      border-radius: 220rpx;
      font-size: 36rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      border: none;
    }
  }
}
</style>
