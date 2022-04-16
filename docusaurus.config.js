// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const versions = require('./versions.json');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dinky',  //网站标题 | Site title
  tagline: 'Dinky 为 Apache Flink 而生，让 Flink SQL 纵享丝滑', // 网站标语 | Tagline for your website
  url: 'http://www.dlink.top/', // 网站网址 | Your website's URL
  baseUrl: '/', // 站点的相对路径 可将其视为是主机名后的路径 | Path to your website
  staticDirectories: ['static/img'], // 静态文件目录 | Path to static files
  trailingSlash: true, //此选项允许您自定义 URL/链接后是否添加结尾斜杠 | Whether to append a trailing slash to the URL when rendering URLs
  onBrokenLinks: 'ignore', // Docusaurus 在检测到无效链接时的行为 |  Docusaurus behavior when invalid links are detected    -> 类型：'ignore' | 'log' | 'warn' | 'error' | 'throw' |
  onBrokenMarkdownLinks: 'warn', // Docusaurus 在检测到无效 Markdown 链接时的行为 | Docusaurus behavior when detecting invalid markdown links  -> 类型：'ignore' | 'log' | 'warn' | 'error' | 'throw'
  onDuplicateRoutes: 'warn', // Docusaurus 在检测到重复的路由时的行为 |  Behavior of docusaurus when duplicate routes are detected  ->  类型：'ignore' | 'log' | 'warn' | 'error' | 'throw'
  favicon: 'side_dinky.svg', // 左侧logo  | left logo
  organizationName: 'DataLinkDC', // 拥有此源的 GitHub 用户或组织。 用于部署命令。 |  The GitHub user or organization that owns this source. Command for deployment.
  projectName: 'dinky-website', // GitHub 源的名称。 用于部署命令。 | The name of the GitHub repository. Command for deployment.
  deploymentBranch: 'main', // GitHub Pages 的部署分支。 用于部署命令。 | The branch to deploy to GitHub Pages. Command for deployment.
  customFields:{ // 自定义字段 | Custom fields
    structTitle: 'Dinky',
    structSubTitle: 'Dinky 为 Apache Flink 而生，让 Flink SQL 纵享丝滑',
    // structDescription: custom_fields.structDesc(),
    learningMore:'https://space.bilibili.com/366484959/video'
  },
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
    // locales: ['zh-cn','en'],
    // localeConfigs: {
    //  'zh-cn': {
    //    label: "简体中文",
    //    direction: 'ltr',
    //  },
    //  'en': {
    //    label: "English",
    //    direction: 'ltr',
    //  },
    // },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'zh-cn') {
              return `https://github.com/DataLinkDC/dinky-website/tree/master/i18n/${locale}/${docPath}`;
            }
            return `https://github.com/DataLinkDC/dinky-website/tree/master/${versionDocsDirPath}/${docPath}`;
          },
        },
//        blog: {
//          showReadingTime: true,
//          // Please change this to your repo.
//          editUrl:
//            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
     announcementBar: {
            id: 'announcementBar-2', // Increment on change
            content: `⭐️ &nbsp; If you like Dinky , give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/DataLinkDC/dlink">GitHub</a>`,
            backgroundColor: "#BBDFFF",
            isCloseable: false,
          },
      hideOnScroll: false, // 滚动时是否隐藏 | Whether to hide the sidebar on scroll
      hideableSidebar: true, // 是否隐藏侧边栏 | Whether to hide the sidebar in mobile
      autoCollapseSidebarCategories: true, // 点击另一个分类时自动折叠当前分类 | Click another category will automatically collapse the current category
      navbar: {
        title: 'Dinky',
        logo: {
          alt: 'Dinky',
          src: 'side_dinky.svg',
        },
       items: [
          {
            to: '/',
            position: 'right',
            label: '主页',
            title: '主页',
            activeBaseRegex: `^/$`,
          },
          {
            position: 'right',
            label: '文档',
            to: "/docs/intro",
            items: [
              {
                label: "Next",
                to: "/docs/next/intro",
              },
             {
               label: "0.6.1",
               to: "/docs/intro",
             },
              {
                  label: "0.6.0",
                  to: "/docs/0.6.0/intro",
                },
              {
                label: "All Versions",
                to: "/versions",
              },
            ],
          },
          {
            to: '/download/download',
            position: 'right',
            label: '下载',
            activeBaseRegex: `/download/`,
          },
          {
            to: '/docs/next/developer_guide/debug',
            position: 'right',
            label: '开发者指南',
            items: [
              {
                label: "如何参与",
                to: "/docs/next/developer_guide/contribution/how_contribute",
              },
              {
                label: "本地调试",
                to: "/docs/next/developer_guide/local_debug",
              },
              {
                label: "远程调试",
                to: "/docs/next/developer_guide/remote_debug",
              },
              {
                label: "debug",
                to: "/docs/next/developer_guide/debug",
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/DataLinkDC/dlink',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档首页',
                to: '/docs/intro',
              },
              {
                label: 'Open Api',
                to: '/docs/administrator_guide/studio/openapi',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/DataLinkDC/dlink/discussions',
              },
              {
                label: 'Issue',
                href: 'https://github.com/DataLinkDC/dlink/issues',
              },
              {
                label: 'Pull Request',
                href: 'https://github.com/DataLinkDC/dlink/pulls',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/DataLinkDC/dlink',
              },
              // {
              //   label: '最新动态',
              //   to: '/blog',
              // },
            ],
          },
        ],
        logo: {
          alt: 'Dinky',
          src: 'side_dinky.svg',
          width: 100,
          height: 30,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Dinky, Inc. DataLinkDC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      'docusaurus-plugin-less',
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'download',
          path: 'download',
          routeBasePath: 'download',
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            if (locale !== 'zh-cn') {
              return `https://github.com/DataLinkDC/dinky-website/tree/master/i18n/${locale}/${docPath}`;
            }
            return `https://github.com/DataLinkDC/dinky-website/tree/master/${versionDocsDirPath}/${docPath}`;
          },
          sidebarPath: require.resolve('./sidebars.js'),
        },
      ],
    ]
};

module.exports = config;
