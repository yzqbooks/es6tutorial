import theme from "./themeConfig";
import {defineUserConfig} from "vuepress";
import {searchPlugin} from "@vuepress/plugin-search";
export default defineUserConfig({
  base: "/wangdoc/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",

        href: `/wangdoc/images/wangdoc.png`,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      //我的iconfont库
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3267094_j92iwdcfcxp.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "wangdoc",
      description: "wangdoc",
    },
  },

  theme ,
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    },)
  ],
});
