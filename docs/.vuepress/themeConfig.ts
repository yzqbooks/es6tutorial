import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
    hostname: "https://yzqbooks.github.io/wangdoc",

    author: {
        name: "yzqdev",
        url: "http://www.yzqdev.top",
    },
    pcBreakPoint: 1600,
    iconPrefix: "iconfont icon-",

    logo: "/images/wangdoc.png",

    repo: "https://github.com/yzqbooks/wangdoc",

    docsDir: "docs",

    // navbar
    navbar: navbar,

    // sidebar
    sidebar: sidebar,

    footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-home</a>`,

    displayFooter: true,

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    // encrypt: {
    //   config: {
    //     "/guide/encrypt.html": ["1234"],
    //   },
    // },

    plugins: {
        blog: false,

        // 你也可以使用 Waline
        // comment: {
        //   type: "giscus",
        //   repo: "yzqdev/blog-issues",
        //   repoId: "MDEwOlJlcG9zaXRvcnkzODI2NTY1MTY=",
        //   category: "General",
        //   categoryId: "DIC_kwDOFs7gBM4COKgn",
        // },
        prismjs: {
            dark: 'tomorrow',
            light: 'tomorrow'
        },
        mdEnhance: {
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
        },
    },
}, {custom: true});
