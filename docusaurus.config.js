// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// hans 配置参考：https://docusaurus.io/zh-CN/docs/api/docusaurus-config
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hans\'s Site',
  tagline: '^_^',
  url: 'https://hans-yoyo.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hans-yoyo', // Usually your GitHub org/user name.
  projectName: 'hans-yoyo.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        blog: {
          showReadingTime: false,
          // editUrl: 'https://github.com/hans-yoyo/my-website/edit/main/',
          //blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 8,
          path: 'blog',
          blogSidebarTitle: '最近文章',
          feedOptions: {
            type: 'all',
            title: 'Hans\'s Site',
            description: 'Hans\'s 博客 RSS',
            copyright: `Copyright © ${new Date().getFullYear()} Power Hans.`,
          },
        },

        sitemap: {
          changefreq: 'always',
          priority: 1.0,
          //ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{
        name: 'keywords',
        content: 'java, blog, developer'
      }],

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Hans\'s Site',
        hideOnScroll: false,
        // logo: {
        //   alt: 'Hans\'s Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'Home',
            position: 'right',
            label: '技术手册',
          },
          {to: 'blog', label: '博客', position: 'right'},
          {to: "reading", label: "阅读", position: "right"},
          {
            href: 'https://github.com/hans-yoyo/hans-yoyo.github.io',
            label: 'Github',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          // 多个链接可以分组
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //   ],
          // },
          // 单个链接
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/hans-yoyo/my-website',
            // }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hans | <a href="http://beian.miit.gov.cn/">苏ICP备2021046511号</a> | Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
