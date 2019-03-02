import React from 'react'
import s from 'styled-components'

import {
  SNOW,
  WHITE,
  MINT,
  FOREST,
  BORDER,
} from '../../constants/colors'
import {
  Container,
  Section,
  Preheading,
  Row,
  Col,
  Title,
  StrongText,
  Text,
} from '../../components'
import { maxWidth, SM } from '../../constants/widths'

const StyledRow = s(Row)`
  background: ${WHITE};
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${BORDER};

  ${maxWidth(SM)} {
    padding-bottom: 0.5rem;
  }
`

const StyledCol = s(Col)`
  padding: 1.5rem 1rem 0 1rem;
  text-align: center;

  :first-child {
    border-right: 1px solid ${BORDER};
  }

  :last-child {
    border-left: 1px solid ${BORDER};
  }

  ${maxWidth(SM)} {
    :first-child {
      border-right: 0;
      border-bottom: 1px solid ${BORDER};
    }

    :last-child {
      border-left: 0;
      border-top: 1px solid ${BORDER};
    }
  }
`

const Number = s.h1`
  color: ${FOREST};
  background: ${MINT};
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: inline-block;
`

const content = [
  {
    number: '80%',
    text: 'of Americans live from paycheck to paycheck',
  },
  {
    number: '25%',
    text: 'of adults skipped necessary medical care in 2017 because they couldn’t afford it',
  },
  {
    number: '20%',
    text: 'of adults are not able to pay their bills on time',
  },
]

export default () => (
  <Section background={SNOW}>
    <Container>
      <Preheading>Mission</Preheading>
      <Title>The problem</Title>

      <StyledRow marginBottom="1.5rem">
        {content.map(({ number, text }) => (
          <StyledCol key={text}>
            <Number>{number}</Number>
            <Text>{text}</Text>
          </StyledCol>
        ))}
      </StyledRow>

      <StrongText>Our mission is simple</StrongText>

      <Text>
        {' We want to help these individuals achieve financial stability by providing them with quick and easy access to reasonably priced loans.'}
      </Text>
    </Container>
  </Section>
)
