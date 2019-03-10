import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const AboutPage = ({ pageContext: { locale }, ...props }) => {
  const { node: data } = props.data.about.edges[0]
  const {frontmatter} = data

  console.log(frontmatter)

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h1>{frontmatter.pageKey}</h1>
      <h1>{frontmatter.title}</h1>
      <p>
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf
        asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf
        asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf
        asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf
        asdfasdf asdfasdf asdfasdff asdfasdf asdfasdf asdfasdf asdfasdf asdfasdff
        asdfasdf asdfasdf asdfasdf
      </p>
    </div>

  )
}

export default AboutPage

export const pageQuery = graphql`
query aboutContent($locale: String) {
    about: allMarkdownRemark(
      filter: {frontmatter: { pageKey: {eq: "page_about"}, locale: { eq: $locale }}}
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
}
`
