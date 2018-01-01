import React from 'react'
import Link from 'gatsby-link'
// import { Container } from 'react-responsive-grid'
import get from 'lodash/get'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
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
    const newestSlug = get(posts[0], 'node.fields.slug');
    const currentSlug = (location.pathname === '/') ? newestSlug : location.pathname;

    /*
    if (dataLayer) {
      dataLayer.push({
        event: 'PageView',
        path: location.pathname,
        title: metaData.title
      })
    }
    */

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Layout>
        <Header metaData={metaData} />
        <Sidebar posts={posts} currentSlug={currentSlug} />
        {children()}
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

/*
Header
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2FWSDQ');</script>
<!-- End Google Tag Manager -->

Body
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2FWSDQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
*/