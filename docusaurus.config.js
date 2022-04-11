// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const versions = require('./versions.json');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dinky',
  tagline: 'Dinky 为 Apache Flink 而生，让 Flink SQL 纵享丝滑',
  url: 'http://www.dlink.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/side_dinky.svg',
  organizationName: 'DataLinkDC', // Usually your GitHub org/user name.
  projectName: 'dinky', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
     'zh-Hans': {
       label: "简体中文",
       direction: 'ltr',
     },
    //  'en': {
    //    label: "English",
    //    direction: 'ltr',
    //  },
    },
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
            if (locale !== 'zh-Hans') {
              return `https://github.com/DataLinkDC/dinky-website/tree/walkhan/master/i18n/${locale}/${docPath}`;
            }
            return `https://github.com/DataLinkDC/dinky-website/tree/walkhan/master/${versionDocsDirPath}/${docPath}`;
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
          },
      navbar: {
        title: 'Dinky',
        logo: {
          alt: 'Dinky',
          src: 'img/side_dinky.svg',
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
            to: '/docs/Next/developer_guide/debug',
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
              //   label: '用户案例',
              //   to: '/blog',
              // },
            ],
          },
        ],
        logo: {
          alt: 'Dinky',
          src: 'img/side_dinky.svg',
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
            if (locale !== 'zh-Hans') {
              return `https://github.com/DataLinkDC/dinky-website/tree/walkhan/master/i18n/${locale}/${docPath}`;
            }
            return `https://github.com/DataLinkDC/dinky-website/tree/walkhan/master/${versionDocsDirPath}/${docPath}`;
          },
          sidebarPath: require.resolve('./sidebarsDevelopment.js'),
        },
      ],
    ]
};

module.exports = config;
