import React from 'react'
import Head from 'next/head'
import s from 'styled-components'
import PropTypes from 'prop-types'

import Nav from '../Nav'
import Footer from '../Footer'
import Style from './Style'

const App = s.div`
  width: 100%;
  min-height: calc(100vh - 144px);
`

// TODO SEO

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet" />
    </Head>

    <Style />

    <Nav />

    <App>
      { children }
    </App>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
