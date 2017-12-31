import React from 'react'

class Footer extends React.Component {

  render() {
    return (
      <div
        style={{
          gridArea: 'footer',
          display: 'flex',
          padding: '1rem',
          borderTop: '5px solid #e64946'
        }}
      >
      &copy; rapuhotelli.net
      </div>
    )
  }

}

export default Footer