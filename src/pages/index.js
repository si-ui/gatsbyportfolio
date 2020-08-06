/**
 *  Quick demo of the Gatsby Default Starter with integrated
 *  Framer Motion 2 (beta)'s "Magic Motion" feature for easy
 *  and still highly-customizable route transitions.
 *
 *  Some shared elements on index.js and page-2.js are tagged
 *  with a `magicId` and transition magically between their
 *  position and size, with the help of a wrapping
 *  <MagicMotion/> component.
 *
 *  This component is placed in the <Layout/> component, as
 *  the layout does not mount/unmount during route changes
 *
 *  --> note the implementation in gatsby-browser.js through
 *  the `wrapPageElement` API.
 *
 */

import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div style={{ padding: "3rem" }}>
      <motion.h1 magic magicId="headline">
        Learn to
        <br />design and code React apps
      </motion.h1>
    </div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <motion.div
      magic
      magicId="img-1"
      style={{ maxWidth: `200px`, marginBottom: `2rem` }}
    >
      <Image />
    </motion.div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
