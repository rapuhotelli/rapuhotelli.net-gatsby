import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import BlogPost from '../templates/blog-post';

// import Bio from '../components/Bio'
//import Sidebar from '../components/Sidebar'
//import Header from '../components/Header'
import { rhythm } from '../utils/typography'
import { colors } from '../utils/constants'

class BlogIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const data = get(this, 'props.data')
    return (
      <div>
        <h2 style={{borderBottom: `5px solid ${colors.orange}`}}>Latest post</h2>
        <BlogPost {...data}/>
      </div>
    )
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
            series      
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
