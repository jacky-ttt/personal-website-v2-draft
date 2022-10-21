import type { GatsbyConfig } from "gatsby";
import websiteConfig from "./src/config/config"

const config: GatsbyConfig = {
  siteMetadata: {
    title: websiteConfig.siteTitle,
    siteUrl: websiteConfig.siteUrl
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
        name: websiteConfig.siteTitle,
        short_name: websiteConfig.siteTitleShort,
        description: websiteConfig.siteDescription,
        start_url: "/",
        background_color: websiteConfig.backgroundColor,
        theme_color: websiteConfig.themeColor,
        display: 'standalone',
        icon: "src/static/logo.jpg",
      }
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-offline",
  ]
};

export default config;
