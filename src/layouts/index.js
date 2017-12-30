import React from 'react'
import Link from 'gatsby-link'
// import { Container } from 'react-responsive-grid'
import get from 'lodash/get';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { rhythm, scale } from '../utils/typography'

import '../global-css/layout.css';

const Layout = (props) => (
  <div className="container" style={{
    maxWidth: rhythm(34), // 24
    // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    paddingTop: '0',
    boxShadow: `0 0 10px rgba(50, 50, 50, 0.17)`,
    backgroundColor: 'white',
    margin: '0 auto'
  }}>
    {props.children}
  </div>
)

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const metaData = get(this, 'props.data.site.siteMetadata')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Layout>
        <Header metaData={metaData} />
        <Sidebar posts={posts} />
        {children()}
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
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
      }
    }
  }
}
`