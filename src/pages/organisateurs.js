import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Speaker from "../components/speaker"
import Patron from "../components/patron"
import Title from "../components/title"
import Volunteers from "../components/volunteers"
import BoxDesignersEthiques from "../components/box-designers-ethiques"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/organisateurs" }}}) {
        edges {
            node {
                frontmatter {
                    path
                    title
                    organizers {
                        name
                    }
                    contributors {
                        name
                    }
                    skillsPatrons {
                        name
                    }
                    moneyPatrons {
                        name
                    }
                }
                html
            }
        }
    }
  }
`

export default ({ data, location }) => {
    const orgData = data.allMarkdownRemark.edges[0].node.frontmatter;

    return (
        <Layout location={location}>
            <Section>
                <Title>{orgData.title}</Title>
                <div>
                    {orgData.organizers.map((speaker) => (
                        <Speaker {...speaker} />
                    ))}
                </div>
            </Section>
            <Section>
                <Title>Les Designers Ethiques</Title>
                <BoxDesignersEthiques />
            </Section>
            <Section>
                <Title>Benevoles</Title>
                <Volunteers />
            </Section>
            <Section dark>
                <Title>Avec la contribution</Title>
                {orgData.contributors.map((speaker) => (
                    <Speaker {...speaker} />
                ))}
            </Section>
            <Section>
                <Title>Mécènes de compétences</Title>
                <div>
                    {orgData.skillsPatrons.map((patron) => (
                        <Patron {...patron} />
                    ))}
                </div>
            </Section>
            <Section>
                <Title>Mécènes financiers</Title>
                <div>
                    {orgData.moneyPatrons.map((patron) => (
                        <Patron {...patron} />
                    ))}
                </div>
            </Section>
        </Layout>
    );
}
