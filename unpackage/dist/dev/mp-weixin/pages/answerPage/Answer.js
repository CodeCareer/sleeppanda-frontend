"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
if (!Math) {
  common_vendor.unref(Pciker)();
}
const Pciker = () => "../../components/Picker.js";
const _sfc_main = {
  __name: "Answer",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.p({
          type: "time"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/czy/work/wb/sleeppanda-frontend/pages/answerPage/Answer.vue"]]);
wx.createPage(MiniProgramPage);
