"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const resultData = common_vendor.reactive({
      imgUrl: common_assets.resultRegretImg,
      resultState: "111",
      resultDescribe: "222"
    });
    resultData["imgUrl"] = common_assets.resultCongratulationImg;
    resultData["resultState"] = "\u5F88\u9057\u61BE!";
    resultData["resultDescribe"] = "\u4F60\u7684\u7761\u7720\u8D28\u91CF\u5F88\u5DEE";
    common_vendor.onLoad(() => {
      console.log("------", resultData);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: resultData.imgUrl,
        c: common_vendor.t(resultData.resultState),
        d: common_vendor.t(resultData.resultDescribe)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-093c8a48"], ["__file", "/Users/czy/work/wb/sleeppanda-frontend/pages/resultPage/index.vue"]]);
wx.createPage(MiniProgramPage);
