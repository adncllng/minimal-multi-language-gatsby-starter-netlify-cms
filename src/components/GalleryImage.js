import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import posed, { PoseGroup } from "react-pose";
const WIDTH = "250";
const HEIGHT = "187.5";
const MARGIN = "5";
const imageBoxStyle = {
  width: WIDTH + "px",
  margin: MARGIN + "px"
};
const Box = posed.div({
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 0.8
  }
});
const ToLeft = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 500,
    color:'red',
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 150 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 150 }
  }
});
const ToRight = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 500,
    color:'red',
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 150 },
      default: { duration: 300 }
    }
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 150 }
  }
});

class GalleryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDescription: false };
  }

  // function over(e) {
  //   e.target.style.opacity = "1";
  // }
  // function out(e) {
  //   e.target.style.opacity = "0";
  // }
  onMouseOver = () => {
    console.log("mouseover");
    this.setState({ showDescription: true });
  };
  onMouseOut = () => {
    console.log("mouseout");
    this.setState({ showDescription: false });
  };
  render() {
    const { showDescription } = this.state;
    return (
      <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <Link to={this.props.post.fields.slug} title="link to blog post">
          <Box
            style={{
              zIndex: "100",
              justifyContent: 'space-between',
              overflow: 'hidden',
              backgroundColor: "white",
              width: WIDTH + "px",
              height: HEIGHT + "px",
              margin: MARGIN + "px",
              position: "absolute",
              display:'flex'
            }}
            pose={showDescription ? "visible" : "hidden"}
          >
          <ToLeft style={{height:'50px'}} pose={showDescription ? "enter" : "exit"}>
            <p>
              {this.props.post.frontmatter.title}
            </p>
          </ToLeft>
            <ToRight  style={{height:'50px', alignSelf:'flexEnd'}} pose={showDescription ? "enter" : "exit"}>
              <p style={{alignSelf:'flex-end'}} >
                {this.props.post.frontmatter.description}
              </p>
            </ToRight>
          </Box>
          <div style={imageBoxStyle}>
            <Img
              fluid={this.props.post.frontmatter.image.childImageSharp.fluid}
            />
          </div>
        </Link>
      </div>
    );
  }
}

export default GalleryImage;
