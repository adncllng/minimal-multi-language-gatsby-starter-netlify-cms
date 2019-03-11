import React from 'react'

const style = {
      maxWidth: '45vw',
      fontSize: '7vw',
      right: '0',
      color:'pink',
      position: 'fixed',
      margin:'0',
      zIndex:'20',
}

const Header = ({location}) => (
  location === 'HOME' ?
    <h1 style={style}>VERONICA MOCKLER</h1> :
    <h2>VERONICA MOCKLER</h2>
)

export default Header
