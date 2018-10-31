import React, { Component } from 'react'

import Layout from '../fragments/Layout/index'
import { Container } from '../components'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

  render () {
    return (
      <Layout>
        <Container>
          <h1>My blog post #{this.props.postId}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Container>
      </Layout>
    )
  }
}
