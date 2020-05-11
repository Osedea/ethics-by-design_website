import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"
import ContentWrapper from "../components/content-wrapper"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/a-propos"}}},
        sort: {fields: frontmatter___order, order: ASC }
    ) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    order
                }
                html
            }
        }
    }
  }
`

const APropos = ({ location, data }) => {
    return (
        <Layout location={location}>
            {data.allMarkdownRemark.edges.map((edge) => (
                <Section key={edge.node.frontmatter.title}>
                    <Title>{edge.node.frontmatter.title}</Title>
                    <ContentWrapper content={edge.node.html} />
                </Section>
            ))}
        </Layout>
    );
}

export default APropos;
