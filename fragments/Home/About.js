import React from 'react'
import s from 'styled-components'

import {
  Text,
  Section,
  Container,
  Preheading,
} from '../../components'
import { NAVY } from '../../constants/colors'

const Wrapper = s.div`
  padding-bottom: 3rem;
  margin-bottom: -3rem;
  background: ${NAVY};
`

export default () => (
  <Wrapper>
    <Section>
      <Container>
        <Preheading white>About us</Preheading>
        <Text big white translucent>
          {'We are an online lending platform that provides personal loans automatically deducted from your paycheck. We partner with employers to offer you quick, direct access to capital with interest rates up to 60% lower than market alternatives, allowing you to take control of your finances.'}
        </Text>
        <Text big white translucent medium>
          {'Transforming you from a borrower to a saver'}
        </Text>
      </Container>
    </Section>
  </Wrapper>
)
