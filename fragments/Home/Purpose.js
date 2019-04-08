import React from 'react'
import s from 'styled-components'

import {
  Container,
  Section,
  Preheading,
  Title,
  Text,
  Row,
  Col,
} from '../../components'
import {
  BORDER,
  SKY,
  SCOTCH,
  LAVENDER,
  SEAFOAM,
  CREAMSICLE,
  RUBY,
} from '../../constants/colors'

const StyledRow = s(Row)`
  border: 1px solid ${BORDER};
`

const Icon = s.img`
  height: 4rem;
  width: 4rem;
  background: ${({ background }) => background};
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`

const StyledCol = s(Col)`
  text-align: center;
  padding: 1rem;
  border: 1px solid ${BORDER};
`


const content = [
  {
    text: 'Take that honeymoon trip you’ve always dreamed of',
    color: SKY,
    icon: 'honeymoon.svg',
  },
  {
    text: 'Buy the woman of your life the engagement ring she deserves',
    color: SCOTCH,
    icon: 'ring.svg',
  },
  {
    text: 'Take your family on that overdue vacation',
    color: SEAFOAM,
    icon: 'umbrella.svg',
  },
  {
    text: 'Improve your home',
    color: RUBY,
    icon: 'house.svg',
  },
  {
    text: 'Refinance any debts you have',
    color: LAVENDER,
    icon: 'money.svg',
  },
  {
    text: 'Cover Medical, Auto or Home bills you didn\'t see coming',
    color: CREAMSICLE,
    icon: 'bill.svg',
  },
]

export default () => (
  <Section>
    <Container>
      <Preheading>Purpose</Preheading>
      <Title>Make the most of the good moments in life</Title>

      <StyledRow>
        {content.map(({ text, color, icon }) => (
          <StyledCol sm={12} md={6} lg={4} key={text}>
            <Icon src={`/static/img/icons/${icon}`} alt={icon} background={color} />
            <Text marginBottom="0">{text}</Text>
          </StyledCol>
        ))}
      </StyledRow>
    </Container>
  </Section>
)
