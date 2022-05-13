// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello! I am Ramesh Babu',
  tagline: 'Open source contributor | Mentor | Automation Architect',
  url: 'https://rameshbabuprudhvi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'rameshbabuprudhvi',
  projectName: 'rameshbabuprudhvi.github.io',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/blog/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
         sitemap: {
           changefreq: 'weekly',
           priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
       id: 'star-the-repo',
       content:
         '⭐ Don\'t forget to Star the repo on 👉 <a target="_blank" rel="noopener noreferrer" href="https://github.com/selcukes/selcukes-java">GitHub</a> ⭐',
         backgroundColor: '#ffb600',
         textColor: '#000000',
         isCloseable: false,
      },
      navbar: {
        title: 'Ramesh Babu Prudhvi',
        logo: {
          alt: 'Ramesh Babu Prudhvi',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/RameshBabuPrudhvi',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'Getting started',
                to: '/docs/intro',
              },
              {
                label: 'Selcukes',
                to: 'https://github.com/selcukes',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://in.linkedin.com/in/rameshbabuprudhvi',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/amrameshbabu',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RameshBabuPrudhvi',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ramesh Babu Prudhvi. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'json'],
      },
    }),
};

module.exports = config;
