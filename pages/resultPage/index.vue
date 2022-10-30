<template>
  <view class="result_content">
    <image class="result_top_img" src="@/static/images/resultPageTopImg.png" />
    <view class="result_state_centent">
      <image class="result_state_img" :src="resultData.imgUrl"></image>
    </view>
    <view class="result_state">{{ resultData.resultState }}</view>
    <view class="result_describe">{{ resultData.resultDescribe }}</view>
  </view>
</template>

<script setup>
import { reactive } from "vue";
import { onLoad, onShow } from "@dcloudio/uni-app";
import resultCongratulationImg from "@/static/images/resultCongratulationImg.png";
import resultGoodImg from "@/static/images/resultGoodImg.png";
import resultAttentionImg from "@/static/images/resultAttentionImg.png";
import resultRegretImg from "@/static/images/resultRegretImg.png";
const imgStateEnum = {
  congratulation: resultCongratulationImg,
  good: resultGoodImg,
  attention: resultAttentionImg,
  regret: resultRegretImg,
};
const resultStateEnum = {
  congratulation: "恭喜!",
  good: "不错哦!",
  attention: "要注意哦!",
  regret: "很遗憾!",
};
const resultDescribeEnum = {
  congratulation: "您的睡眠质量很好",
  good: "您的睡眠质量还行",
  attention: "您的睡眠质量一般",
  regret: "您的睡眠质量很差",
};
const resultData = reactive({
  imgUrl: resultRegretImg,
  resultState: "111",
  resultDescribe: "222",
});
resultData["imgUrl"] = resultCongratulationImg;
resultData["resultState"] = "很遗憾!";
resultData["resultDescribe"] = "你的睡眠质量很差";
onLoad(() => {
  console.log("------", resultData);
});
</script>

<style lang="scss" scoped>
.result_content {
  background-image: url(@/static/images/homePageBackgroundImg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0 126rpx 0 64rpx;
  height: 100vh;
  .result_top_img {
    width: 352rpx;
    height: 300rpx;
    margin-top: 120rpx;
  }
  .result_state_centent {
    margin-top: 56rpx;
    width: 472rpx;
    height: 472rpx;
    background: linear-gradient(360deg, #ddedbc 0%, #b9d787 100%);
    // opacity: 0.26;
    margin: 56rpx auto 0;
    border-radius: 50%;
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .result_state_img {
    width: 420rpx;
    height: 420rpx;
    position: absolute;
    left: 26rpx;
    top: 26rpx;
  }
  .result_state {
    font-size: 64rpx;
    font-family: PingFangTC-Semibold, PingFangTC;
    font-weight: 600;
    color: #000000;
    line-height: 90rpx;
    text-align: center;
    margin-top: 72rpx;
  }
  .result_describe {
    font-size: 38rpx;
    font-family: PingFangTC-Regular, PingFangTC;
    font-weight: 400;
    color: #000000;
    line-height: 52rpx;
    margin-top: 16rpx;
    text-align: center;
  }
}
</style>
