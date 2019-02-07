import s from 'styled-components'
import { Container } from '../components'

import { WHITE, BORDER } from '../constants/colors'

const NavWrapper = s.nav`
  width: 100%;
  background: ${WHITE};
  border-bottom: 1px solid ${BORDER};
  padding: 1rem 0;
  position: fixed;
`

const NavSpace = s.div`
  display: block;
  width: 100%;
  height: 56px;
`

const Logo = s.h4`
  margin-bottom: 0;
`

export default () => (
  <>
    <NavWrapper>
      <Container>
        <Logo>SalaryMatch</Logo>
      </Container>
    </NavWrapper>

    <NavSpace />
  </>
)
