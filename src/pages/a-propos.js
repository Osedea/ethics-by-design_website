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
    const aPropos = data.allMarkdownRemark.edges[0].node.frontmatter;
    const aProposContent = data.allMarkdownRemark.edges[0].node.html;

    return (
        <Layout location={location}>
            <Section>
                <Title>{aPropos.title}</Title>
                <ContentWrapper content={aProposContent} />
            </Section>
            <Section>
                <Title />
            </Section>
        </Layout>
    );
}

export default APropos;
