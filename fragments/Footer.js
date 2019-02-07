import s from 'styled-components'

import { Container } from '../components'
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
    <Container>
      <Logo>SalaryMatch</Logo>
    </Container>
  </FooterWrapper>
)
