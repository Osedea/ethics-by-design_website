import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import Address from "../components/address"
import JourProgramme from "../components/jour-programme"
import NumberedList from "../components/numbered-list"

const CONTENT_TYPE = {
    EVENT: 'event',
    PROGRAMMES: 'programmes',
    PLACE: 'lieu',
};

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
                    titleComplet
                    order
                    type
                    media
                    description
                    programmes {
                        jourTitle
                        ouvertureHeure
                        ouvertureTitle
                        horaire {
                            heure
                            title
                            numero
                            type
                            categorie
                            speaker {
                                name
                                role
                            }
                            salle
                        }
                        fermetureHeure
                        fermetureTitle
                    }
                }
                html
            }
        }
    }
  }
`

const Programme = ({ location, data }) => {

    // Page title
    let title = '';
    // Array of events with full description
    const events = [];
    // Array of programmes days
    let programmes = [];
    let place = null;

    data.allMarkdownRemark.edges.forEach((edge) => {
        if (edge.node.frontmatter.type === CONTENT_TYPE.PROGRAMMES) {
            title = edge.node.frontmatter.title;
            programmes = edge.node.frontmatter.programmes;
        } else if (edge.node.frontmatter.type === CONTENT_TYPE.EVENT) {
            events.push({
                order: edge.node.frontmatter.order,
                title: edge.node.frontmatter.titleComplet,
                text: edge.node.html
            });
        } else if (edge.node.frontmatter.type === CONTENT_TYPE.PLACE) {
            place = edge.node;
        }
    });

    return (
        <Layout location={location}>
            <Section>
                <Title>{title}</Title>
                <NumberedList items={events.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))} />
            </Section>
            <Section>
                {programmes.map((programme) => <JourProgramme key={programme.jourTitle} programme={programme} />)}
            </Section>
            <Section>
            </Section>
            <Section dark>
                <Hero
                    media={place.frontmatter.media}
                    sideTitle={place.frontmatter.title}
                    side={place.frontmatter.description}
                    dark
                />
                <address className="light" dangerouslySetInnerHTML={{ __html: place.html }} />
            </Section>
        </Layout>
    );
}

export default Programme;
