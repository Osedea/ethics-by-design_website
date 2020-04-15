import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import layoutStyle from "./layout.module.css"

export default function Layout(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            tabs {
              label
              url
              highlighted
            }
            social {
              type
              url
              icon
            }
          }
        }
      }
    `
  )

  console.log(data.site.siteMetadata.tabs)
  return (
    <div className={layoutStyle.layout}>
      <Header pages={data.site.siteMetadata.tabs} />
      {props.children}
      <Footer networks={data.site.siteMetadata.social} />
    </div>
  )
}
