import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import { motion } from "framer-motion"

import SEO from "../components/seo"

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <motion.h1 magic magicId="headline">
      Hi from the second page
    </motion.h1>

    <motion.div
      magic
      magicId="img-1"
      style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
    >
      <Image />
    </motion.div>

    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default SecondPage
