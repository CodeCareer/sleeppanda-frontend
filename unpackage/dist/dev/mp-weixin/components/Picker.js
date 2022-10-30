"use strict";
var common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "Picker",
  setup(__props) {
    const hours = common_vendor.ref(Array.from(Array(24), (v, k) => {
      if (k < 10) {
        return "0" + k;
      } else {
        return k + "";
      }
    }));
    const minutes = common_vendor.ref(Array.from(Array(60), (v, k) => {
      if (k < 10) {
        return "0" + k;
      } else {
        return k + "";
      }
    }));
    const pickerValue = common_vendor.ref([10, 10]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(hours.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        b: common_vendor.f(minutes.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        c: pickerValue.value
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/czy/work/wb/sleeppanda-frontend/components/Picker.vue"]]);
wx.createComponent(Component);
