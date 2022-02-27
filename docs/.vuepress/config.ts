import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import type { SidebarConfig } from "@vuepress/theme-default";
let sidebar: SidebarConfig = {
  "/": [
    {
      text: "开始",
      collapsible: true,
      children: [
        "/intro.md",
        "/let.md",
        "/destructuring.md",
        "/string.md",
        "/regex.md",
        "/number.md",
        "/function.md",
        "/array.md",
        "/object.md",
        "/object-methods.md",
        "/symbol.md",
        "/set-map.md",
        "/proxy.md",
        "/reflect.md",
        "/promise.md",
        "/iterator.md",
        "/generator.md",
        "/generator-async.md",
        "/async.md",
        "/class.md",
        "/class-extends.md",
        "/module.md",
        "/module-loader.md",
        "/style.md",
        "/spec.md",
        "/arraybuffer.md",
        "/proposals.md",
        "/decorator.md",
        "/reference.md",
      ],
    },
  ],
};
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-CN",
  base: "/es6tutorial/",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  plugins: [
    ["@snippetors/vuepress-plugin-tabs", {}],
    ["@snippetors/vuepress-plugin-code-copy", {}],
  ],
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    navbar: [
      // NavbarItem
      {
        text: "总结",
        link: "/SUMMARY.md",
      },
      {
        text: "kali",
        link: "/SUMMARY.md",
      },
      // NavbarGroup

      // 字符串 - 页面文件路径
    ],
    sidebar: sidebar,
  },
});
