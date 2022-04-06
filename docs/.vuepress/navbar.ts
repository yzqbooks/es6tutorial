import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  // { text: "文章", icon: "home", link: "/article/" },

  { text: "bash教程", icon: "shell", link: "/bash-tutorial/" },

  { text: "clang教程", icon: "c", link: "/clang-tutorial/" },

  { text: "css教程", icon: "css", link: "/css-tutorial/" },
  { text: "es6教程", icon: "es6", link: "/es6-tutorial/" },
  { text: "js教程", icon: "javascript", link: "/javascript-tutorial/" },
  { text: "git教程", icon: "git", link: "/git-tutorial/" },
  { text: "html教程", icon: "html", link: "/html-tutorial/" },

  {
    text: "node教程",
    icon: "nodeJS",
    link: "/node-tutorial/",
  },
  { text: "ssh教程", icon: "tree", link: "/ssh-tutorial/" },
  { text: "webapi教程", icon: "chrome", link: "/webapi-tutorial/" },
]);
