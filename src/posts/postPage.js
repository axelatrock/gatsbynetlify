import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PostPage = ({ data }) => (
  <>
    <Layout>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <p>{data.markdownRemark.excerpt}</p>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
    </Layout>
    
  </>
)

export const query = graphql`
         query BlogPostQuery($slug: String!) {
           markdownRemark(fields: { slug: { eq: $slug } }) {
             excerpt
             frontmatter {
               title
               date(formatString: "DD MMMM YYYY")
             }
           }
         }
       `
export default PostPage
