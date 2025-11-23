import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // === 基础配置 ===
  /** 网站标题 */
  title: '岛屿',
  /** 作者名字 (你可以改成自己的名字) */
  author: '岛屿的主人',
  /** 网站描述 (SEO用) */
  description: '记录生活与思考',
  /** 网站图标路径 */
  favicon: '/favicon/favicon.ico',
  /** 语言设置 (已改为中文) */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    // 日期格式化设置
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** 首页显示的 Logo */
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Avatar'
  },

  // === 全局配置 ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // 头部元数据 (保持默认)
  head: [],
  customCss: [],

  /** 菜单栏配置 (已汉化) */
  header: {
    menu: [
      { title: '文章', link: '/blog' },
      { title: '文档', link: '/docs' },
      { title: '项目', link: '/projects' },
      { title: '友链', link: '/links' },
      { title: '关于', link: '/about' }
    ]
  },

  /** 页脚配置 */
  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [
      {
        title: 'Moe ICP 114514',
        link: 'https://icp.gov.moe/?keyword=114514',
        style: 'text-sm'
      },
      {
        title: 'Travelling',
        link: 'https://www.travellings.cn/go.html',
        style: 'text-sm'
      },
      {
        title: '隐私协议',
        link: '/terms/list',
        pos: 2
      }
    ],
    credits: true,
    social: { github: 'https://github.com/cworld1/astro-theme-pure' }
  },

  content: {
    externalLinks: {
      content: ' ↗',
      properties: {
        style: 'user-select:none'
      }
    },
    blogPageSize: 8,
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  // 友链和个人信息配置
  links: {
    logbook: [
      { date: '2025-03-16', content: '站点建立，开始记录。' },
    ],
    // 侧边栏个人卡片信息
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || 'Null' },
      { name: 'Link', val: 'https://astro-pure.js.org/' },
      { name: 'Avatar', val: 'https://astro-pure.js.org/favicon/favicon.ico' }
    ],
    cacheAvatar: false
  },
  pagefind: true,
  quote: {
    // 使用一言API (中文名言)
    server: 'https://v1.hitokoto.cn/?c=i',
    target: `(data) => (data.hitokoto || 'Error')`
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // 评论系统配置
  waline: {
    enable: true,
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    emoji: ['bmoji', 'weibo'],
    additionalConfigs: {
      pageview: true,
      comment: true,
      locale: {
        reaction0: '点赞',
        placeholder: '欢迎评论。（填写邮箱可收到回复，无需注册）'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: '条款内容',
  list: [
    { title: '隐私政策', link: '/terms/privacy-policy' },
    { title: '服务条款', link: '/terms/terms-and-conditions' },
    { title: '版权声明', link: '/terms/copyright' },
    { title: '免责声明', link: '/terms/disclaimer' }
  ]
}

const config = { ...theme, integ } as Config
export default config
