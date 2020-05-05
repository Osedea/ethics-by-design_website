import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/mentions-legales"}}}) {
        edges {
            node {
                frontmatter {
                    path
                    author
                    description
                    title
                }
                html
            }
        }
    }
  }
`

const MentionsLegales = ({ data, location }) => {
    const metadata = data.allMarkdownRemark.edges[0].node.frontmatter;
    const content = data.allMarkdownRemark.edges[0].node.html

    return (
        <Layout location={location}>
            <Section>
                <Title>{metadata.title}</Title>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </Section>
        </Layout>
    );
}

export default MentionsLegales;
