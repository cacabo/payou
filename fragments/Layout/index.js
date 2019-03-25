import React from 'react'
import Head from 'next/head'
import s from 'styled-components'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import Footer from '../Footer'

const Content = s.div`
  width: 100%;
  min-height: calc(100vh - 144px);
`

// TODO SEO

const Layout = ({ children }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />
      <link href="static/style.css" rel="stylesheet" />
    </Head>

    <Nav />

    <Content>
      { children }
    </Content>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
