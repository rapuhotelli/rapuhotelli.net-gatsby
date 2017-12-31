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
    this.postsPerPage = 3
    this.lastPage = Math.ceil(props.posts.length / this.postsPerPage) - 1
    this.state = {
      currentPage: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  gatePostsRange(pageId) {
    const start = this.state.currentPage*this.postsPerPage;
    return this.props.posts.slice(start, start+this.postsPerPage) 
  }

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage+1
    })
  }
  prevPage() {
    this.setState({
      currentPage: this.state.currentPage-1
    })
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
        <h2 style={{
          borderBottom: '5px solid #e64946',
          marginRight: '1rem'
        }}>Archive</h2>
        <div>
          {
            (this.state.currentPage !== 0)
              ? <span onClick={this.prevPage} style={{cursor: 'pointer'}}> ⇦ </span>
              : <span style={{color: 'gray'}}> ⇦ </span>
          }
        {this.state.currentPage+1} of {this.lastPage+1}
          {
            (this.state.currentPage < this.lastPage)
              ? <span onClick={this.nextPage} style={{cursor: 'pointer'}}> ⇨ </span>
              : <span style={{color: 'gray'}}> ⇨ </span>
          }
        </div>
        <ul style={{listStyleType: 'none', marginLeft: '0'}}>
        {this.gatePostsRange().map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <li key={node.fields.slug} style={{marginBottom: '0'}}>
              { 
                  (this.props.currentSlug !== node.fields.slug) 
                  ? (<Link style={{ boxShadow: 'none', fontSize: '14px'}} to={node.fields.slug}>
                      {node.frontmatter.date} » {title}
                    </Link>)
                  : <span style={{ boxShadow: 'none', fontSize: '14px'}}>{node.frontmatter.date} » {title}</span>
                  //`${node.frontmatter.date} » ${title}`
              }
            </li>
          )
        })}
        <li style={{fontSize: '14px'}}>
        </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
