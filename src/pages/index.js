import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 3rem 6rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1rem 4rem 1rem;
  }

  .title {
    text-align: center;
  }

  .logo {
    width: 60px;
    height: 70px;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`

const IndexPage = ({
  data: {
    allMdx: { edges: postEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        
        <h1 className="title"><svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg" className="logo"><g fill-rule="nonzero" fill="none"><path d="M60 35.564c-3.683-1.014-6.282-4.28-6.427-8.073h-.014v-2.608h-3.071a3.923 3.923 0 0 1-2.549 3.604 3.975 3.975 0 0 1-2.705 2.79V45.9c0 8.36-6.825 15.138-15.244 15.138S14.746 54.26 14.746 45.9V33.094a3.92 3.92 0 0 1-3.307-3.805c0-.26.028-.518.083-.77a3.834 3.834 0 0 1-1.22-2.779c.001-.289.037-.577.105-.857H6.44v2.606h-.015c-.143 3.794-2.74 7.06-6.424 8.075 3.802 1.045 6.436 4.48 6.439 8.398 0 .109-.012.216-.017.322h.017v2.442c.131 12.828 10.64 23.16 23.56 23.16 12.919 0 23.428-10.332 23.56-23.16v-2.442h.017c0-.109-.017-.213-.017-.322.003-3.919 2.638-7.354 6.441-8.398z" fill="#16479D"/><path d="M6.439 28.22h8.317v19.421C9.668 42.998 6.44 36.071 6.44 28.34v-.119zM53.561 28.22v.12c0 7.733-3.227 14.66-8.315 19.304V28.22h8.315z" fill="#000" opacity=".23"/><path d="M30 0C16.835 0 6.163 10.598 6.163 23.672c0 13.073 10.672 23.671 23.837 23.671s23.837-10.598 23.837-23.671c0-6.278-2.512-12.3-6.982-16.739A23.921 23.921 0 0 0 30 0zm0 38.837c-8.435 0-15.273-6.791-15.273-15.168 0-8.377 6.838-15.167 15.273-15.167 8.435 0 15.273 6.79 15.273 15.167 0 8.377-6.838 15.168-15.273 15.168z" fill="#39A8DF"/></g></svg> Thetascript</h1>
        <p>
          Hi, I&apos;m Vetrichelvan, a Senior UI Developer with eleven years of industry experience, specializing in developing
          web.
        </p>
        <Link to="/contact">
          <Button big>
            <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>
        {postEdges.map(post => (
          <Article
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            timeToRead={post.node.timeToRead}
            slug={post.node.fields.slug}
            categories={post.node.frontmatter.categories}
            key={post.node.fields.slug}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
            categories
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`
