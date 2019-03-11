import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import GalleryImage from './GalleryImage'

const style = mobile => {};
const imageBoxStyle = { width: "250px" };

const Gallery = ({posts}) => {
  return (
    <div style={{ display: "flex", width: "90vw", flexWrap: "wrap",justifyContent: 'flex-end', float:'right' }}>
      {posts && posts.map(({ node: post }) => (
        <GalleryImage post={post}/>
      ))}
    </div>
  );
};

export default Gallery;
