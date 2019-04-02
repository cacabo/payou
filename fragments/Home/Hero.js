import React from 'react'
import s from 'styled-components'

import routes from '../../constants/routes'

import {
  Container,
  Section,
  Title,
  Text,
  Row,
  Col,
  Btn,
} from '../../components'

const Wrapper = s.div`
  padding-top: 22.5vh;
  padding-bottom: 15vh;
  font-size: 120%;
  line-height: 1.25;
  background-image: url('/static/img/people.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: -3rem;
`

export default () => (
  <Wrapper>
    <Section>
      <Container>
        <Row>
          <Col width="75%">
            <Title big white>
              {'Easy, quick, affordable loans'}
            </Title>
            <Text big white>
              We want to help you move from debt to savings through affordable salary-deducted loans
            </Text>
            <Btn href={routes.NEW_APPLICATION_ROUTE}>
              Get in touch
            </Btn>
          </Col>
        </Row>
      </Container>
    </Section>
  </Wrapper>
)
