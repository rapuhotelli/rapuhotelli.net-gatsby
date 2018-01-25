import Typography from 'typography'
//import Wordpress2016 from 'typography-theme-wordpress-2016'
//import fairyGates from 'typography-theme-fairy-gates'
import fairyGates from './typography-fairy'
//import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import { colors } from './constants';

const orange = colors.orange
const gray = colors.gray

fairyGates.overrideThemeStyles = ({rhythm}, options) => {
  return {
    'a': {
      color: orange,
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none'
    },
    blockquote: {
      fontSize: '16px',
      lineHeight: '1rem',
      borderLeft: `${rhythm(6 / 16)} solid ${orange}`,
    },
    ['@media only screen and (max-width:800px)']: {
      blockquote: {
        borderLeft: `${rhythm(3 / 16)} solid ${orange}`,
      }
    }
  }
}
const typography = new Typography(fairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}
export default typography

