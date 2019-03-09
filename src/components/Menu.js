import React from 'react'

const style = {
      maxWidth: '45vw',
      fontSize: '7vw',
      right: '0',
      position: 'fixed',
      margin:'0'
}

const Menu = ({location}) => (
  location === 'HOME' ?
    <h1 style={style}>VERONICA MOCKLER</h1> :
    <h2>VERONICA MOCKLER</h2>
)

export default Menu
