import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Speaker from "../components/speaker"
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

export default ({ location, data }) => {
    console.log('intervenants', data);
    const intervenants = data.allMarkdownRemark.edges[0].node.frontmatter;

    return (
        <Layout location={location}>
            <Section>
                <Title>{intervenants.title}</Title>
                <div>
                    {intervenants.speakers.map((speaker) => (
                        <Speaker {...speaker} />
                    ))}
                </div>
            </Section>
        </Layout>
    );
}
