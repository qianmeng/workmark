export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '专业技能',
        children: [
          {
            title: '技术架构',
            link: '/zh-cn/docs/dir/xz_baiyang.html',
          },
          {
            title: '业务系统',
            link: '/zh-cn/docs/dir/xz_jinniu.html',
          },
          {
            title: '数据处理',
            link: '/zh-cn/docs/dir/xz_shuangzi.html',
          },
          {
            title: '数据分析',
            link: '/zh-cn/docs/dir/xz_juxie.html',
          }
          
        ],
      },
      {
        title: '公司管理',
        children: [
          {
            title: '项目管理',
            link: '/zh-cn/docs/dir/xz_baiyang.html',
          },
          {
            title: '技术管理',
            link: '/zh-cn/docs/dir/xz_jinniu.html',
          },
          {
            title: '人员管理',
            link: '/zh-cn/docs/dir/xz_shuangzi.html',
          },
          {
            title: '客户管理',
            link: '/zh-cn/docs/dir/xz_juxie.html',
          }
          
        ],
      },
      {
        title: '技术能力',
        children: [
          {
            title: '微服务',
            link: '/zh-cn/docs/dir/xz_baiyang.html',
          },
          {
            title: '大数据',
            link: '/zh-cn/docs/dir/xz_jinniu.html',
          },
          {
            title: '人工智能',
            link: '/zh-cn/docs/dir/xz_shuangzi.html',
          },
          {
            title: '用户交互',
            link: '/zh-cn/docs/dir/xz_juxie.html',
          }
          
        ],
      },
      {
        title: '关于我们',
        children: [
          {
            title: '关于作者',
            link: '/zh-cn/docs/aboutxz.html',
          },
          {
            title: '关于网站',
            link: '/zh-cn/docs/aboutsite.html',
          }
        ],
      },
    ],
    barText: '作者介绍',
  },
};
