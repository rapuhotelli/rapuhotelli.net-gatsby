import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.postsPerPage = 2
    this.state = {
      currentPage: 0
    }
  }

  gatePostsRange(pageId) {
    const start = this.state.currentPage*this.postsPerPage;
    return this.props.posts.slice(start, start+this.postsPerPage) 
  }

  render() {
    return (
      <div
        style={{
          gridArea: 'side',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: rhythm(2.5),
        }}
      >
        <h2>Recent posts</h2>
        <ul style={{listStyleType: 'none', marginLeft: '0'}}>
        {this.props.posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug} style={{marginBottom: '0'}}>
              <Link style={{ boxShadow: 'none', fontSize: '14px', textDecoration: 'none' }} to={node.fields.slug}>
                {node.frontmatter.date} » {title}
              </Link>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default Sidebar
