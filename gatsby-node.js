const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    query {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query. ${results.errors}`)
    return
  }

  // filter out books, we don't make pages for those
  pages = results.data.allMarkdownRemark.edges.filter(edge => {
    if (edge.node.frontmatter.templateKey === "book") {
      return false
    } else {
      return edge
    }
  })
console.log(pages)
  pages.forEach(edge => {
    const pathName = edge.node.frontmatter.path || edge.node.fields.slug;
    const component = path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`);
    const id = edge.node.id
    createPage({
      path: pathName,
      component,
      context: {
        id: id,
      },
    })
  })
}

const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  fmImagesToRelative(node);
}
