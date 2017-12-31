import Typography from 'typography'
//import Wordpress2016 from 'typography-theme-wordpress-2016'
import fairyGates from 'typography-theme-fairy-gates'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

/*
Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})
*/
const orange = '#e64946'
fairyGates.overrideThemeStyles = ({rhythm}) => ({
  'a': {
    color: orange,
    textDecoration: 'none',
    textShadow: 'none',
    backgroundImage: 'none'
  },
  blockquote: {
    borderLeft: `${rhythm(6 / 16)} solid ${orange}`,
  },
  [MOBILE_MEDIA_QUERY]: {
    blockquote: {
      borderLeft: `${rhythm(3 / 16)} solid ${orange}`,
    }
  }
})
const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
