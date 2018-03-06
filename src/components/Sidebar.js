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
  .archive-header {
    border-bottom: 5px solid #e64946;
    display: flex;
    /* margin-top: 2.175rem; */
    margin-bottom: 0.725rem;
    h2 {
      /* margin: 0; */
      margin-bottom: 0;
    }
    .archive-browse {
      text-align: right;
      flex-grow: 1;
    }
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
      font-size: 24px;
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

  .series-select {
    font-size: 14px;
    margin-bottom: 5px;
    h4 {
      margin: 0;
    }
    .serie-container {
      color: #e64946;
      cursor: pointer;
      display: inline;
    }
    .active {
      text-decoration: underline;
    }
  }

  .selection-arrow {
    color: ${colors.gray}
  }

`

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
    this.filteredPosts = this.props.posts
    //this.lastPage = Math.ceil(this.filteredPosts.length / this.postsPerPage) - 1    
    this.state = {
      currentPage: 0,
      filter: 'all'
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
    //this.filteredPosts = this.filterPosts('web');
  }
  

  filterPosts(filter) {
    if (filter === 'all') return this.props.posts;
    return this.props.posts.filter(post => post.node.frontmatter.series.includes(filter))    
  }

  getFilteredPosts() {
    if (this.state.filter === 'all') return this.props.posts;
    return this.props.posts.filter(post => post.node.frontmatter.series.includes(this.state.filter))    
  }

  lastPage()  {
    //console.log(this.filterPosts(this.state.filter));
    const lastPage = Math.ceil(this.getFilteredPosts().length / this.postsPerPage) - 1    
    return lastPage
  }

  getPostsRange(pageId) {
    const start = this.state.currentPage*this.postsPerPage;
    return this.getFilteredPosts().slice(start, start+this.postsPerPage) 
  }

  setFilter(filter) {
    this.setState({
      filter: filter,
      currentPage: 0
    })
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
        <div className="archive-header">
          <h2>Archive</h2>
        </div>
        <div className="series-select">
          <h4>Filter by series</h4>
          <div className="serie-container">
            <span className={this.state.filter==='all'?'active':''} onClick={() => this.setFilter('all')}>ALL</span>
          </div>
          {
            this.props.series.map((serie, i) => {
              return (
                <div key={serie} className="serie-container">
                  {', '}
                  <span className={this.state.filter===serie?'active':''} onClick={() => this.setFilter(serie)}>
                    {serie}
                  </span>
                </div>
              )
            })
          }
        </div>

        <ul>
          {
            //this.getPostsRange().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)
            this.getFilteredPosts().map(({ node }) => <ArchiveItem key={node.fields.slug} node={node} />)
          }
        </ul>



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