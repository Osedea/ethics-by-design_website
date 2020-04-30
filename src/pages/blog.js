import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"

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

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => {
  console.log(edges)
  return (
    <Layout location={location}>
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

export default Blog;
