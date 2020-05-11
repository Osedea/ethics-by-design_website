import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Inset from "../components/inset"
import Grid from "../components/grid"
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
                        role
                        picture_url
                        description
                        links {
                            text
                            target
                        }
                    }
                    contributors {
                        name
                        role
                        picture_url
                        description
                        links {
                            text
                            target
                        }
                    }
                    volunteers {
                        name
                    }
                    skillsPatrons {
                        name
                        picture_url
                        description
                        links {
                            text
                            target
                        }
                    }
                    moneyPatrons {
                        name
                        picture_url
                        description
                        links {
                            text
                            target
                        }
                    }
                }
                html
            }
        }
    }
  }
`

const Organisateurs = ({ data, location }) => {
    const orgData = data.allMarkdownRemark.edges[0].node;

    return (
        <Layout location={location}>
            <Section inset>
                <Title>{orgData.frontmatter.title}</Title>
                <Grid columns={3} offsetLeft>
                    {orgData.frontmatter.organizers.map((speaker) => (
                        <Speaker key={speaker.name} {...speaker} />
                    ))}
                </Grid>
            </Section>
            <Section>
                <Title>Les Designers Ethiques</Title>
                <Inset>
                    <BoxDesignersEthiques contentHtml={orgData.html} />
                </Inset>
            </Section>
            <Section>
                <Title>Bénévoles</Title>
                <Volunteers volunteers={orgData.frontmatter.volunteers} />
            </Section>
            <Section dark>
                <Title className="light">Avec la contribution</Title>
                <Grid columns={3} offsetLeft>
                    {orgData.frontmatter.contributors.map((speaker) => (
                        <Speaker key={speaker.name} {...speaker} dark />
                    ))}
                </Grid>
            </Section>
            <Section>
                <Title>Mécènes de compétences</Title>
                <Grid columns={3}>
                    {orgData.frontmatter.skillsPatrons.map((patron) => (
                        <Patron key={patron.name} {...patron} />
                    ))}
                </Grid>
            </Section>
            <Section>
                <Title>Mécènes financiers</Title>
                <Grid columns={3}>
                    {orgData.frontmatter.moneyPatrons.map((patron) => (
                        <Patron key={patron.name} {...patron} />
                    ))}
                </Grid>
            </Section>
        </Layout>
    );
}

export default Organisateurs;
