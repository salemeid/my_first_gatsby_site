import * as React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
    return(
        <Layout pageTitle="My Blog posts">{
           
                data.allMdx.nodes.map(node=>(
                    <article>
                        <h1 key={node.id}>{node.frontmatter.title}</h1> 
                        <p>posted:{node.frontmatter.date} </p>
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                    </article>        
                ))
        }
        </Layout>
    )
}


export const query = graphql`
    query{
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              frontmatter {
                title
                date(formatString: "YYYYMMDD")
              }
              body
              id
            }
          }
    }
`


export default BlogPage