const path = require('path')

module.exports = {
  title: 'simple-utils-tiny',
  base: '/sut/',
  dest: path.join(__dirname, '../dist'),
  head: [
    ['link', { rel: 'icon', href: '/images/favicon3.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'simple-utils-tiny',
      description: 'simple-utils-tiny 文档',
    },
    '/en/': {
      lang: 'en-US',
      title: 'simple-utils-tiny',
      description: 'simple-utils-tiny documents',
    }
  },
  themeConfig: {
    locales: {
      '/' : {
        selectText: '多语言',
        label: '简体中文',
        nav: [
          { text: '文档', link: '/doc/' },
          { text: 'Github', link: 'https://github.com/lennokiki/simple-utils-tiny' }
        ],
        sidebar: {
          '/doc/': genSidebarDocConfig('文档')
        }, 
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Documents', link: '/en/doc/' },
          { text: 'Github', link: 'https://github.com/lennokiki/simple-utils-tiny' }
        ],
        sidebar: {
          '/en/doc/': genSidebarDocConfig('Documents')
        },
      }
    },
  },

}

function genSidebarDocConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'start',
        'string',
        'type',
        'regexp'
      ]
    }
  ]
}