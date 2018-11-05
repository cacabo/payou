import Head from 'next/head'
import s from 'styled-components'

import Nav from '../Nav'
import Footer from '../Footer'
import Style from './Style'

const App = s.div`
  width: 100%;
  min-height: 75vh;
`

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Style />

    <Nav />

    <App>
      { children }
    </App>

    <Footer />
  </div>
)

export default Layout
