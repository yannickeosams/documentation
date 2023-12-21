// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Defactor Developer Docs',
  tagline: 'Technical Documentation for Defactor Developers',
  favicon: 'img/Defactor_Favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.defactor.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'defactor-com', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
            'https://github.com/defactor-com/documentation/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/defactor-com/documentation/tree/main',
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
      algolia: {
        appId: 'E3S6H07ZZJ',
        apiKey: '96beda7f32e71789f500f76751ac6dfc',
        indexName: 'umentation--category-api',
        contextualSearch: true,
        externalUrlRegex: 'external\\\\.com|domain\\\\.com',
        replaceSearchResultPathname: {
          from: '/docs/',
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search'
      },
      image: 'img/defactor-social-card.jpeg',
      navbar: {
        title: '',
        logo: {
          alt: 'Defactor logo',
          src: 'img/Defactor-Logo-Dark.svg',
          srcDark: 'img/Defactor-Logo-Light.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/defactor-com',
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
                label: 'API',
                to: '/docs/category/api',
              },
              {
                label: 'Smart Contracts',
                to: '/docs/category/smart-contracts',
              },
              {
                label: 'Front End',
                to: '/docs/category/front-end',
              },
              {
                label: 'Real World Use Cases',
                to: '/docs/category/real-world-use-cases'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/defactor_official',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/S2SCMTPMUt',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/defactor_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/defactor-com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Defactor. All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
