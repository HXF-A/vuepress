const moment = require("moment");

module.exports = {
  base: "/vuepress/",
  title: "博客",
  description: "han",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "auther", content: "博客" }],
    ["meta", { name: "keywords", content: "vuepress介绍" }],
  ],
  plugins: {
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        moment.locale(lang);
        return moment(timestamp).format("LLLL");
      },
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容",
        buttonText: "Refresh",
      },
    },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github-v4',

      // all other options of Vssue are allowed
      owner: 'HXF-A',
      repo: 'vuepress',
      clientId: '2de4084bd53f1f7229f8',
      clientSecret: '4b87b6be76f4425dc1dd4be8706b8bf6d3ce37a3',
      autoCreateIssue: true
    },
  },
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", //git更新时间
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/about" },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: ["", "about", "about1"],
  },
};
