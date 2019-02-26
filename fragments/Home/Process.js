import React from 'react'
import s from 'styled-components'
import PropTypes from 'prop-types'

import {
  Container,
  Flex,
  Flexbox,
  Section,
  Preheading,
  Title,
  Text,
  StrongText,
} from '../../components'
import { MINT, FOREST } from '../../constants/colors'

const List = s.div`
  p {
    margin-bottom: calc(1.45rem / 8) !important;
  }
`

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

const NumberCircle = s.div`
  width: 2.5rem;
  height: 2.5rem;
  background: ${MINT};
  border-radius: 50%;
  color: ${FOREST};
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 0.65rem;
  margin-right: 1.25rem;
`

const ListNumber = ({ number }) => (
  <NumberCircle>
    {number}
  </NumberCircle>
)

ListNumber.propTypes = {
  number: PropTypes.number.isRequired,
}

export default () => (
  <Section>
    <Container>
      <Preheading>Our Process</Preheading>
      <Title>We make it easy</Title>

      <List>
        {steps.map(({ title, text }, idx) => (
          <Flexbox key={`${title}-${text}`} marginBottom="1.5rem">
            <ListNumber number={idx + 1} />

            <Flex>
              <StrongText>{title}</StrongText>
              <Text>{text}</Text>
            </Flex>
          </Flexbox>
        ))}
      </List>

      <StrongText marginBottom="0.5rem">
        The best part?
      </StrongText>
      <Text>
        {'After you apply, your part of the equation is complete. As soon as we approve your loan, we handle the rest!'}
      </Text>
    </Container>
  </Section>
)
