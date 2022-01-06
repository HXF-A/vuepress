const headConf = require('./config/headConfig');
const pluginConf = require('./config/pluginsConfig');
const navConf = require('./config/navConfig');
const sidebarConf = require('./config/sidebarConfig');
module.exports = {
  base: "/docs/",
  title: "博客",
  description: "han",
  dest: "public",
  head: headConf,
  plugins: pluginConf,
  search: true,
  searchMaxSuggestions: 10,
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", //git更新时间
    nav: navConf,
    sidebar: sidebarConf,
  },
};
