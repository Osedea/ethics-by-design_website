/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Ethics by Design - 2020",
    tabs: [
      {
        label: "A propos",
        url: "/a-propos",
      },
      {
        label: "Programme",
        url: "/programme",
      },
      {
        label: "Intervenants",
        url: "/intervenants",
      },
      {
        label: "Organisateurs",
        url: "/organisateurs",
      },
      {
        label: "Blog",
        url: "/blog",
      },
      {
        label: "Billetterie",
        url: "/billeterie",
        highlighted: true,
      },
    ],
    social: [
      {
        type: "slack",
        url: "",
        icon: "/assets/slack.svg",
      },
      {
        type: "linkedin",
        url: "",
        icon: "/assets/linkedin.svg",
      },
      {
        type: "twitter",
        url: "",
        icon: "/assets/twitter.svg",
      },
      {
        type: "mastondon",
        url: "",
        icon: "/assets/mastondon.svg",
      },
    ],
  },
  plugins: [],
}
