// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tokeon FAQ',
  tagline: '  ',
  favicon: 'img/fav.ico',

  // Set the production url of your site here
  url: 'https://tokeon.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tokeon', // Usually your GitHub org/user name.
  projectName: 'Tokeon knowledge base', // Usually your repo name.

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
          routeBasePath: '/', //указываем стартовую страницу
          // Please change this to your repo.


        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'null',
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
          title: '  ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/log.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Для инвесторов',
          },
          {
            type: 'docSidebar',
            sidebarId: 'emitentSidebar',
            position: 'left',
            label: 'Для эмитентов',
          },
         // {to: '/blog', label: 'Блог>', position: 'left'},    //раздел блог

        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Контакты',
            items: [
              {
                label: 'Telegramm',
                href: 'https://tokeon_bot.t.me/',
              },
              {
                label: 'Email',
                href: 'mailto:info@tokeon.ru',
              },

            ],
          },

        ],
        copyright: ` ${new Date().getFullYear()} Tokeon`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
