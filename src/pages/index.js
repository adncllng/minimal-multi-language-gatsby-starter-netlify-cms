import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "../components/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Img from "gatsby-image";
import Gallery from '../components/Gallery'
const imageBoxStyle = { width: "250px" };
const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { node: data } = props.data.homePageData.edges[0];
  const { edges: posts } = props.data.blogPosts;
  console.log(posts);
  return (
    <Layout location="HOME" locale={locale}>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.frontmatter.seo_title}`}</title>
        <meta name="description" content={`${data.frontmatter.seo_desc}`} />
      </Helmet>
      <Gallery posts={posts} />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  posts: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query HomeContent($locale: String) {
    homePageData: allMarkdownRemark(
      filter: {
        frontmatter: { pageKey: { eq: "page_home" }, locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            pageKey
            seo_title
            seo_desc
            title
            text
          }
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: {
        frontmatter: {
          pageKey: { eq: "page_blogpost" }
          locale: { eq: $locale }
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
            image {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
