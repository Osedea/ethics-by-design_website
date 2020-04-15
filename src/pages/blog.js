import React from "react"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            author
          }
        }
      }
    }
  }
`

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Title />
        <ArticlesList items={edges} />
      </Section>
    </Layout>
  )
}
