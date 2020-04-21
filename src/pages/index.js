import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Card from "../components/card"
import Speaker from "../components/speaker"
import Sponsors from "../components/sponsors"
import Mention from "../components/mention"
import Grid from "../components/grid"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "data" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              speakers {
                name
                role
              }
              sponsors {
                name
                link
              }
              description
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  const edition = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Card
          title={edition.title}
          content={edition.description}
          buttonText={"Programme"}
        />
        <Grid columns="3" rows="2">
          {edition.speakers.map((speaker, index) => (
            <Speaker key={index} {...speaker} cut />
          ))}
        </Grid>
      </Section>
      <Section>
        <img />
        <Card />
      </Section>
      <Section>
        <Card small titleDark />
        <Card small titleDark />
        <Card small titleDark />
      </Section>
      <Section dark vertical>
        <Hero />
        <Sponsors items={edition.sponsors} />
        <Mention text={"Avec le soutien de la CNIL et la Fing"} />
      </Section>
    </Layout>
  )
}
