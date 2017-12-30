import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

// import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'


class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          gridArea: 'header',
          display: 'flex',
          flexFlow: 'row wrap',
          padding: '1rem 1rem 0 1rem'
        }}
      >
      
        <div style={{flex: '1 1 50%'}} >
          <h1 style={{marginTop: '0', flexBasis: '100%'}}>{this.props.metaData.title}</h1>
          <p>{this.props.metaData.description}</p>
        </div>

        <div style={{flex: '1 1 50%', textAlign: 'right', display: 'flex'}}>
          <div style={{padding: '1rem', fontSize: '14px'}}>
            <p>yours truly calls himself a web developer and an unqualified pseudointellectual pubphilosopher</p>
          </div>
          <div>
            <div style={{boxShadow: 'black 1px 1px 5px', width: '100px', height: '100px'}}>
              <img style={{position: 'relative', top: '5px', left: '5px', transform: 'rotate(5deg)'}} src="http://place.manatee.lc/100/100.jpg"></img>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Header
