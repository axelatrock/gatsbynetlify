import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import Logo from "../images/logo.svg"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

const HeaderWrapper = styled.header`
  background: mistyrose;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    color: #FFF;
    &:hover {
      border-bottom: 3px solid aliceblue;
    }
  }
`

const Billboard = styled(Img)`

`

const Header = ({ data, location }) => {
  const bgImage = useStaticQuery(graphql`
    {
      background: file(relativePath: { eq: "bg.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const wrapper = useRef(null)
  useEffect(() => {
    if (location.pathname === "/") {
      wrapper.current.animate([
          {height: "20vh"},
          {height: "70vh"}
        ], 
        {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        }
      )
    } else {
      wrapper.current.animate([
          {height: "70vh"},
          {height: "20vh"}
        ], 
        {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        }
      )
    }
  })

  return (
    <HeaderWrapper ref={wrapper}>
      <HeaderContainer>
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={Logo} alt="logo" />
          </Link>
        </h1>
        <MainNav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </MainNav>
      </HeaderContainer>
      <Billboard style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3
      }}fluid={bgImage.background.childImageSharp.fluid}></Billboard>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
