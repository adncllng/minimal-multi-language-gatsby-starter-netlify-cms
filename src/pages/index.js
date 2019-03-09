import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { node: data } = props.data.homePageData.edges[0]
  const { edges: posts } = props.data.blogPosts
  return (
    <Layout location='HOME'>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.frontmatter.seo_title}`}</title>
        <meta name="description" content={`${data.frontmatter.seo_desc}`} />
      </Helmet>
      <h1>title: {data.frontmatter.title}</h1>
      <p>Content: {data.frontmatter.text}</p>
      <p>Locale: {locale}</p>
      <ParallaxProvider>
      <Link to={ locale === "en" ? "/fr" : "/" }><p>{locale === "en" ? "fr" : "en"}</p></Link>
      <h2>BlogPosts:</h2>
      {posts.map(({node: post}) => (
        <Parallax y={[-20, 20]} tagOuter="figure">
        <div>
          <h3>Blog Post Title: {post.frontmatter.title}</h3>
          <p>Blog Post Description: {post.frontmatter.description}</p>
          <p>Blog Post Date: {post.frontmatter.date}</p>
          <Link to={post.fields.slug} title="link to blog post">Link to blog post</Link>
        </div>
        </Parallax>
      ))}
      </ParallaxProvider>
    </Layout>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  posts: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query HomeContent($locale: String) {
  homePageData: allMarkdownRemark(
    filter: {frontmatter: { pageKey: {eq: "page_home"}, locale: { eq: $locale }}}
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
      filter: {frontmatter: { pageKey: {eq: "page_blogpost"}, locale: { eq: $locale }}}
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
          }
        }
      }
    }
  }
`
