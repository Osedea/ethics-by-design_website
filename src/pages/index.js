import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Card from "../components/card"
import Speaker from "../components/speaker"
import Sponsors from "../components/sponsors"

const speakers = [
]

export default ({ data }) => (
    <Layout>
        <Section>
            <Hero />
        </Section>
        <Section>
            <Card />
            <div>
                {speakers.map((speaker) => (
                    <Speaker {...speaker} cut />
                ))}
            </div>
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
        <Section dark>
            <Hero />
            <Sponsors sponsors={[]} />
        </Section>
    </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
