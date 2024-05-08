import { IPostRecommend } from '@/components/post-recommend'

export const recommend: IPostRecommend = {
  module: ' 推荐 ',
  icon: 'i-mdi:book',
  color: '',
  ext: [{ name: '投稿', url: '#' }, {
    name: '更多',
    url: '#'
  }],
  items: Array(5).fill({
    url: '#',
    cover: { url: '/next.svg', name: '封面' },
    tags: [{ url: '#', name: '标签' }],
    author: { url: '#', name: '作者' },
    title: '现在看到的这里是标题，现在看到的这里是标题，',
    desc: '这是一段描述信息，这是一段描述信息，这是一段描述信息，这是一段描述信息，',
    create: '3小时前',
    times: '阅读11分钟'
  })
}

export const navLinks = [
  {
    name: '首页',
    path: '/'
  },
  {
    name: '资讯',
    path: '/news'
  },
  {
    name: 'AI',
    path: '/ai'
  },
  {
    name: '电商',
    path: '/mall'
  },
  {
    name: '导航',
    path: '/nav'
  },
  {
    name: '关于',
    path: '/about'
  }
]

export const header = {
  logo: '/next.svg',
  navLinks,
  recommend
}