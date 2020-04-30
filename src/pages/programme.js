import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import Address from "../components/address"
import JourProgramme from "../components/jour-programme"
import NumberedList from "../components/numbered-list"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/programme" }}}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    programmeJeudi {
                        name
                    }
                    programmeVendredi {
                        name
                    }
                }
                html
            }
        }
    }
  }
`

const Programme = ({ location, data }) => {
    const programmeData = data.allMarkdownRemark.edges[0].node.frontmatter;
    console.log(programmeData);

    return (
        <Layout location={location}>
            <Section>
                <Title />
                <NumberedList />
            </Section>
            <Section>
                <Title>Evènement ouvert au public</Title>
                <Hero />
            </Section>
            <Section>
                <JourProgramme talks={programmeData.programmeJeudi} />
            </Section>
            <Section>
                <JourProgramme talks={programmeData.programmeVendredi} />
            </Section>
            <Section dark>
                <Hero />
                <Address />
            </Section>
        </Layout>
    );
}

export default Programme;
