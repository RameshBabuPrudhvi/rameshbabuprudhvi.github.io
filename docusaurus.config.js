// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwlLight");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ramesh Babu",
  tagline: "Manage your server without fighting the terminal",
  url: "https://rameshbabuprudhvi.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "rameshbabuprudhvi", // Usually your GitHub org/user name.
  projectName: "rameshbabuprudhvi.github.io", // Usually your repo name.
  stylesheets: [
    // "https://fonts.googleapis.com/css2?family=Inter:wght@583&display=block",
    // "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=block",
  ],
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/tree/main",
          breadcrumbs: false,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/RameshBabuPrudhvi/rameshbabuprudhvi.github.io/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "product",
    //     path: "product",
    //     routeBasePath: "product",
    //     breadcrumbs: false,
    //   },
    // ],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "templates",
    //     path: "templates",
    //     routeBasePath: "templates",
    //     breadcrumbs: false,
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
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
          { to: "/docs", label: "Docs", position: "left" },         
          { to: "/blog", label: "Blog", position: "right" },
       
		  {
            href: 'https://github.com/RameshBabuPrudhvi',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          }
        ],
      },
      algolia: {
        appId: "24JIZLY7SV",
        apiKey: "e50516a0453321f2fead770bbabe4f2e",
        indexName: "website",
        contextualSearch: false,
        searchPagePath: false,
      },
	 footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs',
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
        additionalLanguages: ['java', 'json','yaml'],
      },
    }),
};

module.exports = config;
