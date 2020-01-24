import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const About = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam
        facilis nam quis harum praesentium assumenda expedita maxime, ea
        aspernatur porro corporis in deserunt, ipsa reprehenderit facere
        quibusdam itaque rerum.
      </p>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default About
