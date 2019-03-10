import React from 'react'
import { Link} from 'gatsby'
import ReactDOM from 'react-dom';

const style = (mobile) => {
  return mobile ? {}: {
        transformOrigin: 'top left',
        transform: 'rotate(-90deg) translateX(-100%)',
        width:'100vh',
        display:'flex',
        justifyContent:'space-around',
  }
}
// const Menu = ({mobile, location, locale, stuck}) => (
//   <div style={style(mobile, stuck)}>
//     <Link to={locale === "en" ? "/about" : "/fr/about" }><p>{locale === "en" ? "about" : "a propos"}</p></Link>
//     <Link to={locale === "en" ? "/" : "/fr" }><p>{locale === "en" ? "home" : "chez nous"}</p></Link>
//   </div>
// )

class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.someRefName = React.createRef();

}
onScroll = () => {
let offsetTop = this.someRefName.current.offsetTop;
console.log(offsetTop)
}

componentDidMount() {
   window.addEventListener('scroll', this.onScroll);
 }
 componentWillUnmount() {
   window.removeEventListener('scroll', this.onScroll);
 }

  render() {
    return (
      <div ref={this.someRefName} >
        <h1>Hello, world!</h1>
        <h2>It is.</h2>
      </div>
    );
  }
}

export default Menu
