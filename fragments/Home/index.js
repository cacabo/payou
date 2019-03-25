import React, { Component } from 'react'

import Process from './Process'
import Purpose from './Purpose'
import Hero from './Hero'
import Solution from './Solution'
import Problem from './Problem'
import Comparison from './Comparison'
import EmployeeLeadModal from './EmployeeLeadModal'

import {
  Container,
  Section,
  Preheading,
  ActionBtn,
  Title,
  Text,
} from '../../components'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    const { showModal } = this.state
    this.setState({ showModal: !showModal })
  }

  render() {
    const { showModal } = this.state

    return (
      <>
        <Hero />

        <Solution />

        <Comparison />

        <Purpose />

        <Problem />

        <Section>
          <Container>
            <Preheading>Our company</Preheading>
            <Title>About us</Title>
            <Text>
              <strong>Payou</strong>
              {' is an online lending platform that provides personal loans that are automatically deducted from your salary. We partner with your employer to offer their employees a quick and direct access to capital with interest rates up to 60% lower than market alternatives, allowing you to take control of your finances & transforming you from a borrower to a saver.'}
            </Text>
            <ActionBtn handleClick={this.toggleModal}>
              Get in touch
            </ActionBtn>
          </Container>
        </Section>

        <Process />

        <EmployeeLeadModal show={showModal} toggle={this.toggleModal} />
      </>
    )
  }
}

export default Home
