import React from 'react'
import s from 'styled-components'

import { Container, Section } from '../components'
import { SNOW } from '../constants/colors'

const FooterWrapper = s.div`
  width: 100%;
  padding: 1rem 0;
  background: ${SNOW};

  p {
    margin-bottom: 0;
  }
`

const Logo = s.h4``

export default () => (
  <FooterWrapper>
    <Section>
      <Container>
        <Logo>SalaryMatch</Logo>
        <p>
          salary-match.com &copy; 2019, all rights reserved.
        </p>
      </Container>
    </Section>
  </FooterWrapper>
)
