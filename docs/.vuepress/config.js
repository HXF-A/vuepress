module.exports = {
    title: "博客",
    description: "han",
    head: [
      ['link', {rel: 'icon',href: '/favicon.ico'}],
      ['meta', {name: 'auther', content: '博客'}],
      ['meta', {name: 'keywords', content: 'vuepress介绍'}]
    ],
    themeConfig: {
      logo: '/assets/img/logo.png',
      lastUpdated: 'Last Updated',
      nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/about' },
          { text: 'External', link: 'https://google.com' },
        ],
      sidebar: ['', 'about', 'about1']
    }
  }