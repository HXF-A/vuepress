const moment = require("moment");
// const secret = require('./secret')
module.exports = {
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        moment.locale(lang);
        return moment(timestamp).format("LLLL");
      },
    },
    '@vssue/vuepress-plugin-vssue': {
      // set `platform` rather than `api`
      platform: 'github-v4',

      // all other options of Vssue are allowed
      owner: 'HXF-A',
      repo: 'vuepress',
      clientId: '2de4084bd53f1f7229f8',
      clientSecret: 'd278aedab52b9f7ccef968d403786c460f63fd44',
      autoCreateIssue: true
    },
    '@vuepress/back-to-top': true,
    '@vuepress/blog': {
        directories: [
            {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: 'blogs',
            // Path of the `entry page` (or `list page`)
            path: '/blogs',
            },
        ],
    }
}