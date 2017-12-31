import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPost from '../templates/blog-post';

// import Bio from '../components/Bio'
//import Sidebar from '../components/Sidebar'
//import Header from '../components/Header'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const data = get(this, 'props.data')
    return <BlogPost {...data}/>
    /*
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    console.log(posts);
    return (
      <div style={{gridArea: 'content'}}>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}

      </div>
    )
    */
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")            
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
