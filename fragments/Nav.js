import s from 'styled-components'
import { Container } from '../components'

const NavWrapper = s.nav`
  width: 100%;
  color: white;
  background: black;
  padding: 1rem 0;
`

export default () => (
  <NavWrapper>
    <Container>
      <p>This is the navbar</p>
    </Container>
  </NavWrapper>
)
