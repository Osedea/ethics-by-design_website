import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

export default function Layout(props) {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                tabs {
                  label
                  url
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
    return (
        <div>
            <Header pages={data.site.siteMetadata.tabs} />
            {props.children}
            <Footer networks={data.site.siteMetadata.social} />
        </div>
    )
};
