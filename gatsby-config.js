module.exports = {
  siteMetadata: {
    title: `Wisam Al Abed`,
    description: `Wisam Al Abed personal site v2`,
    author: `@wisamalabed`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wisamalabed-personal-site-v2`,
        short_name: `Wisam Alabed`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    }
  ]
};
