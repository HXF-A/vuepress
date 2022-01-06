const moment = require('moment');

module.exports = {
    base: "/",
    title: "博客",
    description: "han",
    head: [
      ['link', {rel: 'icon',href: '/favicon.ico'}],
      ['meta', {name: 'auther', content: '博客'}],
      ['meta', {name: 'keywords', content: 'vuepress介绍'}]
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp, lang) => {
            // 不要忘了安装 moment
            moment.locale(lang)
            return moment(timestamp).format('LLLL')
          }
        }
      ],
      [
        '@vuepress/pwa',
        {
          serviceWorker: true,
          updatePopup: {
            message: "发现新内容",
            buttonText: "Refresh"
          }
        }
      ]
    ],
    themeConfig: {
      logo: '/assets/img/logo.png',
      lastUpdated: 'Last Updated',//git更新时间
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/about' },
          { text: 'External', link: 'https://google.com' },
        ],
      sidebar: ['', 'about', 'about1']
    }
  }