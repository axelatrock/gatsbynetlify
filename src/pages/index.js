import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import PostListing from '../components/posts/postListing'

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>{data.site.siteMetadata.description}</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (<PostListing key={node.id}post={node}/>))}
  </Layout>
)


export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }){
      edges {
        node {
          id
          html
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString:"DD MM YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
