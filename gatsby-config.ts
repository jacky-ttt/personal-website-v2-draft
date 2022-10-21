import { GatsbyConfig, withPrefix } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tsang Sze Chun`,
    siteUrl: `https://tsangszechun.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Tsang Sze Chun",
        short_name: "Jacky Tsang",
        description: "Personal website of Tsang Sze Chun",
        start_url: "/",
        background_color: "#a0d8f1",
        theme_color: "#e07628",
        display: 'standalone',
        icon: withPrefix(`/favicon-32x32.png`),
        icons: [
          {
            src: withPrefix(`/android-chrome-192x192.png`),
            type: 'image/png',
          },
          {
            src: withPrefix(`/android-chrome-512x512.png`),
            sizes: '512x512',
            type: 'image/png',
          },
        ],

      }
    },
    'gatsby-plugin-postcss',
  ]
};

export default config;
