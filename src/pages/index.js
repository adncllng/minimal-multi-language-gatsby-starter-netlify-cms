import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Img from 'gatsby-image'

const IndexPage = ({ pageContext: { locale }, ...props }) => {
  const { node: data } = props.data.homePageData.edges[0]
  const { edges: posts } = props.data.blogPosts
  console.log(posts)
  return (
    <Layout location='HOME' locale={locale}>
      <Helmet titleTemplate="%s | Blog">
        <title>{`${data.frontmatter.seo_title}`}</title>
        <meta name="description" content={`${data.frontmatter.seo_desc}`} />
      </Helmet>
      <h1>title: {data.frontmatter.title}</h1>
      <p>Content: {data.frontmatter.text}</p>
      <p>Locale: {locale}</p>
      <ParallaxProvider>
      <Link to={locale === "en" ? "/fr" : "/" }><p>{locale === "en" ? "fr" : "en"}</p></Link>
      <Link to={locale === "en" ? "/fr/about" : "/about" }><p>{locale === "en" ? "fr" : "en"}</p></Link>
      <h2>BlogPosts:</h2>
      {posts.map(({node: post}) => (
        <div>
        <Parallax y={[-20, 20]} tagOuter="figure">
          <h3>Blog Post Title: {post.frontmatter.title}</h3>
                </Parallax>
                  <Parallax y={[100, -100]} tagOuter="figure">
          <p>Blog Post Description: {post.frontmatter.description}</p>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid}/>

            </Parallax>
          <p>Blog Post Date: {post.frontmatter.date}</p>
          <Link to={post.fields.slug} title="link to blog post">Link to blog post</Link>
        </div>

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
`
