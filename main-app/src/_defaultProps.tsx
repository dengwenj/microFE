import {
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/home',
        name: '欢迎',
        icon: <SmileFilled />,
      },
      {
        path: '/react-app',
        name: 'react微应用',
        icon: <CrownFilled />,
        routes: [
          {
            path: '/react-app/test1',
            name: 'react测试1',
          },
          {
            path: '/react-app/test2',
            name: 'react测试2',
            icon: <CrownFilled />,
          },
          {
            path: '/react-app/test3',
            name: 'react测试3',
            icon: <CrownFilled />,
          },
        ],
      },
      {
        path: '/vue-app',
        name: 'vue微应用',
        icon: <TabletFilled />,
        routes: [
          {
            path: '/vue-app/test1',
            name: 'vue测试1',
          },
          {
            path: '/vue-app/test2',
            name: 'vue测试2',
            icon: <CrownFilled />,
          },
          {
            path: '/vue-app/test3',
            name: 'vue测试3',
            icon: <CrownFilled />,
          },
        ],
      },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
    {
      title: '邓文杰',
      desc: '个人简介',
      url: 'https://dengwj.vip',
      target: '_blank',
    },
    {
      title: '知乎',
      desc: '知乎个人',
      url: 'https://www.zhihu.com/people/ni-shuo-bu-zou-de-98',
      target: '_blank',
    },
    {
      title: '微博',
      desc: '微博个人',
      url: 'https://weibo.com/u/6575004852',
      target: '_blank',
    },
    {
      title: 'old_person_home',
      desc: '基于 TS + Koa + MySQL 实现的养老院系统👴🏻👵🏻',
      url: 'https://github.com/dengwenj/old_person_home',
      target: '_blank',
    },
    {
      title: 'old_person_home_web',
      desc: '基于 React + TS + Ant Design 实现的养老院系统 web 端👵🏻',
      url: 'https://github.com/dengwenj/old_person_home_web',
      target: '_blank',
    },
    {
      title: 'build',
      desc: '🏆 基于 webpack 自己搭建 react or vue 脚手架进行模块化开发 npm：npm i dwj-react-build',
      url: 'https://github.com/dengwenj/build',
      target: '_blank',
    },
  ],
};
