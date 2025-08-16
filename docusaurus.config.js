// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FSR 센서 기술 위키',
  tagline: '압력 센서, 측정 회로, 소프트웨어 서비스 전문',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://fsr-sensor-wiki.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mdexdev02', // Usually your GitHub org/user name.
  projectName: 'fsr-sensor-wiki', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FSR 센서 위키',
        logo: {
          alt: 'FSR 센서 위키 로고',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '제품 문서',
          },
          {to: '/blog', label: '기술 블로그', position: 'left'},
          {
            href: 'https://github.com/mdexdev02/fsr-sensor-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '제품 문서',
            items: [
              {
                label: '압력 센서',
                to: '/docs/intro',
              },
              {
                label: '측정 회로',
                to: '/docs/intro',
              },
              {
                label: '소프트웨어',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '지원',
            items: [
              {
                label: '기술 문의',
                href: 'mailto:mdex.dev02@gmail.com',
              },
              {
                label: '사용자 가이드',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '더 보기',
            items: [
              {
                label: '기술 블로그',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mdexdev02/fsr-sensor-wiki',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FSR Sensor Wiki | Version: V.0.1.0.0 | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
