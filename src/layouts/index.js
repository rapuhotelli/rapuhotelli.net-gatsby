import React from 'react'
import Link from 'gatsby-link'
// import { Container } from 'react-responsive-grid'
import get from 'lodash/get'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { rhythm, scale } from '../utils/typography'
import debounce from 'lodash/debounce'
import styled from 'styled-components'

import '../global-css/layout.css';
/*
const Layout = (props) => (
  <div className="container" style={{
    maxWidth: '1080px', //rhythm(34), // 24
    // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    paddingTop: '0',
    boxShadow: `0 0 10px rgba(50, 50, 50, 0.17)`,
    backgroundColor: 'white',
    margin: '0 auto'
  }}>
    {props.children}
  </div>
)
*/
const Layout = styled.div`
  max-width: 1080px;
  padding-top: 0;
  box-shadow: 0 0 10px rgba(50, 50, 50, 0.17);
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    "header header"
    "content side"
    "footer footer";
  grid-template-columns: 7fr 4fr;
  grid-template-rows: 1fr auto;
  background-color: white;

  @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-areas:
      "header"
      "content"
      "side"
      "footer";
  }

`


class Template extends React.Component {
  
  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this);
    this.state = {
      layout: 'desktop'
    }
    window.addEventListener('resize', debounce(this.onResize, 300))
  }

  onResize() {
    this.setState({
      layout: (window.innerWidth < 800) ? 'mobile' : 'desktop'
    }) 
  }

  render() {
    const { location, children } = this.props
    const metaData = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const series = get(this, 'props.data.allMarkdownRemark.series')
    const newestSlug = get(posts[0], 'node.fields.slug');
    const currentSlug = (location.pathname === '/') ? newestSlug : location.pathname;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Layout>
        <Header metaData={metaData} />
        <Sidebar series={series} layout={this.state.layout} posts={posts} currentSlug={currentSlug} />
        <div style={{padding: '0 1rem 1rem 1rem'}}>
          {children()}
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    series: distinct(field: frontmatter___series)
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
          series
        }
      }
    }
  }
  
}
`

/*
{
	allMarkdownRemark {
	  distinct(field: frontmatter___series)
	}
}

*/