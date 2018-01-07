import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components'

import ArchiveItem from './ArchiveItem';

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'
import { colors } from '../utils/constants';


const StyledSidebar = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0;
  h2 {
    border-bottom: 5px solid #e64946;
  }
  ul {
    list-style-type: none;
    margin-left: 0;
    display: flex;
    flex-flow: row wrap;
    li {
      flex: 1 0 100%;
    }
  }
  .archive-browse {
    @media (max-width: 800px) {
      text-align: center;
      font-size: 24px;
      padding: 1rem;
    }
  }

  @media (max-width: 800px) {
    .archive-items {
      text-align: center;
      ul {
        display: inline-block;
        text-align: left;
        li {
          margin-bottom: 10px;
        }
      }
    }
  }
/*
  .archive-item {
    margin-bottom: 0;
    font-size: 14px;
  }
  .archive-link {

  }
*/
  .selection-arrow {
    color: ${colors.gray}
  }

`
/*
style={{
  gridArea: 'side',
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
}}
*/


const navMobileStyles = {
  textAlign: 'center',
  fontSize: '24px',
  padding: '1rem'
}
const navListStyles = {
  listStyleType: 'none', 
  marginLeft: '0'
}


class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.props = props;
    this.postsPerPage = 3
    this.filter = 'all',
    this.currentPosts = this.props.posts
    this.lastPage = Math.ceil(this.currentPosts.length / this.postsPerPage) - 1    
    this.state = {
      currentPage: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    this.filterPosts = this.filterPosts.bind(this);
    this.currentPosts = this.filterPosts('web');
  }
  

  filterPosts(filter) {
    console.log(filter);
    if (filter === 'all') return this.props.posts;
    return this.props.posts.filter(post => post.node.frontmatter.series.includes(filter))
  }

  gatePostsRange(pageId) {
    const start = this.state.currentPage*this.postsPerPage;
    return this.props.posts.slice(start, start+this.postsPerPage) 
  }

  nextPage() {
    this.setState({
      currentPage: this.state.currentPage+1
    })
    // GTM event
    if (dataLayer) {
      dataLayer.push({
        event: 'archive-browse', 
        toPage: (this.state.currentPage+1)+'' // state not updated yet
      })
    }
  }
  prevPage() {
    this.setState({
      currentPage: this.state.currentPage-1
    })
    if (dataLayer) {
      dataLayer.push({
        event: 'archive-browse', 
        toPage: (this.state.currentPage-1)+'' // state not updated yet
      })
    }
  }
  render() {
    
    return (
      <StyledSidebar>
        <h2>Archive</h2>
        <div className="archive-browse" style={(this.props.layout === 'mobile') ? navMobileStyles : {}}>
          {
            (this.state.currentPage !== 0)
              ? <span onClick={this.prevPage} style={{cursor: 'pointer'}}> ⇦ </span>
              : <span className="selection-arrow"> ⇦ </span>
          }
        {this.state.currentPage+1} of {this.lastPage+1}
          {
            (this.state.currentPage < this.lastPage)
              ? <span onClick={this.nextPage} style={{cursor: 'pointer'}}> ⇨ </span>
              : <span className="selection-arrow"> ⇨ </span>
          }
        </div>

        <ul>
          {this.gatePostsRange().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)}
        </ul>
        <h2>Series</h2>
        <div className="series-select">
          <span onClick={this.filterPosts.bind(this, 'web')}>web</span>
        </div>
      </StyledSidebar>
    )
  }
}

export default Sidebar

/*
                  (this.props.currentSlug !== node.fields.slug) 
                  ? (<Link style={{ boxShadow: 'none', fontSize: '14px'}} to={node.fields.slug}>
                      <span style={{color: 'black'}}>{node.frontmatter.date} » </span>{title}
                    </Link>)
                  : <div className="archive-item" style={{ boxShadow: 'none', fontSize: '14px'}}>
                      {node.frontmatter.date} » 
                    </div>
                    <div>
                      {title}
                    </div>
*/