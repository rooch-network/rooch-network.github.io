// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rooch Network',
  tagline: 'Rooch Network',
  url: 'https://rooch-network.github.io',
  baseUrl: baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'rooch-network', // Usually your GitHub org/user name.
  projectName: 'rooch-network.github.io', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      zh: {
        label: '中文',
        htmlLang: 'zh-CN',
      },
    },
  },
  plugins: [
    '@cmfcmf/docusaurus-search-local',
    '@docusaurus/plugin-ideal-image'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true, 
          // Please change this to your repo.
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            let link
            if (locale === 'en') {
              link = `https://github.com/rooch-network/rooch-network.github.io/edit/main/${versionDocsDirPath}/${docPath}`
            } else {
              link = `https://github.com/rooch-network/rooch-network.github.io/edit/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`
            }
            return link
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rooch-network/rooch-network.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Rooch network',
          src: '/img/logo-original2.svg',
          srcDark: '/img/logo-white2.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Documents',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/rooch-network/',
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
                label: 'Documents',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/rooch-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rooch Network. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: (() => {
          var theme = require('prism-react-renderer/themes/nightOwl');
          // Add additional rule to nightowl theme in order to change
          // the color of YAML keys (to be different than values).
          // There weren't many Prism themes that differentiated
          // YAML keys and values. See link:
          // https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
          theme.styles.push({
            types: ["atrule"],
            style: {
              // color chosen from the nightowl theme palette
              // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/nightOwl.js#L83
              color: "rgb(255, 203, 139)"
            }
          });
          return theme
        })(),
      },
    }),
};

module.exports = config;
