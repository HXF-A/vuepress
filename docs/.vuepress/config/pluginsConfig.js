const moment = require("moment");
const secret = require('./secret')
module.exports = {
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
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true,
  }