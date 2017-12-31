import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {


  render() {
    console.log(this.props);
    let post = get(this.props, 'data.markdownRemark')
    if (!post) {
      post = get(this.props, 'allMarkdownRemark.edges[0].node')
    }
    console.log(post);
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{padding: '1rem'}}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            //marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
