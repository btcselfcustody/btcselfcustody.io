// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BTC Self-Custody',
  tagline: 'Your Keys, Your Coins, Your Freedom',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://btcselfcustody.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'btcselfcustody', // Usually your GitHub org/user name.
  projectName: 'btcselfcustody.io', // Usually your repo name.

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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'BTC Self Custody',
        logo: {
          alt: 'BTC Self Custody',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSeed',
            position: 'left',
            label: 'DIY Seed',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialLibreboot',
            position: 'left',
            label: 'Libreboot',
          },
          {
            label: 'Resources',
            type: 'dropdown',
            position: 'right',
            items: [
              {
                href: 'https://timechainstats.com/',
                label: 'TimechainStats',
              },
              {
                href: 'https://mempool.space.com/',
                label: 'Mempool',
              },
            ],
          },
          {
            href: 'https://github.com/btcselfcustody',
            position: 'right',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'DIY Seed',
                to: '/docs/seed',
              },
              {
                label: 'Libreboot',
                to: '/docs/libreboot',
              },
            ],
          },
          {
            title: 'Find Us',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/btcselfcustody',
              },
              {
                label: 'Keybase',
                href: 'https://keybase.io/btcselfcustody',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BTC Self Custody. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
