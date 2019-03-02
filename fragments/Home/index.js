import React, { Component } from 'react'

import Process from './Process'
import Hero from './Hero'

import {
  Container,
  Section,
  Preheading,
  ActionBtn,
  Title,
  Text,
} from '../../components'

import Problem from './Problem'
import EmployeeLeadModal from './EmployeeLeadModal'

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

        <Problem />

        <Section>
          <Container>
            <Preheading>Our company</Preheading>
            <Title>About us</Title>
            <Text>
              <strong>SalaryMatch</strong>
              {' is an online lending platform that provides personal loans that are automatically deducted from your salary. We partner with your employer to offer their employees a quick and direct access to capital with interest rates up to 60% lower than market alternatives, allowing you to take control of your finances & transforming you from a borrower to a saver.'}
            </Text>
            <ActionBtn handleClick={this.toggleModal}>
              Get in touch
            </ActionBtn>
          </Container>
        </Section>
        <Section>
          <Container>
            <Preheading>Purpose</Preheading>
            <Title>Make the most of the good moments in life</Title>

            <ul>
              <li>Take that honeymoon trip you’ve always dreamed of</li>
              <li>Buy the woman of your life the engagement ring she deserves</li>
              <li>Take your family on that overdue vacation</li>
              <li>Improve your home</li>
              <li>Refinance any debts you have</li>
              <li>Cover Medical, Auto or Home bills you didn’t see coming</li>
            </ul>
          </Container>
        </Section>

        <Process />

        <EmployeeLeadModal show={showModal} toggle={this.toggleModal} />
      </>
    )
  }
}

export default Home
