import React from 'react'

import {
  Container,
  Section,
  Preheading,
  Title,
  Text,
  StrongText,
  List,
} from '../../components'

const steps = [
  {
    title: 'Create an Account',
    text: 'Verify your employment & personal information. It only takes a few minutes.',
  },
  {
    title: 'Hassle-free Online Application',
    text: 'Choose your desired loan amount and with our proprietary model, we help you find the interest rate that best fits your needs',
  },
  {
    title: 'Review & Accept',
    text: 'Evaluate and sign your personalized loan terms, including the proposed repayment schedule and total costs.',
  },
  {
    title: 'Receive the Funds',
    text: 'Within 3* business days of applying, you receive the money into your account',
  },
  {
    title: 'Repayment',
    text: 'Each paycycle we will automatically deduct your loan payments from your paycheck, so you don’t have to worry about managing your cash flows.',
  },
]

export default () => (
  <Section>
    <Container>
      <Preheading>Our Process</Preheading>
      <Title>We make it easy</Title>

      <List items={steps} />

      <StrongText marginBottom="0.5rem">
        The best part?
      </StrongText>
      <Text>
        {'After you apply, your part of the equation is complete. As soon as we approve your loan, we handle the rest!'}
      </Text>
    </Container>
  </Section>
)
