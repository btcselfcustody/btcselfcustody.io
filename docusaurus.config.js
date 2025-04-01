// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BTC Self Custody",
  tagline: "Guide Writer| The University of Satoshi",
  favicon: "img/logo.svg",

  // Set the production url of your site here
  url: "https://btcselfcustody.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "btcselfcustody", // Usually your GitHub org/user name.
  projectName: "btcselfcustody.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-DB4LHSKK4J",
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
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
            sidebarId: 'tutorialBasics',
            position: 'left',
            label: 'Basics',
          },
          {
            label: 'Guides',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: '/docs/seed', //this is a slug
                sidebarId: 'tutorialSeed',
                label: 'DIY Seed 🎲',
              },
              {
                to: '/docs/passphrase', //this is a slug
                sidebarId: 'tutorialPassphrase',
                label: 'DIY Passphrase 🎲',
              },
              {
                to: '/docs/libreboot', //this is a slug
                sidebarId: 'tutorialLibreboot',
                label: 'Libreboot BIOS',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialBitcoinNode',
            position: 'left',
            label: 'Bitcoin Node',
          },
          {
            label: 'Devices',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: '/docs/bitcoin-computer', //this is a slug
                sidebarId: 'tutorialBitcoinComputer',
                label: 'Bitcoin Computer',
              },
              {
                to: '/docs/air-gapped-computer', //this is a slug
                sidebarId: 'tutorialAirgappedComputer',
                label: 'Air-Gapped Computer',
              },
              {
                to: '/docs/nostr-signing-device', //this is a slug
                sidebarId: 'tutorialNostrSigningDevice',
                label: 'Nostr Signing Device',
              },
            ],
          },
          {
            to: 'books',
            position: 'left',
            label: 'Books',
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
              {
                href: 'https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt',
                label: 'BIP39'
              },
            ],
          },
          {
            href: 'https://github.com/btcselfcustody',
            position: 'right',
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://orangepill.app.link/btcselfcustody',
            position: 'right',
            className: "header--opa-link",
            "aria-label": "Orange Pill App",
          },
        ],
      },
      footer: {
        //style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'DIY Seed',
                to: '/docs/seed',
              },
              {
                label: 'Libreboot',
                to: '/docs/libreboot',
              },
              {
                label: 'Bitcoin Node',
                to: '/docs/bitcoin-node',
              },
            ],
          },
          {
            title: 'Devices',
            items: [
              {
                label: 'Bitcoin computer',
                href: '/docs/bitcoin-computer',
              },
              {
                label: 'Air-gapped computer',
                href: '/docs/air-gapped-computer',
              },
              {
                label: 'Nostr Signing Device',
                href: '/docs/nostr-signing-device',
              }
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
              {
                label: 'Orange Pill App',
                href: 'https://orangepill.app.link/btcselfcustody',
              }
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
    themes: [
      // ... Your other themes.
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        // @type {import("@easyops-cn/docusaurus-search-local").PluginOptions}
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
  
          // For Docs using Chinese, it is recomended to set:
          // language: ["en", "zh"],
  
          // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
          // forceIgnoreNoIndex: true,
        }),
      ],
    ],
    scripts: [
      // Umami object format.
      {
        src: 'https://cloud.umami.is/script.js',
        defer: true,
        'data-website-id': '5649cb57-bc60-498c-a7ff-2d044fc85912'
      },
    ],
};

export default config;
