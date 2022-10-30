"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    function startAnswer() {
      common_vendor.index.navigateTo({
        url: "/pages/resultPage/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(startAnswer)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0ff7806c"], ["__file", "/Users/czy/work/wb/sleeppanda-frontend/pages/homePage/index.vue"]]);
wx.createPage(MiniProgramPage);
