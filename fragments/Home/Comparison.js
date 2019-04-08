import React from 'react'
import s from 'styled-components'

import {
  Section,
  Container,
  Preheading,
  Title,
} from '../../components'

const Chart = s.img`
  width: 100%;
  height: auto;
`

export default () => (
  <Section>
    <Container>
      <Preheading>The PAYOU difference</Preheading>
      <Title>Loan comparison</Title>

      <Chart src="/static/img/loan-comparison.png" />
    </Container>
  </Section>
)
