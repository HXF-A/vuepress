const headConf = require('./config/headConfig');
const pluginConf = require('./config/pluginsConfig');
const navConf = require('./config/navConfig');
const sidebarConf = require('./config/sidebarConfig');
module.exports = {
  base: "/vuepress/",
  title: "博客",
  description: "han",
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    logo: "/assets/img/logo.png",
    lastUpdated: "Last Updated", //git更新时间
    nav: navConf,
    sidebar: sidebarConf,
  },
};
