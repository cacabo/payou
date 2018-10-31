import s from 'styled-components'
import { Container } from '../components'

const FooterWrapper = s.div`
  width: 100%;
  padding: 1rem 0;
  background: black;
  color: white;
`

export default () => (
  <FooterWrapper>
    <Container>
      <p>This is the footer</p>
    </Container>
  </FooterWrapper>
)
