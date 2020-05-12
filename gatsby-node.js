const path = require(`path`)

// Log out information after a build is done
module.exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/blog-post.js`)
  const result = await graphql(`
    query {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {path: {regex: "/blog.*/"}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        date(formatString: "YYYY-MM-DD")
                        title
                        author
                        toReadAlso {
                            path
                            title
                            author
                        }
                    }
                    html
                }
            }
        }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `${edge.node.frontmatter.path}`,
      component: blogPostTemplate,
      context: {
        ...edge.node,
      },
    })
  })
}
