import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Speakers from "../components/speakers"
import Title from "../components/title"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/intervenants"}}}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    speakers {
                        name
                        role
                        picture_url
                        description
                        links {
                            target
                            text
                        }
                    }
                }
                html
            }
        }
    }
  }
`

const Intervenants = ({ location, data }) => {
    const intervenants = data.allMarkdownRemark.edges[0].node.frontmatter;

    return (
        <Layout location={location}>
            <Section>
                <Title>{intervenants.title}</Title>
                <Speakers speakers={intervenants.speakers} />
            </Section>
        </Layout>
    );
}

export default Intervenants;
