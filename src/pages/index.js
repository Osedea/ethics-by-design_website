import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Logo from "../components/logo"
import Hero from "../components/hero"
import Section from "../components/section"
import Card from "../components/card"
import Speaker from "../components/speaker"
import Sponsors from "../components/sponsors"
import Mention from "../components/mention"
import Grid from "../components/grid"
import PrefixedImage from "../components/prefixed-image"
import Pills from "../components/pills"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        filter: {frontmatter: {path: {eq: "/"}}}
        sort: {fields: frontmatter___order, order: ASC }
    ) {
        edges {
            node {
                frontmatter {
                    path
                    author
                    description
                    month
                    days
                    lieu
                    media
                    linkText
                    linkPath
                    title
                    subtitle
                    mainsponsor
                    soutien
                    speakers {
                        name
                        role
                        picture_url
                    }
                    sponsors {
                        link
                        name
                    }
                    actions {
                        label
                        text
                    }
                }
                html
            }
        }
    }
  }
`

const Index = ({ data, location}) => {
    const edition = data.allMarkdownRemark.edges[0].node
    const pourquoi = data.allMarkdownRemark.edges[1].node
    const lille = data.allMarkdownRemark.edges[2].node

    return (
        <Layout location={location}>
        <Section>
            <Pills>
                <div>{edition.frontmatter.month}</div>
                <div>{edition.frontmatter.days}</div>
            </Pills>
            <Hero
                title={(
                    <>
                        <Logo />
                        <p>{edition.frontmatter.lieu}</p>
                    </>
                )}
                media={edition.frontmatter.media}
                side={edition.frontmatter.description}
                bigSide
            />
        </Section>
        <Section>
            <Grid columns="2" rows="1">
                <Card
                    title={edition.frontmatter.title}
                    htmlContent={edition.html}
                    linkText={edition.frontmatter.linkText}
                    linkTarget={edition.frontmatter.linkPath}
                    internalLink
                />
                <Grid columns="3" rows="2">
                {edition.frontmatter.speakers.map((speaker, index) => (
                    <Speaker key={index} {...speaker} cut />
                ))}
                </Grid>
            </Grid>
        </Section>
        <Section>
            <Grid columns="2" rows="1">
                <PrefixedImage src={pourquoi.frontmatter.media} alt="Des gens discutent" />
                <Card
                    title={pourquoi.frontmatter.title}
                    htmlContent={pourquoi.html}
                    linkText={pourquoi.frontmatter.linkText}
                    linkTarget={pourquoi.frontmatter.linkPath}
                    internalLink
                />
            </Grid>
        </Section>
        <Section horizontal>
            <Grid columns="3" rows="1">
                {pourquoi.frontmatter.actions.map(({ label, text }) => (
                    <Card
                        key={label}
                        title={label}
                        content={text}
                        small
                        titleDark
                    />
                ))}
            </Grid>
        </Section>
        <Section
            dark
            vertical
        >
            <Hero
                title={(
                    <>
                        <p>{lille.frontmatter.title}</p>
                        <p>{lille.frontmatter.subtitle}</p>
                    </>
                )}
                media={lille.frontmatter.media}
                sideHtml={lille.html}
                dark
            />
            <Sponsors
                items={lille.frontmatter.sponsors}
                main={lille.frontmatter.mainsponsor}
                small
            />
            <Mention text={lille.frontmatter.soutien} />
        </Section>
        </Layout>
    )
}

export default Index;
