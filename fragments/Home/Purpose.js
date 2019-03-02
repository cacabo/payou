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
import { BORDER } from '../../constants/colors'

const StyledRow = s(Row)`
  border: 1px solid ${BORDER};
`

const StyledCol = s(Col)`
  text-align: center;
  padding: 1rem;
  border: 1px solid ${BORDER};
`

const content = [
  'Take that honeymoon trip you’ve always dreamed of',
  'Buy the woman of your life the engagement ring she deserves',
  'Take your family on that overdue vacation',
  'Improve your home',
  'Refinance any debts you have',
  'Cover Medical, Auto or Home bills you didn\'t see coming',
]

export default () => (
  <Section>
    <Container>
      <Preheading>Purpose</Preheading>
      <Title>Make the most of the good moments in life</Title>

      <StyledRow>
        {content.map(c => (
          <StyledCol sm={12} md={6} lg={4} key={c}>
            <Text marginBottom="0">{c}</Text>
          </StyledCol>
        ))}
      </StyledRow>
    </Container>
  </Section>
)
