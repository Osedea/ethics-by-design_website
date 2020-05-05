import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/global.css"
import layoutStyle from "./layout.module.css"

export default function Layout(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              type
              url
              icon
            }
          }
        }
        allMarkdownRemark(filter: {frontmatter: {path: {eq: "menu" }}}) {
            edges {
                node {
                    frontmatter {
                        tabs {
                            label
                            url
                            highlighted
                        }
                    }
                }
            }
        }
      }
    `
  )

  return (
    <div className={layoutStyle.layout}>
      <Header pages={data.allMarkdownRemark.edges[0].node.frontmatter.tabs} location={props.location} />
      {props.children}
      <Footer networks={data.site.siteMetadata.social} />
    </div>
  )
}
