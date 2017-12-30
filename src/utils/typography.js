import Typography from 'typography'
//import Wordpress2016 from 'typography-theme-wordpress-2016'
import fairyGates from 'typography-theme-fairy-gates'
/*
Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})
*/
fairyGates.overrideThemeStyles = () => ({
  'a': {
    color: 'black',
    textDecoration: 'underline',
    textShadow: 'none',
    backgroundImage: 'none'
  }
})
const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
