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
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/a-propos"}}}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                }
                html
            }
        }
    }
  }
`

const APropos = ({ location, data }) => {
    console.log('a propos', data);
    const aPropos = data.allMarkdownRemark.edges[0].node.frontmatter.title

    return (
        <Layout location={location}>
            <Title>{aPropos.title}</Title>
            <Section>
                <Title />
            </Section>
            <Section>
                <Title />
            </Section>
        </Layout>
    );
}

export default APropos;
