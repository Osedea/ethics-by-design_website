/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/ethics-by-design_website",
  siteMetadata: {
    title: "Ethics by Design - 2020",
    social: [
      {
        type: "slack",
        url: "https://slack.designersethiques.org",
        icon: "/assets/slack.svg",
      },
      {
        type: "linkedin",
        url: "https://www.linkedin.com/company/designers-ethiques/",
        icon: "/assets/linkedin.svg",
      },
      {
        type: "twitter",
        url: "https://twitter.com/designethique",
        icon: "/assets/twitter.svg",
      },
      {
        type: "mastondon",
        url: "https://mastodon.design/@designersethiques",
        icon: "/assets/mastondon.svg",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/data/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
        ignore: `**/*`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
